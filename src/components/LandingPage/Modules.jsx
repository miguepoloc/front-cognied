import React from 'react'
import './assets/css/Modules.scss'
import './assets/css/Team.scss'
import { imgGanso } from '../../helpers/helper_imagen_ganso'

const Modules = ({ section }) => {
    return (
        <section
            className="flex-center"
         style={{ marginTop: '-3%' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className='fillColor_Modules' d="M0,128L40,128C80,128,160,128,240,138.7C320,149,400,171,480,170.7C560,171,640,149,720,149.3C800,149,880,171,960,176C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>             </svg>
            <div className="content-103 backgroundColor_Modules">
                <div className="container" id={section.id}>

                <h2 className="font-Geomanist display-5 fw-bold text-center text-white py-4 ">Módulos </h2>

                <h5 className="font-Geomanist display-6 fw-bold text-center text-white py-2 ">Módulo autoevaluativo </h5>
                
                <div className="row mb-4 align-items-md-stretch">
                        <div className="col-lg-12 ">
                            <div className="row h-100 modules_cards card_moduloAutoevaluativo  flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center ">
                                    <h2 className="font-Geomanist">
                                        Módulo autoevaluativo

                                    </h2>
                                    <p className="pt-2">
                                        Este módulo te ayudará a
                                        identificar el estado de
                                        algunos aspectos de tu salud
                                        mental a través de
                                        herramientas validadas.
                                        Recuerda siempre consultar a
                                        un profesional en caso de
                                        puntuaciones altas.

                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItemLarge"
                                        src={imgGanso.escribiendo_250x200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-Geomanist display-6 fw-bold text-center text-white pt-2 pb-2 ">Módulos de promoción </h2>
                    <h4 className='text-white text-center mb-4'>Diferentes módulos que te ayudaran a fortalecer y desarrollar habilidades
                        que contribuyan al mejoramiento de tu calidad de vida.
                    </h4>
                    <div className="row mb-4 align-items-md-stretch ">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <div className="row h-100  card_relax modules_cards flex-center">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center">
                                    <h2 className="font-Geomanist">
                                        Relax
                                    </h2>
                                    <p className="pt-2">
                                        Estrategias diseñadas para disminuir los
                                        niveles de estrés.
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.meditando}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row h-100  modules_cards card_misEmociones flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center">
                                    <h2 className="font-Geomanist">
                                        Mis emociones

                                    </h2>
                                    <p className="pt-2">
                                        Desarrollo de habilidades para la
                                        identificación y manejo de las emociones
                                        de forma efectiva.
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.feliz_250x200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 align-items-md-stretch ">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <div className="row h-100 card_piensalo modules_cards flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center ">
                                    <h2 className="font-Geomanist">
                                        Piénsalo

                                    </h2>
                                    <p className="pt-2">
                                        Fortalecimiento de habilidades para la
                                        identificación de pensamientos y
                                        conceptos que afectan nuestro bienestar
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.pensando}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row h-100  modules_cards card_misHabilidades flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 justify-content-center align-self-center">
                                    <h2 className="font-Geomanist">
                                        Mis habilidades

                                    </h2>
                                    <p className="pt-2">
                                        La temática de este modulo fue propuesta por los
                                        estudiantes. En este encontrarás actividades que podrán
                                        ayudarte a mejorar tus habilidades para la vida.

                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center text-center">
                                    <img
                                        className="imgItem"
                                        src={imgGanso.leyendo}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='backgroundColor_Team' viewBox="0 0 1440 320">
            <path className='fillColor_Modules' d="M0,128L40,128C80,128,160,128,240,138.7C320,149,400,171,480,170.7C560,171,640,149,720,149.3C800,149,880,171,960,176C1040,181,1120,171,1200,160C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </section>
    )
}
export default Modules
