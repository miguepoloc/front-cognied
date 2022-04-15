import React from 'react'
import Logo from '../assets/img/logo_circulo.svg'
import { useHistory, NavLink, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const BarraLateral = () => {
  const history = useHistory()

  // assigning location variable
  const location = useLocation()

  // destructuring pathname from location
  const { pathname } = location

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

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

                        <li className="nav-item">
                            <Button variant="link" className={splitLocation[1] === 'dashboard' ? 'active nav-link' : 'nav-link'} onClick={() => history.push('/dashboard')}>
                                <div
                                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" /></svg>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className={splitLocation[1] === 'x' ? 'active nav-link' : 'nav-link'} onClick={() => history.push('/moduloemocional')}>
                                <div
                                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"/></svg>

                                </div>
                                <span className="nav-link-text ms-1">Gráficas</span>
                            </Button>
                        </li>

                        {/* División */}
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Módulos</h6>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className={splitLocation[1] === 'moduloemocional' ? 'active nav-link' : 'nav-link'} onClick={() => history.push('/moduloemocional')}>
                                <div
                                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path className="color-background" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 152c-23.8 0-52.7 29.3-56 71.4-.7 8.6 10.8 11.9 14.9 4.5l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.1-42.1-32-71.4-55.8-71.4zm-201 75.9l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.6 8.5 10.9 11.9 15.1 4.5zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z" />
                                    </svg>

                                </div>
                                <span className="nav-link-text ms-1">Emocional</span>
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className={splitLocation[1] === 'x' ? 'active nav-link' : 'nav-link'} onClick={() => history.push('/moduloemocional')}>
                                <div
                                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"/></svg>

                                </div>
                                <span className="nav-link-text ms-1">Psicoeducativo</span>
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button variant="link" className={splitLocation[1] === 'x' ? 'active nav-link' : 'nav-link'} onClick={() => history.push('/moduloemocional')}>
                                <div
                                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path className="color-background" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 152c-23.8 0-52.7 29.3-56 71.4-.7 8.6 10.8 11.9 14.9 4.5l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.1-42.1-32-71.4-55.8-71.4zm-201 75.9l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.6 8.5 10.9 11.9 15.1 4.5zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z" />
                                    </svg>

                                </div>
                                <span className="nav-link-text ms-1">Alternativo</span>
                            </Button>
                        </li>

                        <li className="nav-item">
                            <Button variant="link" className={splitLocation[1] === 'x' ? 'active nav-link' : 'nav-link'} onClick={() => history.push('/moduloemocional')}>
                                <div
                                    className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path className="color-background" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 152c-23.8 0-52.7 29.3-56 71.4-.7 8.6 10.8 11.9 14.9 4.5l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.1-42.1-32-71.4-55.8-71.4zm-201 75.9l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.6 8.5 10.9 11.9 15.1 4.5zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z" />
                                    </svg>

                                </div>
                                <span className="nav-link-text ms-1">Otro</span>
                            </Button>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
  )
}

export default BarraLateral
