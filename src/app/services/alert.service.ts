import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showError(err: any) {
    if (err.status == 0) this.errorAlert('Error de conexion...', 'No hay internet para conectarnos :(');
    else if (err.code == 139) this.errorToast('Ya has marcado como favorito en este tweet');
    else if (err.code == 327) this.errorToast('Ya has hecho retweet en este tweet');
    else if (err.code == 144) this.errorAlert('Tweet eliminado...', 'ya no existe el tweet :(');
    else this.errorAlert('Error...', 'no se pudo hacer la operacion :(');
  }

  errorAlert(title: string, text: string) {
    //Swal.fire({ type: 'error', title: `${title}`, text: `${text}` });
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

  infoAlert(title: string, text: string) {
    //Swal.fire({ type: 'info', title: `${title}`, text: `${text}` });
  }

  errorToast(text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    //Toast.fire({ type: 'error', title: text });
  }

  successToast(text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    //Toast.fire({ type: 'success', title: text });
  }

  infoToast(text: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    });
    //Toast.fire({ type: 'info', title: text });
  }
}
