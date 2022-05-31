/* eslint-disable react/react-in-jsx-scope */
import Capsula1 from '../assets/img/modulo_emocional/Capsula_1.png'
import Capsula2 from '../assets/img/modulo_emocional/Capsula_2.png'
import Capsula3 from '../assets/img/modulo_emocional/Capsula_3.png'
import Capsula4 from '../assets/img/modulo_emocional/Capsula_4.png'
import Capsula5 from '../assets/img/modulo_emocional/Capsula_5.png'
import Capsula6 from '../assets/img/modulo_emocional/Capsula_6.png'
import Capsula7 from '../assets/img/modulo_emocional/Capsula_7.png'
import Capsula8 from '../assets/img/modulo_emocional/Capsula_8.png'
import Part1 from '../components/Act_1.1/Part1'
import { Vocabulario } from '../components/Act_2.2/Vocabulario'
import { Quimica } from '../components/Act_3.1/Quimica'
import MisEstrategias from '../components/Act_4.1/MisEstrategias'

export const linksEmocional = {
  1: {
    nombre: 'Cápsula 1',
    imagen: Capsula1,
    tipoCapsula: true
  },
  2: {
    nombre: 'Cápsula 2',
    imagen: Capsula2,
    tipoCapsula: true
  },

  3: {
    nombre: 'Actividad 1',
    actividad: <Part1 />,
    tipoCapsula: false
  },
  4: {
    nombre: 'Cápsula 3',
    imagen: Capsula3,
    tipoCapsula: true
  },
  5: {
    nombre: 'Actividad 2',
    actividad: <Vocabulario />,
    tipoCapsula: false
  },
  6: {
    nombre: 'Cápsula 4',
    imagen: Capsula4,
    tipoCapsula: true
  },
  7: {
    nombre: 'Actividad 3',
    actividad: <Quimica />,
    tipoCapsula: false
  },
  8: {
    nombre: 'Cápsula 5',
    imagen: Capsula5,
    tipoCapsula: true
  },
  9: {
    nombre: 'Cápsula 6',
    imagen: Capsula6,
    tipoCapsula: true
  },
  10: {
    nombre: 'Actividad 4',
    actividad: <MisEstrategias />,
    tipoCapsula: false
  },
  11: {
    nombre: 'Cápsula 7',
    imagen: Capsula7,
    tipoCapsula: true
  },
  12: {
    nombre: 'Cápsula 8',
    imagen: Capsula8,
    tipoCapsula: true
  }
}
