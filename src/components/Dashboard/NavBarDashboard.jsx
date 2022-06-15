import React, { useContext } from 'react'
import '../../assets/css/NavBarDashboard.scss'

import { useHistory, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoPeque from '../../assets/img/logo_peque.svg'
import { FaLock, FaRocket } from 'react-icons/fa'
import { linksEmocional } from '../../helpers/helper_emocional'

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
        fixed="top"
        // sticky="top"
        variant="light"
        className='color-nav'

      >
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link
              className="nameNav font-Geomanist"
              onClick={() => history.push('/')}
            >
              <img
                src={LogoPeque}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              &nbsp;
              DigitalMente
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
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#link">Gráficas</Nav.Link>
              <NavDropdown title="Autodiagnóstico" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Emocional" id="basic-nav-dropdown">
                {linksEmocional.map((capsula, capsulaIndex) => (

                  <>
                    <NavDropdown.Item
                      href={`/${capsula.link}`}
                      eventKey={`key-${capsulaIndex}`}
                      disabled={!(datauser.emocional >= capsula.id)}
                    >
                      {!(datauser.emocional >= capsula.id)
                        ? <FaLock />
                        : <FaRocket color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                      &nbsp;
                      {capsula.nombre}
                    </NavDropdown.Item>
                  </>
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
