import React from 'react'
import '../assets/css/Footer.scss'
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
                <div className="social">
                    <a href="#">
                        <FaInstagram></FaInstagram>
                    </a>
                    <a href="#">
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
                        <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Services</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">About</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <p className="copyright">Company Name © 2022</p>
            </div>
        </footer>
  )
}

export default Footer
