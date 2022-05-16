
/*
La idea es que los alerts para que sea facil hacerle cambio a las imagenes.
*/

import swal from "sweetalert2";
import ganso_elegante from "../assets/img/ganso/250x200/ganso_elegante.png"
import ganso_stop from "../assets/img/ganso/250x200/ganso_stop.png"
import ganso_escribiendo from "../assets/img/ganso/250x200/ganso_escribiendo.png"
import ganso_feliz from "../assets/img/ganso/250x200/ganso_alegria.png"
import ganso_triste from "../assets/img/ganso/250x200/ganso_tristeza.png"

const colorTheme = "#4cbeff";

window.Swal = swal;
//Se utiliza en la parte 1 de la actividad 1 del módulo de david.
export const Warning_Alert = (
    title = "",
    htmlText = "",
    btnConfirmcolor = colorTheme
  ) => {
  return Swal.fire({
    title: title,
    imageUrl: ganso_stop,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: "¿Seguro que esa era la respuesta?",
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: `Aceptar`,
    focusConfirm: true,
  });
}

export const Correct_Alert = (
  title = "<strong>¡Correcto!</strong>",
  htmlText = "",
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: ganso_elegante,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: "¡Correcto!",
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: `Aceptar`,
    focusConfirm: true,
  });
}

export const ErrorAlert = (
  title = "<strong>Uhm.. algo ha salido mal</strong>",
  htmlText = "¿Porque no intentas otra vez?",
  alt = "Algo ha salido mal",
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: ganso_stop, //Corregir xd
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: `Aceptar`,
    focusConfirm: true,
  });
}

export const SendAlert = (
  title = "<strong>Enviando...</strong>",
  htmlText = "",
  alt = "Espera un momento",
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: ganso_escribiendo, //Corregir xd
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false,
  });
}

export const SendOkAlert = (
  title = "<strong>¡Se ha enviado con exito!</strong>",
  htmlText = "",
  alt = "Espera un momento",
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: ganso_feliz,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: `Aceptar`,
    focusConfirm: true,
  });
}

export const SendBadAlert = (
  title = "<strong>¡Ups!</strong>",
  htmlText = "Parece que algo salió mal",
  alt = "Espera un momento",
  btnConfirmcolor = colorTheme
) => {
  return Swal.fire({
    title: title,
    imageUrl: ganso_triste,
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: alt,
    html: htmlText,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: btnConfirmcolor,
    confirmButtonText: `Aceptar`,
    focusConfirm: true,
  });
}

