import React from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/Dashboard.scss'
import MiniCarta from '../components/MiniCarta'
import CartaImagen from '../components/CartaImagen'
import CartaImagenFondo from '../components/CartaImagenFondo'
import BarraLateral from '../components/BarraLateral'
import NavBarDashboard from '../components/NavBarDashboard'
import FooterDashboard from '../components/FooterDashboard'
import CartaSeguimiento from '../components/CartaSeguimiento'
import CartaLineaTiempo from '../components/CartaLineaTiempo'
import CartaBarras from '../components/CartaBarras'
import CartaGrafica from '../components/CartaGrafica'

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
