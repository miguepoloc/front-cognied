import React from 'react'

import '../assets/css/nucleo-icons.scss'
import '../assets/css/nucleo-svg.scss'
import '../assets/css/soft-ui-dashboard.scss'
import '../assets/css/ModuloEmocional.scss'
import BarraLateral from '../components/Dashboard/BarraLateral'
import NavBarDashboard from '../components/Dashboard/NavBarDashboard'
import FooterDashboard from '../components/Dashboard/FooterDashboard'
import ButtonLibro from '../components/Dashboard/ButtonLibro'

import { useLocation } from 'react-router-dom'
import RuletaEmociones from '../components/Act_2.2/RuletaEmociones'
import { Button } from 'react-bootstrap'

const ModuloEmocionalEjercicio = ({ ejercicio, nombrecapsula }) => {
  // assigning location variable
  const location = useLocation()

  // destructuring pathname from location
  const { pathname } = location

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')
  return (
        <>
            <div className="g-sidenav-show  bg-gray-100">
                <BarraLateral />

                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <NavBarDashboard section={nombrecapsula} />
                    <div className="container-fluid py-4">
                        <div >
                            {ejercicio}
                        </div>
                        <Button variant="primary" size="lg" disabled>
                            Primary button
                        </Button>
                        <FooterDashboard />
                        <ButtonLibro text={"Calderón Rodríguez, M., González Mora, G., Salazar Segnini, P. y Washburn Madrigal, S. (2012). Aprendiendo sobre las emociones: manual de educación emocional. Coordinación Educativa y Cultural Centroamericana."} title = {"Referencia"} />

                    </div>
                </main>
            </div>

        </>
  )
}

export default ModuloEmocionalEjercicio;
