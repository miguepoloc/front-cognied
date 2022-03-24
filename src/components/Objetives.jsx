import React from 'react'
import '../assets/css/Objetives.scss'
import { FaShareAlt, FaPencilAlt, FaLightbulb, FaCodeBranch } from 'react-icons/fa'

const Objetives = ({ section }) => {
  return (
        <section
            id={section.id}
            className="flex-center"
            style={{ marginTop: '9%' }}
        >
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
        </section>
  )
}
export default Objetives
