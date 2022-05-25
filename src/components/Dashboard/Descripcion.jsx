import React from 'react'

import { FcBiomass } from "react-icons/fc";

export const Descripcion = ({ title, text, color }) => {
    const colorDefault = "#9CCC65";
    return (
        <div
            className="callout mb-5  h-md-250 "
            style={{ borderLeftColor: color ? color : colorDefault }}
        >
            <h5 className='d-flex align-items-center' style={{ color: color ? color : colorDefault }}>
                <FcBiomass className="me-2" style={{height:"1.5em", width:"1.5em"}} /> <span dangerouslySetInnerHTML={{__html: title? title : "Actividad"}}></span>
            </h5>

            <p dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )
}
