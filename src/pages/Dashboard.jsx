import React, { useContext, useEffect, useState } from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/Dashboard.scss'
import MiniCarta from '../components/Dashboard/MiniCarta'
import CartaImagen from '../components/Dashboard/CartaImagen'
import CartaImagenFondo from '../components/Dashboard/CartaImagenFondo'
import BarraLateral from '../components/Dashboard/BarraLateral'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import CartaSeguimiento from '../components/Dashboard/CartaSeguimiento'
import CartaLineaTiempo from '../components/Dashboard/CartaLineaTiempo'
import CartaBarras from '../components/Dashboard/CartaBarras'
import CartaGrafica from '../components/Dashboard/CartaGrafica'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
  const { authState } = useContext(AuthContext)

  const { userInfo } = authState

  const getData = async () => {
    const url = `http://127.0.0.1:8002/api/avance_modulos/${userInfo.id}`

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
  const [control, setControl] = useState(1)

  useEffect(async function () {
    const response = await getData()
    if (response) {
      console.log(response)
      setDatauser(response)
    } else {
      console.log('No se pudieron traer los datos...')
    }
  }, [control])

  return (
    <>
      <div className="g-sidenav-show  bg-gray-100">
        <BarraLateral datauser={datauser} />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <NavBarDashboard />
          <div className="container-fluid py-4">
            <div className="row">
              <MiniCarta />
              <MiniCarta />
              <MiniCarta />
              <MiniCarta />
            </div>
            <div className="row mt-4">
              <CartaImagen />
              <CartaImagenFondo />
            </div>
            <div className="row mt-4">
              <CartaBarras />
              <CartaGrafica />
            </div>
            <div className="row my-4">
              <CartaSeguimiento />
              <CartaLineaTiempo />
            </div>
            <FooterDashboard />
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard
