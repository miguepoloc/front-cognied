import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
import '../../assets/css/AboutUs.scss'
const AboutUs = ({ section }) => {
  return (
        <>
            <section id={section.id}>
                <div className="aboutUs">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col"><h3 className="font-Geomanist display-5 fw-bold text-center ">¿Qué es Digitalmente?</h3></div>
                            <div className="col">
                                <p>Somos una estrategia digital de promoción de la salud mental dirigida
                                    a estudiantes, donde estos son el eje central y contribuyeron en la
                                    construcción y elección de cada elemento. Nuestro enfoque se basa
                                    en la psicoeducación y el desarrollo de actividades para fortalecer tus
                                    habilidades para tu bienestar. Contamos con varios módulos, los
                                    cuales te permitirán evaluar y desarrollar estrategias que contribuyan a
                                    mejorar tu calidad de vida.
                                </p>
                            </div>
                        </div>
                        
                        <img src={imgGanso.pensando} style= {{width:"500px"}} />
                    </div>
                </div>
            </section>
        </>
  )
}

export default AboutUs
