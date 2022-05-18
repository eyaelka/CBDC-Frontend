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

}
