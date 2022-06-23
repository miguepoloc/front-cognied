import React, { useEffect, useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import NavBarElement from './NavBarElement'
import './assets/css/NavBar.scss'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import LogoAlargado from '../../assets/img/LogoAlargado.svg'

const NavBar = ({ Secciones, PrimeraSeccion, scroll }) => {
  useEffect(() => {
    scroll.eventScroll()
  })
  const auth = useContext(AuthContext)
  const history = useHistory()
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xxl"
        fixed="top"
        bg="transparent"
        id="navBar"

      >
        <Container fluid>
          <Navbar.Brand
            style={{ paddingTop: 0, paddingBottom: 0 }}

          >
            <Nav.Link
              className="nameNav font-Geomanist"
              onClick={() => scroll.scroll(PrimeraSeccion.id)}
              style={{ padding: 2 }}

            >
              <img
                src={LogoAlargado}
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="text-center">
              {
                /*
                Recorro el json. la idea es obtener las keys para poder acceder el value del json y pasarlo al elemento de navegacion.
                */
                Object.keys(Secciones).map((Seccion) => {
                  return (
                    <NavBarElement
                      key={Seccion}
                      Seccion={Secciones[Seccion]}
                      Scroll={(id) => {
                        console.log(scroll)
                        scroll.scroll(id)
                      }}

                    />
                  )
                })
              }
              {auth && <div>{auth?.authState?.userInfo?.nombre}</div>}
              {auth.isAuthenticated()
                ? <Button className=" btn-naranja ms-2 me-2" onClick={() => history.push('/dashboard')}>
                  Dashboard
                </Button>
                : <Button className=" btn-naranja ms-2 me-2" onClick={() => history.push('/login')}>
                  Iniciar sesion
                </Button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
