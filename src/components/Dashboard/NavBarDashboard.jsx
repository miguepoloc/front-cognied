import React, { useContext } from 'react'
import '../../assets/css/NavBarDashboard.scss'

import { useHistory, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoPeque from '../../assets/img/logo_peque.svg'
import { FaLock , FaRocket, FaUserCog, FaTachometerAlt, FaChartBar } from 'react-icons/fa'
import { linksEmocional } from '../../helpers/helper_emocional'
import { linksEstres } from '../../helpers/helperEstres'
import { FcApproval , FcCancel  , FcBiomass,FcDoughnutChart,FcHome , FcServices} from 'react-icons/fc'

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
              <Nav.Link href="/dashboard" className='d-flex'>
                <span className='pe-1 d-flex align-items-center'><FcHome size={20} /></span>
                Dashboard
              </Nav.Link>
              <Nav.Link href="#link" className='d-flex'>
              <span className='pe-1 d-flex align-items-center'><FcDoughnutChart  size={22}/></span>
                Gráficas
              </Nav.Link>
              <NavDropdown title="Autodiagnóstico " id="basic-nav-dropdown">
                <NavDropdown.Item href="/autodiagnostico" className='d-flex align-items-center'>
                <span className='pe-2 d-flex align-items-center'><FcApproval size={22}  /></span>
                  Prueba
                </NavDropdown.Item>
                <NavDropdown.Item href="#" className='d-flex align-items-center' >
                <span className='pe-1 d-flex align-items-center'><FcBiomass size={22} /></span>
                  Resultados
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Emocional " id="basic-nav-dropdown">
                {linksEmocional.map((capsula, capsulaIndex) => (

                  <NavDropdown.Item
                    href={`/${capsula.link}`}
                    eventKey={capsulaIndex}
                    key={`key-${capsulaIndex}`}
                    disabled={!(datauser.emocional >= capsula.id)}
                    className="d-flex align-items-center"
                  ><span className='pe-2 d-flex align-items-center'>
                    {!(datauser.emocional >= capsula.id)
                      ? <FcCancel size={22} />
                      : (datauser.emocional == capsula.id)? <FcBiomass size={22} /> : <FcApproval size={22} color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                   </span>
                    {capsula.nombre}
                  </NavDropdown.Item>

                ))}
              </NavDropdown>
              <NavDropdown title="Relax " id="basic-nav-dropdown">
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
                    : (datauser.emocional == capsula.id)? <FcBiomass size={22} /> : <FcApproval size={22} color={splitLocation[1] === capsula.link ? 'black' : ''} />}
                 </span>
                    {capsula.nombre}
                  </NavDropdown.Item>

                ))}
              </NavDropdown>
              <Nav.Link className='d-flex'>
              <span className='pe-2 d-flex align-items-center'> <FcServices size={22} /> </span>
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
