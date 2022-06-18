import React from 'react'
import { Modulo_IconoBloqueo } from './Modulo_IconoBloqueo';

export const Modulos = ({ img, text, bloqueado, col, moduloClass, href, classImg = "w-50", quitarIconoBloqueo = false, imagenAlLadoIzquierdo = false }) => {
    const estado = bloqueado ? "modulo_bloqueado" : "modulo_desbloqueado"
    const classDiv = `${col} cards_modulos_inicio ${estado}`

    let classDivImage = imagenAlLadoIzquierdo ? "col-5" : "col-12"
    let classDivText = imagenAlLadoIzquierdo ? "col-7" : "col-12"
    let classText = imagenAlLadoIzquierdo ? "" : "text-center"

    return (

        <div className={classDiv}>
            <a href={href} className="text-reset">
                {quitarIconoBloqueo?(<></>):(<Modulo_IconoBloqueo bloqueado={bloqueado} />)}
                

                <div className={`row h-100  card_modulo flex-center items_modulos_inicio ${moduloClass}`}>
                    <div className={`${classDivImage} justify-content-center align-self-center text-center`}>
                        <img
                            className={classImg}
                            src={img}
                        />
                    </div>
                    <div className={` ${classDivText} justify-content-center align-self-center`}>
                        {imagenAlLadoIzquierdo ? (<h5 className={`font-Geomanist text-break text-darkBlue text-center`}>
                        {text}
                    </h5>): (<h6 className = {`font-Geomanist text-break text-center`}>
                        {text}
                    </h6>)}
                    
                </div>

        </div>
            </a >
        </div >

    )
}
