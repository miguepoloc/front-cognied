import React from 'react'
import '../../assets/css/ButtonFixed.scss'
import '../../assets/css/Effects/ShakeEffect.scss'
import { SiWhatsapp } from "react-icons/si";
import { TbMessageReport  } from "react-icons/tb";
const ButtonToUp = ({ Scroll, seccionToUpId }) => {
  return (
        <a
            // onClick={() => Scroll.scroll('Home')}
            className="buttonFixed bottomRight"
            href="https://sgrsaludmental.unimagdalena.edu.co/"
            target="_blank"
        >
            <TbMessageReport  size={40} className="shake" color="white" />
        </a>
  )
}

export default ButtonToUp
