import React from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/ModuloEmocional.scss'
import BarraLateral from '../components/Dashboard/BarraLateral'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

const ModuloEmocionalCapsula = ({ capsula, nombrecapsula }) => {
  return (
        <>
            <div className="g-sidenav-show  bg-gray-100">
                <BarraLateral />

                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <NavBarDashboard section={nombrecapsula} />
                    <div className="container-fluid py-4">
                        <div >
                            <img src={capsula} alt="capsula" className='img-capsula' />
                        </div>
                        <FooterDashboard />
                        <ButtonLibro />

                    </div>
                </main>
            </div>

        </>
  )
}

export default ModuloEmocionalCapsula
