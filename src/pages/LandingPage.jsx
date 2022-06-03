import React, { useEffect } from 'react'
import Home from '../components/LandingPage/Home'
import NavBar from '../components/LandingPage/NavBar'
import Modules from '../components/LandingPage/Modules'
import ButtonToUp from '../components/LandingPage/ButtonFixed'
import Footer from '../components/LandingPage/Footer'
import AboutUs from '../components/LandingPage/AboutUs'
import Scroll from '../helpers/helperScroll'
import Surveys from '../components/Surveys/Surveys'
import { Team } from '../components/LandingPage/Team'
import { AboutGanso } from '../components/LandingPage/AboutGanso'

function LandingPage () {
  // El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
  // Adicional a eso permitirá hacer pocas modificaciones en el codigo
  const secciones = {
    Home: { id: 'Home', txt: 'Inicio' },
    AboutUs: { id: 'AboutUs', txt: 'Acerca el proyecto' }, // No planeo agregar el footer.
    Modules: { id: 'Modules', txt: 'Módulos' },
    Team: { id: 'Team', txt: 'Acerca de nosotros' },
    AboutUsGanso: {id: 'AboutUsGanso', txt: 'Conoce a Cuak'}
  }

  // Inicializacion del scroll.
  const scroll = new Scroll(secciones, secciones.Home.id, ['nameNavActive'])
  // Cuando cargue el componente, ejecuta este hook, así se pondrá activo el element del nav segun corresponda
  useEffect(() => {
    scroll.eventScroll()
  })
  return (
    <>
      <NavBar
        Secciones={secciones}
        PrimeraSeccion={secciones.Home}
        scroll={scroll} />
      <Home section={secciones.Home} />
      <AboutUs section={secciones.AboutUs} />
      <Modules section={secciones.Modules} />
      <Team section={secciones.Team} />
      <AboutGanso section={secciones.AboutUsGanso} />
      <Footer />
      <ButtonToUp Scroll={scroll} seccionToUp={secciones.Home.id} />
    </>
  )
}

export default LandingPage
