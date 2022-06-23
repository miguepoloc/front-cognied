import React, { useContext, useEffect, useState } from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/Dashboard.scss'
// import MiniCarta from '../components/Dashboard/MiniCarta'
import CartaImagen from '../components/Dashboard/CartaImagen'
import CartaImagenFondo from '../components/Dashboard/CartaImagenFondo'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import CartaSeguimiento from '../components/Dashboard/CartaSeguimiento'
import CartaLineaTiempo from '../components/Dashboard/CartaLineaTiempo'
import CartaBarras from '../components/Dashboard/CartaBarras'
import CartaGrafica from '../components/Dashboard/CartaGrafica'
import { AuthContext } from '../context/AuthContext'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import '../assets/css/soft-ui-dashboard.scss'
import { ModulosInicio } from '../components/Dashboard/modulos_inicio/ModulosInicio'

const Dashboard = () => {
  const { authState } = useContext(AuthContext)

  const { userInfo } = authState

  const getData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/avance_modulos/${userInfo.id}`

    const response = await fetch(url)
      .then((datos) => datos.json())
      .then((datos) => {
        console.log(datos)
        return datos
      })
      .catch((err) => {
        console.log(err)
        return null
      })

    console.log(response)

    return response
  }

  // Obtención de datos
  const [datauser, setDatauser] = useState([])

  useEffect(async function () {
    const response = await getData()
    if (response) {
      console.log(response)
      setDatauser(response)
    } else {
      console.log('No se pudieron traer los datos...')
    }
  }, [])

  return (
    <>
      <div
        className="g-sidenav-show  bg-gray-100 "
      >
        <main className="main-content position-relative h-100 border-radius-lg ">
          <NavBarDashboard datauser={datauser} />
          <div className="container-fluid py-4">
            <div className="row my-1">
              <CartaImagen />
            </div>
            <div className="row mt-1">
              <ModulosInicio />
            </div>
            <div className="row my-4">
              <CartaSeguimiento datauser={datauser} />
              {/* <CartaLineaTiempo /> */}
            </div>

            <FooterDashboard />
          </div>

        </main>
      </div>
    </>
  )
}

export default Dashboard
