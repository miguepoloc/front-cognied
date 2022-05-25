import React, { useEffect } from 'react'
import Home from '../components/LandingPage/Home'
import NavBar from '../components/LandingPage/NavBar'
import Objetives from '../components/LandingPage/Objetives'
import ButtonToUp from '../components/LandingPage/ButtonToUp'
import Footer from '../components/LandingPage/Footer'
import Part1 from '../components/Act_1.1/Part1'
import AboutUs from '../components/LandingPage/AboutUs'
import Scroll from '../helpers/helperScroll'
// import ContactUs from '../components/ContactUs'
// import Survey from '../components/Surveys/Survey'
import Surveys from '../components/Surveys/Surveys'
import Part2 from '../components/Act_1.1/Part2'
import { Vocabulario } from '../components/Act_2.2/Vocabulario'
import RuletaEmociones from '../components/Act_2.2/RuletaEmociones'
import Act4 from '../components/Act_4.1/Act4'
import MisEstrategias from '../components/Act_4.1/MisEstrategias'
import ManejoSemaforo from '../components/Act_4.1/ManejoSemaforo'

function LandingPage () {
  // El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
  // Adicional a eso permitirá hacer pocas modificaciones en el codigo
  const secciones = {
    Home: { id: 'Home', txt: 'Inicio' },
    AboutUs: { id: 'AboutUs', txt: 'Acerca de nosotros' }, // No planeo agregar el footer.
    Objetivos: { id: 'Objetivos', txt: 'Objetivos' },
    ContactUs: { id: 'ContactUs', txt: 'Contacto' }
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
      <Home section={secciones.Home} style="onlyLogo" />
      <AboutUs section={secciones.AboutUs} />
      <Objetives section={secciones.Objetivos} />
      {/* <ContactUs section={secciones.ContactUs} /> */}
      <Footer />
      <ButtonToUp Scroll={scroll} seccionToUp={secciones.Home.id} />

      {/* <Surveys /> */}
      {/* <Part1 /> */}
        {/* <Part2 />   */}
       {/* <Vocabulario/>  */}
       <RuletaEmociones/>
       <ManejoSemaforo />

      <MisEstrategias />

      {/* <Act4 /> */}
      


    </>
  )
}

export default LandingPage
