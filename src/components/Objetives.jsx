import React from 'react'
import '../assets/css/Objetives.scss'
import { FaShareAlt, FaPencilAlt, FaLightbulb, FaCodeBranch } from 'react-icons/fa'

const Objetives = ({ section }) => {
  return (
        <section
            id={section.id}
            className="flex-center"
            // style={{ marginTop: '9%' }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#FC8890"
                        fillOpacity="1"
                        d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,181.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            <div className="content-103">
                <div className="container">
                    <div className="row">
                        <h2 className="font-Geomanist display-5 fw-bold text-center mb-4 mb-5">
                            Nuestros objetivos
                        </h2>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <FaShareAlt></FaShareAlt>
                                    </div>
                                    <h3 className="service-title">
                                        Advertising
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-sm-6 col-xs-12">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <FaPencilAlt></FaPencilAlt>
                                    </div>
                                    <h3 className="service-title">
                                        Branding Design
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-sm-6 col-xs-12">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <FaLightbulb></FaLightbulb>
                                    </div>
                                    <h3 className="service-title">
                                        Creative Marketing
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-sm-6 col-xs-12">
                            <div className="service-post">
                                <div className="service-content">
                                    <div className="service-icon">
                                        <FaCodeBranch></FaCodeBranch>
                                    </div>
                                    <h3 className="service-title">
                                        Creative Marketing
                                    </h3>
                                    <p className="service-description">
                                        Seitan brunch meh, food truck Wes
                                        Anderson quinoa XOXO readymade gastropub
                                        gluten-free heirloom wolf skateboard.
                                    </p>
                                </div>
                                <div className="service-hover"></div>
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
