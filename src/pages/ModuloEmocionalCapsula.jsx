import React from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/ModuloEmocional.scss'
import BarraLateral from '../components/Dashboard/BarraLateral'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

import { useHistory, useLocation } from 'react-router-dom'
import RuletaEmociones from '../components/Act_2.2/RuletaEmociones'
import { Button } from 'react-bootstrap'

async function putData () {
  const url = 'http://127.0.0.1:8002/api/seccion_emocional/1/'
  const data = {
    id_seccion: 1,
    usuario: 'prueba',
    capsula1: false,
    capsula2: false,
    actividad1: true,
    capsula3: true,
    actividad2: true,
    capsula4: true,
    actividad3: false,
    capsula5: true,
    capsula6: true,
    actividad4: true,
    capsula7: true,
    capsula8: true
  }

  await fetch(url, {
    method: 'PUT', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((datos) => datos.json())
    .then((datos) => {
      console.log(datos)
      return datos
    })
    .catch((err) => {
      console.log(err)
      return null
    })
}

const ModuloEmocionalCapsula = ({ capsula, nombrecapsula }) => {
  // assigning location variable
  const location = useLocation()

  // destructuring pathname from location
  const { pathname } = location

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

  const history = useHistory()

  function cambioBoton () {
    switch (splitLocation[1]) {
      case 'emocionalcap1':
        putData()
        history.push('/emocionalcap2')
        break
      case 'emocionalcap2':
        history.push('/emocionalejer1')
        break
      case 'emocionalejer1':
        history.push('/emocionalcap3')
        break
      case 'emocionalcap3':
        history.push('/emocionalejer2')
        break
      case 'emocionalejer2':
        history.push('/emocionalcap4')
        break
      case 'emocionalcap4':
        history.push('/emocionalejer3')
        break
      case 'emocionalejer3':
        history.push('/emocionalcap5')
        break
      case 'emocionalcap5':
        history.push('/emocionalcap6')
        break
      case 'emocionalcap6':
        history.push('/emocionalejer4')
        break
      case 'emocionalejer4':
        history.push('/emocionalcap7')
        break
      case 'emocionalcap7':
        history.push('/emocionalcap8')
        break
      case 'emocionalcap8':
        history.push('/dashboard')
        break
    }
  }
  return (
        <>
            <div className="g-sidenav-show  bg-gray-100">
                <BarraLateral />

                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <NavBarDashboard section={nombrecapsula} />
                    <div className="container-fluid py-4">

                        <div >
                            {<img src={capsula} alt="capsula" className='img-capsula' /> }
                        </div>
                        <hr />
                        <Button
                            className='botoncentrado'
                            variant="success"
                            size="lg"
                            onClick={cambioBoton}
                        >
                            Siguiente
                        </Button>

                        <FooterDashboard />
                        <ButtonLibro text={'Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). Aprendiendo sobre las emociones: manual de educación emocional. Coordinación Educativa y Cultural Centroamericana.'} title = {'Referencia'} />

                    </div>
                </main>
            </div>

        </>
  )
}

export default ModuloEmocionalCapsula
