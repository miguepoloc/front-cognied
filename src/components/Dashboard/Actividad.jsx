import React from 'react'

import { AiFillStar } from "react-icons/ai";
export const Actividad = ({src,title,text}) => {
    return (
        <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <img
                style={{ width: "150px", height: "150px" }}
                className="card-img-left  justify-content-center align-self-center"
                src={src}
            />
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
                <h5 className="card-title d-flex align-items-center "> <AiFillStar style={{color:"#ffd000", height:"1.5em", width:"1.5em"}} />  <span className='mx-1' dangerouslySetInnerHTML={{__html: title}}></span> <AiFillStar style={{color:"#ffd000", height:"1.5em", width:"1.5em"}} /></h5>
                <p className="card-text" dangerouslySetInnerHTML={{__html: text}}></p>
            </div>
        </div>
    )
}
