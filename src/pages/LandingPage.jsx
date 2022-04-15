import React, { useEffect } from 'react'
import Home from '../components/LandingPage/Home'
import NavBar from '../components/LandingPage/NavBar'
import Objetives from '../components/LandingPage/Objetives'
import ButtonToUp from '../components/LandingPage/ButtonToUp'
import Footer from '../components/LandingPage/Footer'

import AboutUs from '../components/LandingPage/AboutUs'
import Scroll from '../helpers/helperScroll'
import Survey from '../components/Surveys/Survey'
import Surveys from '../components/Surveys/Surveys'
function LandingPage () {

  const prueba = {
    questions: [
      {
        question: 'Me siento más nervioso y ansioso que de costumbre.',
        id: 1,
        answers: [
          { answer: 'Siempre', value: 4 },
          { answer: 'Casi siempre', value: 3 },
          { answer: 'Algunas veces', value: 2 },
          { answer: 'Nunca', value: 1 }
        ]
      },
      {
        question: 'Me da miedo sin razón alguna.',
        id: 2,
        answers: [
          { answer: 'Siempre', value: 4 },
          { answer: 'Casi siempre', value: 3 },
          { answer: 'Algunas veces', value: 2 },
          { answer: 'Nunca', value: 1 }
        ]
      },
      {
        question: 'Me enojo fácilmente o siento pánico.',
        id: 3,
        answers: [
          { answer: 'Siempre', value: 4 },
          { answer: 'Casi siempre', value: 3 },
          { answer: 'Algunas veces', value: 2 },
          { answer: 'Nunca', value: 1 }
        ]
      },
      {
        question: 'Siento que me estoy desmoronando.',
        id: 4,
        answers: [
          { answer: 'Siempre', value: 4 },
          { answer: 'Casi siempre', value: 3 },
          { answer: 'Algunas veces', value: 2 },
          { answer: 'Nunca', value: 1 }
        ]
      },
      {
        question: 'Mis brazos y piernas tiemblan.',
        id: 5,
        answers: [
          { answer: 'Siempre', value: 4 },
          { answer: 'Casi siempre', value: 3 },
          { answer: 'Algunas veces', value: 2 },
          { answer: 'Nunca', value: 1 }
        ]
      },
      {
        question:
          'Me molestan los dolores de cabeza, cuello y dolor de espalda.',
        id: 6,
        answers: [
          { answer: 'Siempre', value: 4 },
          { answer: 'Casi siempre', value: 3 },
          { answer: 'Algunas veces', value: 2 },
          { answer: 'Nunca', value: 1 }
        ]
      }
    ]
  }

  // El id servirá para nombrar los identificadores y el txt para colocar el nombre (por ejemplo en la barra de navegacion.)
  // Adicional a eso permitirá hacer pocas modificaciones en el codigo
  const secciones = {
    Home: { id: 'Home', txt: 'Inicio' },
    Objetivos: { id: 'Objetivos', txt: 'Objetivos' },
    AboutUs: { id: 'AboutUs', txt: 'Acerca de nosotros' } // No planeo agregar el footer.
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
        scroll={scroll}
      />
      <Home section={secciones.Home} style="onlyLogo" />
      <Objetives section={secciones.Objetivos} />
      <AboutUs section={secciones.AboutUs} />
      <Footer />
      <ButtonToUp Scroll={scroll} seccionToUp={secciones.Home.id} />
      <Surveys />
    </>
  );
}

export default LandingPage
