import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import {FaBolt} from 'react-icons/fa'
import { async } from 'regenerator-runtime'
import '../../assets/css/Surveys.scss'
import ganso_lupa_celular from "../../assets/img/ganso/ganso_lupa_celular.png"
import Answer from '../Surveys/Answer'

const RuletaEmociones = () => {
  const color = "#4cbeff";
  
 // useEffect(() =>{setColorSelect(color)},[])
  

  const [definicionesUsuario, setDefinicionesUsuario] = useState(null);
  const [emociones, setEmociones] = useState(null)
  const [emocionIndex, setEmocionIndex] = useState(-1)

  useEffect(async() =>{
    let idUser = 15;
    let definicionesResponse = await getDefinicionesUsuario(idUser);
    let emocionResponse = await getEmociones();
    if(emocionResponse  !== null && definicionesResponse  !== null){
      console.log(emocionResponse )
      console.log(definicionesResponse)
      setEmociones(emocionResponse );
      setDefinicionesUsuario(definicionesResponse);
    }else{
      console.log("Algo salio mal... no se pudieron obtener las emociones")
    }
  },[])

  const handleChange = (e)=>{
      console.log(e.target.value)
  }
  const getEmociones = async () => {
    const url = 'https://417c-161-10-123-238.eu.ngrok.io/api/emocion/'
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      console.log(data)
      return data
    } else {
      console.log('No se pudieron traer los datos de las Definiciones...')
      return null
    }
  }

  const getDefinicionesUsuario = async (idUser) => {
    const url = 'https://417c-161-10-123-238.eu.ngrok.io/api/definiciones_usuario/?id_usuario='+idUser
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      console.log(data)
      return data
    } else {
      console.log('No se pudieron traer los datos de las Definiciones...')
      return null
    }
  }

  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <img
              style={{ width: "150px", height: "150px" }}
              className="card-img-left flex-auto d-block "
              src={ganso_lupa_celular}
            />
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
              <h5 className="card-title">Actividad 2.2</h5>
              <p className="card-text">
              ¡Le has dado nombre a las experiencias emocionales! Pero… ¿sabes en que familia emocional se ubican? Si recuerdas las funciones de las emociones, como te recomendó Nombre del ganso, no te será difícil la siguiente parte del ejercicio.En la ruleta que ves aquí están los nombres de las emociones básicas. Girala y te aparecerá una emoción. Dale click al botón azul que dice “Remove”. Luego, selecciona la emoción que te salió en “Coloca la emoción”. 
              Ahora, aquí está la tarea, debes ir a las dos barras de abajo y seleccionar en cada una tú definición, sabiendo a que se refieren, que consideres que pertenece o se relacionan con esa emoción. Cada emoción está relacionada con por lo menos dos de las definiciones que has nombrado. Una vez lo selecciones, darle al botón de <b>“Enviar”</b> para comprobar tu respuesta.
              </p>
            </div>
          </div>
        </div>
        <div class="w-100"></div>
        <div className="col">
          <div
            className="callout mb-5  h-md-250 "
            style={{ borderLeftColor: color }}
          >
           <h5 style={{ color: color }}>
           <FaBolt /> Tip importante
            </h5> 

            <p>
              A continuación, tienes un rompecabezas de cada una de las
              emociones básicas. Cuando lo termines de armar, busca entre las
              opciones anexas y selecciona la emoción que creas que representa.
              Si logras identificar la emoción correcta, !----Nombre del
              ganso---! te dará unas pistas de esa emoción. ¡Préstale atención
              porque lo necesitaras para más adelante!
            </p>
          </div>
        </div>
      </div>
      <div className="row"> 
        <div className="col-md-8">
          <div>
          <iframe
            src="https://wheelofnames.com/k6a-vug "
            width="100%" height="585px">
          </iframe>

          </div>
        </div>
        <div className="col-md-4 ">
          <div className="row d-flex align-items-start justify-content-end">
            <div className="col-xl-7">
            <Form.Select className="mb-4" onChange={handleChange}>
                <option value="-1" >Seleccciona una emocion</option>
                {emociones?.map(({id,emocion})=>
                  <option value={id} > {emocion} </option>
                )
                }
              </Form.Select>
            </div>
          </div>
          
          <Form.Select className="mb-4" onChange={handleChange}>
                <option value="-1" >Definicion 1</option>
                {definicionesUsuario?.map(({definicion_usuario},i)=>

                  <option value={i} > {definicion_usuario} </option>
                )
                }
          </Form.Select>
          <Form.Select className="mb-4" onChange={handleChange}>
                <option value="-1" >Definicion 2</option>
                {definicionesUsuario?.map(({definicion_usuario},i)=>
                  <option value={i} > {definicion_usuario} </option>
                )
                }
              </Form.Select>
        
          
        </div>
      </div>
    </div>
  );
}

export default RuletaEmociones
