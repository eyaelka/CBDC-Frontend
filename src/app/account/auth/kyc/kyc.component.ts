import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import * as faceapi from 'face-api.js';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericUserService } from 'src/app/core/services/generic-user.service';
import { EndUSer } from 'src/app/pages/activate-account/enduser.model';
import { MyRouterLink } from '../../../core/models/router-links';
import { nextTick } from 'process';




@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {
  kycForm: FormGroup;
  myRouterLink: MyRouterLink = new MyRouterLink();

  public webcamImage: WebcamImage = null;
  images: WebcamImage[] = [];
  imageUpload: any;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  loading = true;
  matchFound = false;
  faceMatchScore = 0;
  processingResult = false;
  processingCompleted = false;
  container: any;
  step = 1;
  loadedImageLabels: any;
  noFaceDetectedError = false;
  uploadSuccess = false;
  kycFrom: FormGroup;
  idForm: FormGroup;

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  constructor(private modalService: NgbModal, private router: Router,
              private formBuilder: FormBuilder,
              private userService: GenericUserService) { }

  ngOnInit(): void {
    this.idForm = this.formBuilder.group({
      imageUpload: ['',[Validators.required]]
    })

    // this.kycFrom = this.formBuilder.group({
    //   cin : ['',[Validators.required]],
    //   nom : ['',[Validators.required]],
    //   dateNaissance : ['',[Validators.required]],
    //   adresse : ['',[Validators.required]],
    //   nationalite : ['',[Validators.required]],
    //   telephone : ['',[Validators.required]],
    //   bankWhoAddUser : ['',[Validators.required]]
    // })

    this.kycForm = new FormGroup({
      cin : new FormControl(),
      nom : new FormControl(),
      dateNaissance : new FormControl(),
      adresse : new FormControl(),
      nationalite : new FormControl(),
      telephone : new FormControl(),
      bankWhoAddUser : new FormControl(),







    })

    this.imageUpload = document.getElementById('imageUpload');
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/assets/models')
    ]).then(() => {
      this.loading = false;
    });
  }

  /**
   * Open modal
   * @param content modal content
   */
  verificationModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  async handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.images.push(webcamImage);
    this.loadedImageLabels = await this.loadImageLabels();
  }

  loadImageLabels(): Promise<any> {
    const labels = ['Face match detected'];
    return Promise.all(
      labels.map(async label => {
        const descriptions = [];
        const img = await faceapi.fetchImage(`${this.webcamImage.imageAsDataUrl}`);
        const detections = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions({ inputSize: 320 })).withFaceLandmarks().withFaceDescriptor();
        if (detections?.descriptor) {
          this.noFaceDetectedError = false;
          descriptions.push(detections.descriptor);
        } else {
          this.noFaceDetectedError = true;
        }
        return new faceapi.LabeledFaceDescriptors(label, descriptions)
      })
    )
  }
  triggerSnapshot(): void {
    this.trigger.next();
  }

  fileChangeEvent(e: File[]): void {
    const reader = new FileReader();
    let imgSrc;
    reader.readAsDataURL(e[0]);
    reader.onload = (_event) => {
      imgSrc = reader.result;
      const img = document.createElement("img");
      img.src = imgSrc;
      // Resizing the image to display
      img.style.width = '50%';
      img.style.height = 'auto';
      const uploadedImage = document.getElementById("uploadedImage");
      if (uploadedImage.hasChildNodes()) {
        uploadedImage.removeChild(uploadedImage.firstChild);
      }
      uploadedImage.appendChild(img);
      this.start(e[0]);
      this.uploadSuccess = true;
    }
  }

  async start(uploadedImage: any) {
    this.matchFound = false;
    this.faceMatchScore = 0;
    this.processingResult = true;
    this.processingCompleted = false;
    let image;
    let canvas;

    const labeledFaceDescriptors = this.loadedImageLabels;
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.5);
    image = await faceapi.bufferToImage(uploadedImage);
    canvas = faceapi.createCanvasFromMedia(image);
    const displaySize = { width: image.width, height: image.height };
    faceapi.matchDimensions(canvas, displaySize);
    const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions({ inputSize: 320 })).withFaceLandmarks().withFaceDescriptors();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor));
    results.forEach((result, i) => {
      if (result.label === 'Face match detected') {
        this.matchFound = true;
        // Displaying as a percentage
        this.faceMatchScore = Math.round((1 - result.distance) * 100);
      } else if (!this.matchFound && i === results.length - 1) {
        // Displaying as a percentage
        this.faceMatchScore = Math.round((1 - result.distance) * 100);
      }
    });
    this.processingResult = false;
    this.processingCompleted = true;
  }

  goToDashboard(){
    this.router.navigate(['/page/dashboard']);
  }


  validateUserAccount(){
    let request = {
      cin: this.kycForm.value.cin,
      nom: this.kycForm.value.nom,
      dateNaissance: this.kycForm.value.dateNaissance,
      adresse: this.kycForm.value.adresse,
      nationalite: this.kycForm.value.nationalite,
      telephone: this.kycForm.value.telephone,
      bankWhoAddUser: this.kycForm.value.bankWhoAddUser
    }
    console.log(request);
    this.userService.notifyAdmin(this.myRouterLink.linkUserNotifyAdmin,request).subscribe(
      res =>{
        console.log('done')
      })

  }


}
