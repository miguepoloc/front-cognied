import React from 'react'
import '../assets/css/Footer.scss'
import Escudo from '../assets/img/escudo_monocromatico.png'
import Escudo2 from '../assets/img/Escudo_Unimag.svg'
import Grupo from '../assets/img/logo_grupo.svg'
import Logo from '../assets/img/Logo_Monocromatico.svg'

import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
const Footer = ({ section }) => {
  return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#00659d"
                    d="M0,128L80,133.3C160,139,320,149,480,170.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <div className="footer-basic footer pb-5">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <img src={Escudo} id="Escudo" alt="" style={{ width: '150px' }} />
                    </li>
                    {/* <li className="list-inline-item">
                        <img src={Escudo2} id="Escudo2" alt="" style={{ width: '150px' }} />
                    </li> */}
                    <li className="list-inline-item">
                        <img src={Grupo} id="Grupo" alt="" style={{ width: '300px' }} />
                    </li>
                    <li className="list-inline-item">
                        <img src={Logo} id="Logo" alt="" style={{ width: '300px' }} />
                    </li>
                </ul>
                {/* <div className="social">
                    <a href="https://www.instagram.com/proyecto.dimente.unimag/" target="_blank" rel="noreferrer">
                        <FaInstagram></FaInstagram>
                    </a>
                    <a href="https://www.facebook.com/DigitalMenteUnimagdalena/" target="_blank" rel="noreferrer">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#">
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href="#">
                        <FaWhatsapp></FaWhatsapp>
                    </a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Acerca de nosotros</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Objetivos</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Contacto</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Política de privacidad</a>
                    </li>
                </ul> */}
                <p className="copyright">Universidad del Magdalena © 2022</p>
            </div>
        </footer>
  )
}

export default Footer
