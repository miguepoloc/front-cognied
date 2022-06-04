import React from 'react'
import logos from '../../assets/img/imgLogos_Quienes_somos[9294].png'
import '../../assets/css/Team.scss'
export const Team = ({ section }) => {
    return (
        <>
            <section id={section.id} >
                <div className="Team backgroundColor_Team">
                    <div className="container pt-md-5">
                        <div className="row">
                            <div className=" col-lg-5  col-12 justify-content-center align-self-center text-center mx-auto">
                                <img src={logos} className="img_aboutUsGanso" />
                            </div>
                            <div className=" col-lg-7 col-12 mt-md-0 mt-3 col-12 justify-content-center align-self-center" style={{paddingBottom: "9%"}}>
                                <h3 className="font-Geomanist display-5 fw-bold text-center titulo_Team mb-4 ">¿Quíenes somos nosotros?</h3>

                                <h3 className='text-center text_Team'>
                                    Somos jóvenes investigadores, profesionales y de
                                    pregrado financiados por Minciencias, a través, de la
                                    iniciativa Talento Joven en Salud. Esta investigación se
                                    desarrolla en el marco del proyecto “Identificación de la
                                    coparticipación del cronotipo, las inteligencias múltiples,
                                    la emoción, la ideación suicida, los síntomas depresivos
                                    y desempeño académico de estudiantes de la
                                    Universidad del Magdalena” bajo la tutoría del doctor
                                    Ubaldo Rodríguez De Ávila y la doctora Carmelina Paba
                                    Barbosa, docentes miembros del grupo Cognición y
                                    Educación de la Universidad del Magdalena.

                                </h3>
                            </div>

                        </div>

                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='fillColor_Team' d="M0,256L48,256C96,256,192,256,288,229.3C384,203,480,149,576,112C672,75,768,53,864,64C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </section>
        </>
    )
}
