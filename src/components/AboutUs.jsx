import React from 'react'
import DigitalmenteProyectoImg from '../assets/img/digitalmente.jpg'
import '../assets/css/AboutUs.scss'
const AboutUs = ({ section }) => {
  return (
        <>
            <section id={section.id}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#FC8890"
                        fillOpacity="1"
                        d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg> */}
                <div className="aboutUs">
                    <div className="container py-5">
                        <div className="row mb-2 p-5 mb-4 bg-digital rounded-3 shadow-sm flex-center ">
                            <div className="col-md-9 order-2 order-md-1  ">
                                <div className="container-fluid py-5 ">
                                    <h1 className="display-5 fw-bold font-Geomanist">
                                        ¿Quiénes somos?
                                    </h1>
                                    <p className="col-md-11 fs-4 pt-2">
                                        DigitalMENTE es un proyecto que nació para ayudar a los demás y somos gente chévere.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 order-1 order-md-2 ">
                                <img
                                    className="imageProject"
                                    src={DigitalmenteProyectoImg}
                                />
                            </div>
                        </div>
                        <div className="row mb-4 align-items-md-stretch">
                            <div className="col-md-6">
                                <div className="row h-100 p-5 text-white bg-dark rounded-3 flex-center ">
                                    <div className="col-lg-8 order-2 order-lg-1 ">
                                        <h2 className="font-Geomanist">
                                            Módulo Psicoeducativo
                                        </h2>
                                        <p className="pt-2">
                                            Aquí va información del módulo
                                        </p>
                                        <button
                                            className="btn btn-outline-light"
                                            type="button"
                                        >
                                            Click aquí para saber más
                                        </button>
                                    </div>
                                    <div className="col-lg-4 pb-4 pb-lg-0 order-1 order-lg-2">
                                        <img
                                            className="imageProject"
                                            src={DigitalmenteProyectoImg}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="h-100 p-5 bg-otro border rounded-3">
                                    <h2 className="font-Geomanist">
                                        Otro módulo
                                    </h2>
                                    <p className="pt-2">
                                        Información del otro módulo
                                    </p>
                                    <button
                                        className="btn btn-outline-light"
                                        type="button"
                                    >
                                        Click aquí para saber más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#FC8890"
                        fillOpacity="1"
                        d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg> */}
            </section>
        </>
  )
}

export default AboutUs
