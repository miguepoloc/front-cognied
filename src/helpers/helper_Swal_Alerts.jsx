
/*
La idea es que los alerts para que sea facil hacerle cambio a las imagenes.
*/

import swal from "sweetalert2";
import ganso_elegante from "../assets/img/ganso/250x200/ganso_elegante.png"
import ganso_stop from "../assets/img/ganso/250x200/ganso_stop.png"

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
  htmlText = "¿Porque no intentas otra vez?",
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
  title = "<strong>¡Correcto!</strong>",
  imageUrl = ganso_stop, 
  htmlText = "¿Porque no intentas otra vez?"
) => {
  return Swal.fire({
    title: "<h5><b>¿Seguro que no olvidaste hacer algo?</b></h5>",
    imageUrl: ganso_stop, //Corregir xd
    imageWidth: 250,
    imageHeight: 200,
    imageAlt: "¿Seguro que no olvidaste hacer algo?",
    html: `<p>Parece que en la columna <i><b>${seccion}</b></i> no diste respuesta a alguna(s) opcion(es)</p>`,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: color,
    confirmButtonText: `Aceptar`,
    focusConfirm: true,
  });
}
