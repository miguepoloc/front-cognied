import React, { useEffect } from 'react'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Objetives from '../components/Objetives'
import ButtonToUp from '../components/ButtonToUp'
import Footer from '../components/Footer'

import AboutUs from '../components/AboutUs'
import Scroll from '../helpers/helperScroll'
import ContactUs from '../components/ContactUs'
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
                scroll={scroll}/>
            <Home section={secciones.Home} style="onlyLogo" />
            <AboutUs section={secciones.AboutUs} />
            <Objetives section={secciones.Objetivos} />
            <ContactUs section={secciones.ContactUs} />
            <Footer />
            <ButtonToUp Scroll={scroll} seccionToUp = {secciones.Home.id}/>
        </>
  )
}

export default LandingPage
