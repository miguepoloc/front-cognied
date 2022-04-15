import React from 'react'

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

const Dashboard = () => {
  return (
    <>
      <div className="g-sidenav-show  bg-gray-100">
        <BarraLateral />
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
