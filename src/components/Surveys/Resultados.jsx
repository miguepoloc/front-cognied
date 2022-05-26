import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'
export const Resultados = () => {
  return (
    <div className='container'>
        <div className='mx-4 my-4 px-4 py-4' style={{backgroundColor:"#F0F0F0", borderRadius:"25px"}} >
            <div className='text-center' >
                <img  src={imgGanso.escribiendo_250x200} style={{ width: "200px", height: "200px" }}/>
                <h5 className='my-2'><b>¡Resultados!</b></h5>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                ¡Hola! Parece que ya tenemos tus resultados. Recuerda que estas interpretaciones se dan a partir de tus respuestas y no se consideran un diagnóstico clínico si no se acompañan de una evaluación personalizada por un profesional. Solo es una forma de orientar como podrías estar percibiendo tu estado general.
                </p>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                En lo que se refiere a tus emociones, en cuanto a la capacidad de atender tus sentimientos parece que ----------------------. En cuanto a tu capacidad de comprender bien tus estados emocionales parece que -----------------. Finalmente, lo que respecta a tu capacidad para regular tus estados emocionales de forma adecuada parece que ----------------------.
                </p>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                Ahora, en cuanto a tu estrés percibido, parece que te encuentras en un nivel ------. Recuerda que esto se evalúa en cuanto al último mes y depende de tu autoinforme.
                </p>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                Ahora, en cuanto a tu estrés percibido, parece que te encuentras en un nivel ------. Recuerda que esto se evalúa en cuanto al último mes y depende de tu autoinforme.
                </p>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                Por otro lado, en cuanto a otros factores importantes relacionados a tu salud mental, parece que te percibes con un nivel de ansiedad -------, ---- aparentes síntomas depresivos -------.
                </p>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                Finalmente, en lo que trata en torno a los pensamientos automáticos, estos son los niveles que pareces presentar en este tipo de pensamientos:
                <ul className='mt-2 ms-2'>
                    <li className='my-2'>Filtraje o abstracción selectiva: ---------</li>
                    <li className='my-2'>Pensamiento polarizado:  -----------</li>
                    <li className='my-2'>Sobregeneralización: ----------</li>
                    <li className='my-2'>Interpretación del pensamiento: ---------</li>
                    <li className='my-2'>Visión catastrófica: ------------</li>
                    <li className='my-2'>Personalización: -----------</li>
                    <li className='my-2'>Falacia de control: ------------</li>
                    <li className='my-2'>Falacia de justicia: ------------</li>
                    <li className='my-2'>Razonamiento emocional: -----------</li>
                    <li className='my-2'>Falacia de cambio: -----------</li>
                    <li className='my-2'>Etiquetas globales: ------------</li>
                    <li className='my-2'>Culpabilidad: ------------</li>
                    <li className='my-2'>Los deberías: ------------</li>
                    <li className='my-2'>Tener razón: ------------</li>
                    <li className='my-2'>Falacia de recompensa divina: -----------</li>
                </ul>
                </p>
                <p className='lh-base' style={{textAlign: "justify", textJustify: "inter-word"}}>
                ¿Qué significa toda esa clasificación? Si quieres saber más de esto, así como de los otros factores, ¡DigitalMente te ayudará a conocer más!
                </p>
            </div>
        </div>
    </div>
  )
}
