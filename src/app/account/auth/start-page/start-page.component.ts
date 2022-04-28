import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  successmsg = false;

  constructor( private router: Router) { }


  ngOnInit(): void {
    document.body.classList.add('auth-body-bg')


  }
  


}


