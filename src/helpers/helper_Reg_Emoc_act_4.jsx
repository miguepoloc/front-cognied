import alegria from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Alegria.jpg'
import asco from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Asco.jpg'
import ira from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Ira.jpg'
import miedo from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Miedo.jpg'
import sorpresa from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Sorpresa.jpg'
import tristeza from '../assets/img/modulo_emocional/Actividad_1.1/seccion2/Tristeza.jpg'
import situacion1 from '../components/Act_4.1/img/Situacion1.png'
import situacion2 from '../components/Act_4.1/img/Situacion2.png'
import situacion3 from '../components/Act_4.1/img/Situacion3.png'
import situacion4 from '../components/Act_4.1/img/Situacion4.png'
export const initialOptions = {
  select_sensaciones_0: -1,
  select_sensaciones_1: -1,
  select_sensaciones_2: -1,
  select_pensamientos_0: -1,
  select_pensamientos_1: -1,
  select_pensamientos_2: -1,
  select_acciones_0: -1,
  select_acciones_1: -1,
  select_acciones_2: -1
}

export const section4 = {
  name: 'Seccion4',
  activities: [
    {
      name: 'Ejercicio 1',
      imagen: situacion1,
      text: 'Es importante recordar que, en este tipo de situaciones, si bien las emociones pueden llevarnos a actuar de forma impulsiva y a veces de forma espontanean, el ejercicio de detenerse, reconocer lo que experimentamos y reflexionar se vuelve un punto clave que tendrá un impacto en nuestra salud mental y en las consecuencias en nuestro entorno ¡Gestionar nuestras emociones es posible!'
    },
    {
      name: 'Ejercicio 2',
      imagen: situacion2,
      text: 'Recordar la función e importancia que tienen las emociones es un punto clave al reconocer como gestionarlas. Los niveles en que una emoción puede estar influyen también, como se ha visto. ¡No despreciemos el valor de las emociones negativas!'
    },
    {
      name: 'Ejercicio 3',
      imagen: situacion3,
      text: 'Recordar que gestionar no solo es saber manejar las emociones negativas sino darle un buen uso y potencialización a las positivas es un punto importante a tener en cuenta. ¡Acepta la experiencia emocional y gestiónala adecuadamente!'
    },
    {
      name: 'Ejercicio 4',
      imagen: situacion4,
      text: 'Las estrategias que utilizamos en si no son buenas o malas, es algo importante a tener en cuenta. Siempre dependerá de los diferentes factores que rodean tanto a la situación como a ti como persona. Lo importante es sabes comprender y aceptar las emociones para poder manejarlas de la mejor forma posible, y, siempre que lo necesites, saber pedir ayuda a los demás cuando sientes que todo se desborda.'
    }
  ]
}

/*
      utilidades
*/
export const setColorSelect = (color) => {
  const root = document.documentElement
  root.style.setProperty('--colorCheck', color)
}

export const countElementInArray = (array, value) => {
  let count = 0
  array.forEach((v) => (v === value && count++))
  return count
}

export const areUniqueValue = (arr) => {
  for (const value of arr) {
    if (countElementInArray(arr, value) > 1) {
      return false
    }
  }
  return true
}

export const areValidValues = (arr) => {
  for (const value of arr) {
    if (value === -1) {
      return false
    }
  }
  return true
}
