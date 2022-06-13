import React from 'react'
import { imgGanso } from '../../../helpers/helper_imagen_ganso'
import "./assets/css/Modulos_inicio.scss"

import { Modulos } from './Modulos';
import { Modulo_IconoBloqueo } from './Modulo_IconoBloqueo';
export const Modulos_inicio = () => {

    const modulos = {
        modulo_alternativo: {
            col: "col-md-9 col-8",
            img: imgGanso.escribiendo_250x200,
            moduloClass: "card_moduloAutoevaluativo",
            text: "Módulo autoevaluativo",
            bloqueado: false,
            href: ""
        },
        otros_modulos: [
            {
                col: "col-4 col-md-3",
                img: imgGanso.meditando,
                text: "Relax",
                moduloClass: "card_relax",
                bloqueado: false,
                href: ""
            },
            {
                col: "col-4 col-md-3",
                img: imgGanso.feliz_250x200,
                text: "Mis emociones",
                moduloClass: "card_misEmociones",
                classImg: "w-50 pt-2",
                bloqueado: true,
                href: ""
            },
            {
                col: "col-4 col-md-3",
                img: imgGanso.pensando,
                text: "Piénsalo",
                moduloClass: "card_piensalo",
                classImg: "w-50 pt-2",
                bloqueado: false,
                href: ""
            },
            {
                col: "col-12 col-md-3",
                img: imgGanso.leyendo,
                text: "Mis habilidades",
                moduloClass: "card_misHabilidades",
                classImg: "img-misHabilidades_modulos_inicio",
                bloqueado: false,
                href: ""
            }
        ]
    }
    const modulo_alternativo = {
        col: "col-md-9 col-8",
        img: imgGanso.escribiendo_250x200,
        moduloClass: "card_moduloAutoevaluativo",
        text: "Módulo autoevaluativo",
        bloqueado: false,
        href: ""
    }

    const estado = modulos.modulo_alternativo.bloqueado ? "modulo_bloqueado" : "modulo_desbloqueado"
    const classDiv = `${modulos.modulo_alternativo.col} cards_modulos_inicio ${estado}`

    return (
        <><div className="container">
            <div className="row justify-content-md-end">

                <div className={classDiv}>

                    <div className="row">
                        <Modulo_IconoBloqueo bloqueado={modulos.modulo_alternativo.bloqueado} style={{top:"-18px"}} />
                        <div className="col-4 justify-content-center align-self-center text-center">
                            <img
                                className='w-50'
                                src={modulos.modulo_alternativo.img}
                            />
                        </div>
                        <div className="col-8 justify-content-center align-self-center ">
                            <h2 className="font-Geomanist text-darkBlue text-center text-break">
                                {modulos.modulo_alternativo.text}
                            </h2>
                        </div>
                    </div>

                </div>
            </div>


            <div className="row my-1  align-items-md-stretch justify-content-center">
                {modulos.otros_modulos.map(({ col, img, text, classImg, bloqueado, moduloClass }) => {
                    return (<Modulos col={col} img={img} text={text} bloqueado={bloqueado} classImg={classImg} moduloClass={moduloClass} />)
                })}
            </div>
        </div>

        </>
    )
}
