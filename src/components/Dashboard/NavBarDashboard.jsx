import React, { useContext } from 'react'
import '../../assets/css/NavBarDashboard.scss'

import { useHistory, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Button, Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import LogoPeque from '../../assets/img/logo_peque.svg'
import LogoAlargado from '../../assets/img/LogoAlargado.svg'
import { FaLock, FaRocket, FaUserCog, FaTachometerAlt, FaChartBar } from 'react-icons/fa'
import { linksEmocional } from '../../helpers/helper_emocional'
import { linksEstres } from '../../helpers/helperEstres'
import { FcApproval, FcCancel, FcBiomass, FcDoughnutChart, FcHome, FcServices } from 'react-icons/fc'

const NavBarDashboard = ({ datauser }) => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  // assigning location variable
  const location = useLocation()

  // destructuring pathname from location
  const { pathname } = location

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/')

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="light"
        className='color-nav'
        style={{ paddingTop: 0, paddingBottom: 0 }}

      >
        <Container fluid>
          <Navbar.Brand
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <Nav.Link
              className="nameNav font-Geomanist"
              onClick={() => history.push('/')}
              style={{ padding: 2 }}

            >
              <img
                src={LogoAlargado}
                // width="130"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              {/* &nbsp;
              DigitalMente */}
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav
              navbarScroll
              className="text-center"
            >
              <Nav.Link href="/dashboard" className='d-flex align-items-center  justify-content-center'>
                <span className='pe-1 d-flex align-items-center'><FcHome size={20} /></span>
                Dashboard
              </Nav.Link>
              <Nav.Link href="#link" className='d-flex align-items-center  justify-content-center'>
                <span className='pe-1 d-flex align-items-center'><FcDoughnutChart size={22} /></span>
                Gráficas
              </Nav.Link>
              <NavDropdown title="Autoevaluativo " id="basic-nav-dropdown" className='d-flex flex-column align-items-center justify-content-center'>
                <NavDropdown.Item href="/autoevaluativo" className='d-flex'>
                  <span className='pe-2 d-flex align-items-center'><FcApproval size={22} /></span>
                  Prueba
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className='d-flex align-items-center' >
                  <span className='pe-1 d-flex align-items-center'><FcBiomass size={22} /></span>
                  Resultados
                </NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Emocional " id="basic-nav-dropdown" className='d-flex flex-column align-items-center justify-content-center'>

                {linksEmocional.map((capsula, capsulaIndex) => (

                  <NavDropdown.Item
                    href={`/${capsula.link}`}
                    eventKey={capsulaIndex}
                    key={`key-${capsulaIndex}`}
                    disabled={!(datauser.emocional >= capsula.id)}
                    className="  d-flex align-items-center"
                  ><span className='pe-2 d-flex align-items-center'>
                      {!(datauser.emocional >= capsula.id)
                        ? <FcCancel size={22} />
                        : (datauser.emocional === capsula.id) ? <FcBiomass size={22} /> : <FcApproval size={22} color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                    </span>
                    {capsula.nombre}
                  </NavDropdown.Item>

                ))}
              </NavDropdown>
              <NavDropdown title="Relax " id="basic-nav-dropdown" className='d-flex flex-column align-items-center justify-content-center'>
                <span className='mt-0'></span>
                {linksEstres.map((capsula, capsulaIndex) => (

                  <NavDropdown.Item
                    href={`/${capsula.link}`}
                    eventKey={capsulaIndex}
                    key={`key-${capsulaIndex}`}
                    disabled={!(datauser.estres >= capsula.id)}
                    className="d-flex"
                  ><span className='pe-2 d-flex align-items-center'>
                      {!(datauser.emocional >= capsula.id)
                        ? <FcCancel size={22} />
                        : (datauser.emocional === capsula.id) ? <FcBiomass size={22} /> : <FcApproval size={22} color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                    </span>
                    {capsula.nombre}
                  </NavDropdown.Item>

                ))}
              </NavDropdown>
              <NavDropdown title={auth && <b>{auth?.authState?.userInfo?.nombre}</b>} id="basic-nav-dropdown" className='d-flex flex-column align-items-center justify-content-center'>

                <NavDropdown.Item href="/autoevaluativo" className='d-flex'>
                  <span className='pe-2 d-flex align-items-center'><FcServices size={22} /></span>
                  Editar perfil
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className='d-flex align-items-center' onClick={() => auth.logout()}>
                  <span className='pe-1 d-flex align-items-center'><FcBiomass size={22} /></span>
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link className='d-flex justify-content-center'>
                <span className='pe-2 d-flex flex-column align-items-center'> <FcServices size={22} /> </span>
                {auth && <div>{auth?.authState?.userInfo?.nombre}</div>}
              </Nav.Link>
              <Button className=" btn-naranja ms-2 btn-sm mb-0 me-3 " onClick={() => auth.logout()}>
                Cerrar sesión
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarDashboard
