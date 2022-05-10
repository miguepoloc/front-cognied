import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import '../../assets/css/Surveys.scss'
import Answer from '../Surveys/Answer'
import swal from 'sweetalert2'
import pato from './img/pato.jpg'

const options = [
  { value: 'alegria', label: 'Alegría' },
  { value: 'tristeza', label: 'Tristeza' },
  { value: 'ira', label: 'Ira' },
  { value: 'sorpresa', label: 'Sorpresa' },
  { value: 'miedo', label: 'Miedo' },
  { value: 'asco', label: 'Asco' }
]

const RuletaEmociones = () => {
  window.Swal = swal
  /*
    •Sorpresa.
    •Asco
    •Miedo
    •Alegría
    •Tristeza
    •Ira
 */
  const color = '#4cbeff'
  const root = document.documentElement
  root.style.setProperty('--colorCheck', color)

 

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <img
              style={{ width: '150px', height: '150px' }}
              className="card-img-left flex-auto d-none d-md-block "
              src={pato}
            />
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
              <h5 className="card-title">Actividad 2.2</h5>
              <p className="card-text">
                ¡Le has dado nombre a las experiencias emocionales! Pero… ¿sabes en que familia emocional se ubican? Si recuerdas las funciones de las emociones, como te recomendó Nombre del ganso, no te será difícil la siguiente parte del ejercicio.En la ruleta que ves aquí están los nombres de las emociones básicas. Girala y te aparecerá una emoción. Dale click al botón azul que dice “Remove”. Luego, selecciona la emoción que te salió en “Coloca la emoción”.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div
            className="callout mb-5  h-md-250 "
            style={{ borderLeftColor: color }}
          >
            <h5 style={{ color: color }}>
              {section1.activities[activityIndex].name}
            </h5>

            <p>
              Ahora, aquí está la tarea, debes ir a las dos barras de abajo y seleccionar en cada una tú definición, sabiendo a que se refieren, que consideres que pertenece o se relacionan con esa emoción. Cada emoción está relacionada con por lo menos dos de las definiciones que has nombrado. Una vez lo selecciones, darle al botón de “Enviar” para comprobar tu respuesta.
            </p>
          </div>
        </div>
      </div>
      <Form>
        <div className="row">
          <div className='col-6' ></div>
          <div className='col-6' >¿Qué nombre le darías?</div>
        </div>
        <div className="row">
          <div className='col-6' >Pena mezclado con placer y efecto originado por el recuerdo de una perdida</div>
          <div className='col-6' >¿Qué nombre le darías?</div>
        </div>
      </Form>
    </div>
  )
}

export default RuletaEmociones
