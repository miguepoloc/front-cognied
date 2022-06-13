import React from 'react'
import { TbLockOpen, TbLock } from "react-icons/tb";
import { Modulo_IconoBloqueo } from './Modulo_IconoBloqueo';

export const Modulos = ({ img, text, bloqueado, col , moduloClass, classImg = "w-50"}) => {
    const estado = bloqueado ? "modulo_bloqueado" : "modulo_desbloqueado"
    const classDiv = `${col} cards_modulos_inicio ${estado}`
    return (
        <div className={classDiv}>
            
            <Modulo_IconoBloqueo bloqueado={bloqueado} />
            
            <div className={`row h-100  card_modulo flex-center items_modulos_inicio ${moduloClass}`}>
                <div className="col-12 justify-content-center align-self-center text-center">
                    <img
                        className={classImg}
                        src={img}
                    />
                </div>
                <div className="col-12  justify-content-center align-self-center">
                    <h6 className="font-Geomanist text-center text-break">
                        {text}
                    </h6>
                </div>

            </div>

        </div>
    )
}
