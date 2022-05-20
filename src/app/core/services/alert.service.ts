import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  showAlert(handler , text){
    Swal.fire({
      text:text,
      title: 'Auto close alert!',
      timer: 2000

    }).then((result) => {
      if (result.value) {
        handler() ;
      }
    })
  }

  successAlert(title) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

    errorAlert(title) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

}
