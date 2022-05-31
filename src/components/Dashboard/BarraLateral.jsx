import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/img/logo_circulo.svg'
import { useHistory, useLocation, useParams, NavLink } from 'react-router-dom'
import { Accordion, AccordionContext, Button, useAccordionButton } from 'react-bootstrap'
import ItemCapsula from './ItemCapsula'
import { AuthContext } from '../../context/AuthContext'
import { FaLock, FaRocket, FaArrowRight, FaArrowDown, FaTachometerAlt } from 'react-icons/fa'
import { VscGraph, VscGraphScatter } from 'react-icons/vsc'
import { BsClipboardData } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import BotonFlecha from './BotonFlecha'

const BarraLateral = ({ datauser }) => {
  console.log(datauser)

  const history = useHistory()

  // assigning location variable
  const location = useLocation()
  console.log(location.pathname)
  const { slug } = useParams()
  console.log(slug)

  // destructuring pathname from location
  const { pathname } = location

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

  /* Devuelve un array o un valor null */

  // Fin

  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
        id="sidenav-main" data-color="info">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0 aclick" onClick={() => history.push('')}
            target="_blank">
            <img src={Logo} className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold">DigitalMente</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <ItemCapsula
              clase={splitLocation[1] === 'dashboard' ? 'active nav-link' : 'nav-link'}
              link={'/dashboard'}
              titulo={'Dashboard'}
              imgsvg={<FaTachometerAlt />}
            />
            <ItemCapsula
              clase={splitLocation[1] === 'graficas' ? 'active nav-link' : 'nav-link'}
              link={'/graficas'}
              titulo={'graficas'}
              imgsvg={<GoGraph />}
            />

            {/* División */}
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Módulos</h6>
            </li>

            <li className="nav-item">
              <Accordion defaultActiveKey={(splitLocation[1].slice(0, 12) === 'emocionalcap' || splitLocation[1].slice(0, 13) === 'emocionalejer') ? '1' : ''}>
                <BotonFlecha eventKey="0" >Diagnóstico</BotonFlecha>
                <Accordion.Collapse eventKey="0">
                  <ul>
                    <ItemCapsula
                      clase={splitLocation[1] === 'diagnostico' ? 'active nav-link' : 'nav-link'}
                      link={'/diagnostico'}
                      titulo={'Encuesta'}
                      habilitado={!(datauser.diagnostico >= 1)}
                      imgsvg={!(datauser.diagnostico >= 1)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'diagnostico' ? 'active nav-link' : 'nav-link'}
                      link={'/diagnostico'}
                      titulo={'Resultados'}
                      habilitado={!(datauser.diagnostico >= 2)}
                      imgsvg={!(datauser.diagnostico >= 2)
                        ? <FaLock />
                        : <BsClipboardData />}
                    />
                  </ul>
                </Accordion.Collapse>
                <BotonFlecha eventKey="1">Emocional</BotonFlecha>
                <Accordion.Collapse eventKey="1">
                  <ul>
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional1' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional1'}
                      titulo={'Cápsula 1'}
                      habilitado={!(datauser.emocional >= 1)}
                      imgsvg={!(datauser.emocional >= 1)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional2' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional2'}
                      titulo={'Cápsula 2'}
                      habilitado={!(datauser.emocional >= 2)}
                      imgsvg={!(datauser.emocional >= 2)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional3' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional3'}
                      titulo={'Actividad 1'}
                      habilitado={!(datauser.emocional >= 3)}
                      imgsvg={!(datauser.emocional >= 3)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional4' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional4'}
                      titulo={'Cápsula 3'}
                      habilitado={!(datauser.emocional >= 4)}
                      imgsvg={!(datauser.emocional >= 4)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional5' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional5'}
                      titulo={'Actividad 2'}
                      habilitado={!(datauser.emocional >= 5)}
                      imgsvg={!(datauser.emocional >= 5)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional6' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional6'}
                      titulo={'Cápsula 4'}
                      habilitado={!(datauser.emocional >= 6)}
                      imgsvg={!(datauser.emocional >= 6)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional7' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional7'}
                      titulo={'Actividad 3'}
                      habilitado={!(datauser.emocional >= 7)}
                      imgsvg={!(datauser.emocional >= 7)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional8' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional8'}
                      titulo={'Cápsula 5'}
                      habilitado={!(datauser.emocional >= 8)}
                      imgsvg={!(datauser.emocional >= 8)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional9' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional9'}
                      titulo={'Cápsula 6'}
                      habilitado={!(datauser.emocional >= 9)}
                      imgsvg={!(datauser.emocional >= 9)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional10' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional10'}
                      titulo={'Actividad 4'}
                      habilitado={!(datauser.emocional >= 10)}
                      imgsvg={!(datauser.emocional >= 10)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional11' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional11'}
                      titulo={'Cápsula 7'}
                      habilitado={!(datauser.emocional >= 11)}
                      imgsvg={!(datauser.emocional >= 11)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                    <ItemCapsula
                      clase={splitLocation[1] === 'emocional12' ? 'active nav-link' : 'nav-link'}
                      link={'/emocional12'}
                      titulo={'Cápsula 8'}
                      habilitado={!(datauser.emocional >= 12)}
                      imgsvg={!(datauser.emocional >= 12)
                        ? <FaLock />
                        : <FaRocket />}
                    />

                  </ul>
                </Accordion.Collapse>
                <BotonFlecha eventKey="2" >Estrés</BotonFlecha>
                <Accordion.Collapse eventKey="2">
                  <ul>
                    <ItemCapsula
                      clase={splitLocation[1] === 'estrescap1' ? 'active nav-link' : 'nav-link'}
                      link={'estrescap1'}
                      titulo={'Cápsula 1'}
                      habilitado={!(datauser.estres >= 1)}
                      imgsvg={!(datauser.estres >= 1)
                        ? <FaLock />
                        : <FaRocket />}
                    />

                    <ItemCapsula
                      clase={splitLocation[1] === 'estrescap2' ? 'active nav-link' : 'nav-link'}
                      link={'/estrescap2'}
                      titulo={'Cápsula 2'}
                      habilitado={!(datauser.estres >= 2)}
                      imgsvg={!(datauser.estres >= 2)
                        ? <FaLock />
                        : <FaRocket />}
                    />
                  </ul>
                </Accordion.Collapse>
              </Accordion>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default BarraLateral
