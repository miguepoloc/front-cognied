import React from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/ModuloEmocional.scss'
import BarraLateral from '../components/BarraLateral'
import NavBarDashboard from '../components/NavBarDashboard'
import FooterDashboard from '../components/FooterDashboard'
import Capsula1 from '../assets/img/modulo_emocional/Capsula_1.png'
import ButtonLibro from '../components/ButtonLibro'

const ModuloEmocional = () => {
  return (
        <>
            <div className="g-sidenav-show  bg-gray-100">
                <BarraLateral />

                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <NavBarDashboard section="Módulo Emocional" />
                    <div className="container-fluid py-4">
                        <div >
                            <img src={Capsula1} alt="capsula1" className='img-capsula' />
                        </div>
                        <FooterDashboard />
                        <ButtonLibro />

                    </div>
                </main>
            </div>

        </>
  )
}

export default ModuloEmocional
