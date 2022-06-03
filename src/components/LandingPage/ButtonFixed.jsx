import React from 'react'
import '../../assets/css/ButtonFixed.scss'
import '../../assets/css/Effects/ShakeEffect.scss'
import { SiWhatsapp } from "react-icons/si";
const ButtonToUp = ({ Scroll, seccionToUpId }) => {
  return (
        <div
            onClick={() => Scroll.scroll('Home')}
            className="buttonFixed bottomRight"
        >
            <SiWhatsapp size={30} className="shake" color="white" />
        </div>
  )
}

export default ButtonToUp
