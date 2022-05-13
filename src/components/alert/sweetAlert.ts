import Swal, { SweetAlertIcon } from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import './sweetAlert.scss';

const swalStyled = Swal.mixin({
  customClass: {
    confirmButton: 'btn alert-btn-acept',
    cancelButton: 'btn alert-btn-cancel',
    denyButton: 'btn alert-btn-deny',
  },
  buttonsStyling: false
})

export const sweetAlert = (alertIcon: SweetAlertIcon, title: string, text:string) => {
  swalStyled.fire({
    icon: alertIcon,
    title: title,
    text: text,
    confirmButtonText: 'Aceptar',
    // showDenyButton: true,
    // showCancelButton: true,
    // denyButtonText: 'No',
    // cancelButtonText: 'Cancelar'
  })
  // .then((result) => {
  //   if (result.isConfirmed) {
  //     swalStyled.fire('Saved!', '', 'success')
  //   } else if (result.isDenied) {
  //     swalStyled.fire('Changes are not saved', '', 'info')
  //   }
  // })
}

export const sweetAlertRedirection = (alertIcon: SweetAlertIcon, title: string, text:string, url:string) => {
  swalStyled.fire({
    icon: alertIcon,
    title: title,
    text: text,
    confirmButtonText: 'Aceptar',
  })
  .then((result) => {
    if (result.isConfirmed) {
      window.location.href = url;
    } 
  })
}
