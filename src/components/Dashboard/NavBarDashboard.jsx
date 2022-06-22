import React, { useContext } from 'react'
import '../../assets/css/NavBarDashboard.scss'

import { useHistory, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoPeque from '../../assets/img/logo_peque.svg'
import LogoAlargado from '../../assets/img/LogoAlargado.svg'
import { FaLock, FaRocket, FaUserCog, FaTachometerAlt, FaChartBar } from 'react-icons/fa'
import { linksEmocional } from '../../helpers/helper_emocional'
import { linksEstres } from '../../helpers/helperEstres'

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
                height="50"
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
              <Nav.Link href="/dashboard">
                <FaTachometerAlt />
                Dashboard
              </Nav.Link>
              <Nav.Link href="#link">
                <FaChartBar />
                Gráficas
              </Nav.Link>
              <NavDropdown title="Autodiagnóstico" id="basic-nav-dropdown">
                <NavDropdown.Item href="/autodiagnostico">
                  <FaRocket />
                  &nbsp;
                  Prueba
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <FaRocket />
                  &nbsp;
                  Resultados
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Emocional" id="basic-nav-dropdown">
                {linksEmocional.map((capsula, capsulaIndex) => (

                  <NavDropdown.Item
                    href={`/${capsula.link}`}
                    eventKey={capsulaIndex}
                    key={`key-${capsulaIndex}`}
                    disabled={!(datauser.emocional >= capsula.id)}
                  >
                    {!(datauser.emocional >= capsula.id)
                      ? <FaLock />
                      : <FaRocket color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                    &nbsp;
                    {capsula.nombre}
                  </NavDropdown.Item>

                ))}
              </NavDropdown>
              <NavDropdown title="Relax" id="basic-nav-dropdown">
                {linksEstres.map((capsula, capsulaIndex) => (

                  <NavDropdown.Item
                    href={`/${capsula.link}`}
                    eventKey={capsulaIndex}
                    key={`key-${capsulaIndex}`}
                    disabled={!(datauser.estres >= capsula.id)}
                  >
                    {!(datauser.estres >= capsula.id)
                      ? <FaLock />
                      : <FaRocket color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                    &nbsp;
                    {capsula.nombre}
                  </NavDropdown.Item>

                ))}
              </NavDropdown>
              <Nav.Link>
                {auth && <div>{auth?.authState?.userInfo?.nombre}</div>}
              </Nav.Link>
              <Button className=" btn-naranja ms-2 btn-sm mb-0 me-3" onClick={() => auth.logout()}>
                Cerrar sesión
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarDashboard
