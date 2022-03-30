import React, { useEffect, useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import NavBarElement from './NavBarElement'
import '../../assets/css/NavBar.scss'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
// import Scroll from "../assets/js/scrollTemp"

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
                expand="lg"
                fixed="top"
                bg="transparent"
                id="navBar"
            >
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link
                            className="nameNav font-Geomanist"
                            onClick={() => scroll.scroll(PrimeraSeccion.id)}
                        >
                            Digitalmente
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse
                        className="justify-content-end"
                        id="responsive-navbar-nav"
                    >
                        <Nav>
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
                                              scroll.scroll(id)
                                            }}
                                        />
                                  )
                                })
                            }
                            {auth && <div>{auth?.authState?.userInfo?.document}</div>}
                            { auth.isAuthenticated()
                              ? <Button className=" btn-naranja ms-2 me-2" onClick={() => auth.logout() }>
                                Cerrar sesion
                            </Button>
                              : <Button className=" btn-naranja ms-2 me-2" onClick={() => history.push('/login') }>
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
