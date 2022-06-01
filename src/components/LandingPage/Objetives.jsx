import React from 'react'
import '../../assets/css/Objetives.scss'
import { FaShareAlt, FaPencilAlt, FaLightbulb, FaCodeBranch } from 'react-icons/fa'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
const Objetives = ({ section }) => {
    return (
        <section
            id={section.id}
            className="flex-center"
        // style={{ marginTop: '9%' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00659D" fill-opacity="1" d="M0,256L24,261.3C48,267,96,277,144,288C192,299,240,309,288,282.7C336,256,384,192,432,170.7C480,149,528,171,576,202.7C624,235,672,277,720,288C768,299,816,277,864,250.7C912,224,960,192,1008,186.7C1056,181,1104,203,1152,224C1200,245,1248,267,1296,256C1344,245,1392,203,1416,181.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
            <div className="content-103">
                <div className="container">

                <h2 className="font-Geomanist display-5 fw-bold text-center text-white py-4 ">Módulos </h2>

                <h5 className="font-Geomanist display-6 fw-bold text-center text-white py-2 ">Módulo autoevaluativo </h5>
                
                <div className="row mb-4 align-items-md-stretch">
                        <div className="col-lg-12 ">
                            <div className="row h-100 p-5 text-white item1 m-1 rounded-3 flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 ">
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
                                        className="imageProject"
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
                            <div className="row h-100 p-5 m-1 text-white item1 rounded-3 flex-center text-center">
                                <div className="col-lg-8 order-2 order-lg-1 ">
                                    <h2 className="font-Geomanist">
                                        Relax
                                    </h2>
                                    <p className="pt-2">
                                        Estrategias diseñadas para disminuir los
                                        niveles de estrés.
                                    </p>
                                </div>
                                <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2 justify-content-center align-self-center">
                                    <img
                                        className="imageProject"
                                        src={imgGanso.meditando}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row h-100 m-1 p-5 text-white item1 rounded-3 flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 ">
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
                                        className="imageProject"
                                        src={imgGanso.feliz_250x200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 align-items-md-stretch ">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <div className="row h-100 p-5 text-white item1 m-1 rounded-3 flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 ">
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
                                        className="imageProject"
                                        src={imgGanso.pensando}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row h-100 p-5 text-white item1 m-1 rounded-3 flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 ">
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
                                        className="imageProject"
                                        src={imgGanso.leyendo}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="font-Geomanist display-5 fw-bold text-center text-white py-2 ">Módulo autoevaluativo </h2>

                    <div className="row mb-4 align-items-md-stretch ">
                        <div className="col-lg-12 ">
                            <div className="row h-100 p-5 text-white item1 m-1 rounded-3 flex-center ">
                                <div className="col-lg-8 order-2 order-lg-1 ">
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
                                        className="imageProject"
                                        src={imgGanso.escribiendo_250x200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#FC8890"
                    fillOpacity="1"
                    d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </section>
    )
}
export default Objetives
