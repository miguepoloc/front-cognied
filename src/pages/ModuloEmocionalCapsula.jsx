/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/ModuloEmocional.scss'
import BarraLateral from '../components/Dashboard/BarraLateral'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

import { useHistory, useLocation, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { PUT_avance_modulos } from '../helpers/helperApi'
import { AuthContext } from '../context/AuthContext'
import { linksEmocional } from '../helpers/helper_emocional'

const ModuloEmocionalCapsula = () => {
  const { slug } = useParams()

  console.log(linksEmocional[slug])
  // Trae los datos del usuario
  const { authState } = useContext(AuthContext)
  // Se guardan en userInfo
  const { userInfo } = authState
  // Datos del usuario
  const [datauser, setDatauser] = useState([])

  // Obtiene los datos de avance que lleva el usuario
  const getAvance = async () => {
    const avance = await Axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`
    })
    return (avance.data)
  }

  // Obtiene el URL donde se encuentra
  const location = useLocation()

  // desestructurando el nombre de la ruta desde location
  const { pathname } = location

  // Se divide la localización por /
  const splitLocation = pathname.split('/')

  // Para el control de la ubicación
  const history = useHistory()

  // Estado de control de ubicación, se utiliza para actualizar la barra lateral
  const [control, setControl] = useState(1)

  useEffect(async function () {
    // Guarda en response el avance que lleva el usuario
    const response = await getAvance()
    if (response) {
      console.log(response)
      // Y lo coloca en el estado de datos del usuario
      setDatauser(response)
    } else {
      console.log('No se pudieron traer los datos...')
    }
  }, [control]) // Se controla el cambio a partir del estado control

  // Cuando se presione el botón de siguiente
  const cambioBoton = async () => {
    console.log(userInfo)
    console.log(datauser)
    // if (datauser.emocional <= ) {

    // }

    const jsonx = {
      emocional: 3,
      usuario: userInfo.id
    }
    setControl(control + 1)
    PUT_avance_modulos(userInfo.id, jsonx)

    // const putAvance = async () => {
    //   const avance = await Axios({
    //     method: 'put',
    //     url: `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`,
    //     data: {
    //       emocional: 3,
    //       usuario: userInfo.id
    //     }

    //   })
    //   console.log(avance)
    //   return (avance)
    // }

    // const avanzando = await putAvance()

    // switch (splitLocation[1]) {
    //   case 'emocionalcap1':
    //     putData()
    //     history.push('/emocionalcap2')
    //     break
    //   case 'emocionalcap2':
    //     history.push('/emocionalejer1')
    //     break
    //   case 'emocionalejer1':
    //     history.push('/emocionalcap3')
    //     break
    //   case 'emocionalcap3':
    //     history.push('/emocionalejer2')
    //     break
    //   case 'emocionalejer2':
    //     history.push('/emocionalcap4')
    //     break
    //   case 'emocionalcap4':
    //     history.push('/emocionalejer3')
    //     break
    //   case 'emocionalejer3':
    //     history.push('/emocionalcap5')
    //     break
    //   case 'emocionalcap5':
    //     history.push('/emocionalcap6')
    //     break
    //   case 'emocionalcap6':
    //     history.push('/emocionalejer4')
    //     break
    //   case 'emocionalejer4':
    //     history.push('/emocionalcap7')
    //     break
    //   case 'emocionalcap7':
    //     history.push('/emocionalcap8')
    //     break
    //   case 'emocionalcap8':
    //     history.push('/dashboard')
    //     break
    // }
  }
  return (
    <>
      <div className="g-sidenav-show  bg-gray-100">
        <BarraLateral datauser={datauser} />

        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <NavBarDashboard section={linksEmocional[slug].nombre} />
          <div className="container-fluid py-4">

            <div >
              {linksEmocional[slug].tipoCapsula
                ? < img src={linksEmocional[slug].imagen} alt="capsula" className='img-capsula' />
                : linksEmocional[slug].actividad
              }

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
            <ButtonLibro text={'Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). Aprendiendo sobre las emociones: manual de educación emocional. Coordinación Educativa y Cultural Centroamericana.'} title={'Referencia'} />

          </div>
        </main>
      </div>

    </>
  )
}

export default ModuloEmocionalCapsula
