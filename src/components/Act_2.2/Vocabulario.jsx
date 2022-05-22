import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import ganso_elegante from "../../assets/img/ganso/ganso_elegante.png"
import ganso_leyendo from "../../assets/img/ganso/ganso_leyendo.png"
import ganso_pensando from "../../assets/img/ganso/ganso_pensando.png"
import { FaArrowRight, FaClipboardCheck, FaPaperPlane } from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'
import {ErrorAlert,SendAlert, SendOkAlert, SendBadAlert } from "../../helpers/helper_Swal_Alerts"
import { RotatingLines } from 'react-loader-spinner'

export const Vocabulario = () => {

  const [validate, setValidate] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [definiciones, setDefiniciones] = useState(null);
  const [definicionesUsuario, setDefinicionesUsuario] = useState(null);
  const [isThereInformation, setIsThereInformation] = useState(null);
  const [userClickModifyBtn, setUserClickModifyBtn] = useState(false);

  useEffect(async () => {
    let idUser = 15;
    let definicionesUsuario = await getDefinicionesUsuario(idUser);
    let definiciones_Arr = await getDefiniciones()
    
    if(definiciones_Arr !== null && definicionesUsuario !== null){
      setDefiniciones(definiciones_Arr)
      
      if(definicionesUsuario?.length > 0)
      {
        console.log(definicionesUsuario);
        setDefinicionesUsuario(definicionesUsuario);
        setIsThereInformation(true);
        setError(true)
      }
    }else{
      console.log("stoy entrando")
        setError(true)
    }

    setLoading(false); 
    
  }, [])

  const handleSubmit = () => {

  }

  const handleCancelModify = () => {
    setUserClickModifyBtn(false);
    setIsThereInformation(false);
  }

  const handleModify = () => {
    setIsThereInformation(false);
    setUserClickModifyBtn(true);
  }

  const SendOrUpdateVocabulario = async (isUpdate, jsonToSend)=>{
    const urlUpdate = "https://63c3-2800-484-ad85-8eda-9ce7-fcea-7082-18b2.eu.ngrok.io/api/definiciones_usuario/bulk_update/"
    const urlSend =  "https://63c3-2800-484-ad85-8eda-9ce7-fcea-7082-18b2.eu.ngrok.io/api/definiciones_usuario/";
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions;

    if(jsonToSend){
      requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(jsonToSend) 
      };

      let response = await fetch(isUpdate? urlUpdate: urlSend, requestOptions)
                            .then(response => response.json())
                            .catch(err => {return {"err":"Ha ocurrido un error con la conexion"}});
      if(response.err){
        throw new Error(response.err)
      }
      
      if(response.errors)
      {
        return false
      }
      else{
        return true;
      }

    }
    else{
      console.log("Hay campos vacios.")
      return false;
    }
  }



  const handleBtnClickSendOrUpdate = async(isUpdate,e) => {
    e.preventDefault();
    let userId = 15;
    const jsonToSend = createJsonToSend(userId);

    if(jsonToSend){
      console.log(jsonToSend);
      SendAlert(undefined,'Tus respuestas estan siendo enviadas y procesadas <b>Espera un momento</b>')
      try{
        let reponse = await SendOrUpdateVocabulario(isUpdate,jsonToSend);
      if(reponse){
        SendOkAlert();
        }else{
          SendBadAlert(undefined,"Uhm... parece que ya he anotado tus respuestas anteriormente.");
        }
      }catch(e){
        SendBadAlert(undefined,"Parece que el servidor no pudo procesar la solcitud. por favor, intenta de nuevo.");
      }
      
    }else{
      console.log("Hay campos vacios.")
    }
    
    setValidate(true);
  }

  const handleOnChange = (e,i) => {
    if(definicionesUsuario){
      let definicionesUsuarioCopy = [...definicionesUsuario];
      definicionesUsuarioCopy[i]["definicion_usuario"] =  e.target.value
      setDefinicionesUsuario(definicionesUsuarioCopy)
    }
    if (validate)
      setValidate(false);
  }

  const getDefinicionesUsuario = async (idUser) => {
    const url = 'https://63c3-2800-484-ad85-8eda-9ce7-fcea-7082-18b2.eu.ngrok.io/api/definiciones_usuario/?id_usuario='+idUser
   try{
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      console.log(data)
      return data
    } else {
      console.log('No se pudieron traer los datos de las Definiciones...')
      return null
    }
   }catch(e){
     return null;
   }  

    
  }
  const getDefiniciones = async () => {
    const url = 'https://63c3-2800-484-ad85-8eda-9ce7-fcea-7082-18b2.eu.ngrok.io/api/definiciones/'
    try{
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        console.log(data)
        return data
      } else {
        console.log('No se pudieron traer los datos de las Definiciones...')
        return null
      }
    }catch(e){
      return null
    }
    
  }

  const createJsonToSend = (isUser)=>{
    let json = {
      "id_usuario": isUser,
      "respuestas":[]
    };
    let element;
    let value;
    let id;
    for(let definicion of definiciones){
      id = `definicion-${definicion.id}`;
      element = document.getElementById(id);
      if(element){
        value = element.value;
        if(!!value.trim()){
          json["respuestas"].push({"definicion":definicion.id, "definicion_usuario": value  })
        }else{
          return null;
        }
        
      }
      else{
        return null;
      }
    }
    return json;
  }

  

  return (
    <div className="container">
       {
          loading?(<div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">

          <RotatingLines
          width="100"
          strokeColor="#6495ED"
          strokeWidth="3"
          animationDuration=".8"
        />
        </div>):(
        <>
         { error?(
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <img src={ganso_pensando} width="307" height="307"></img>
              <h5 className='my-4 text-center'>Uhm... Parece que ha ocurrido un error al obtener datos.</h5>
            </div>
          </div>
          
        ): (<>
        
        {isThereInformation? (
        <>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <img src={ganso_leyendo} width="307" height="307"></img>
              <h5 className='my-4 text-center'>Uhm... Parece que ya he personalizado tu vocabulario anteriormente.</h5>
            </div>
            <div className="w-100 d-flex mx-md-4 my-4 px-md-3 ">
              <div className="col-6 d-flex justify-content-start">
                <Button className="btn btn-naranja" onClick={handleModify} > <BsGearFill /> <b>Modificar</b> </Button>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Button className="btn btn-naranja"><b>Siguiente Ejercicio</b> <FaArrowRight /></Button>
              </div>
            </div>


          </div>
        </>

      ) : (<><div className="row">
        <div className="col">
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <div className="d-flex align-middle">
              <img
                style={{ width: "150px", height: "150px" }}
                className="card-img-left  justify-content-center align-self-center "
                src={ganso_elegante}
              />
            </div>
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
              <h5 className="card-title"> Actividad 2.1</h5>
              <p className="card-text">
                Darle nombre a lo que experimentamos es un paso importante para saber gestionar nuestras emociones. En vez de darte una lista de definiciones y conceptos teóricos, queremos que tú nos des tu concepto, nombre o como llamarías a algunas experiencias emocionales.
              </p>
              <p className="card-text">
                Para eso, a continuación, encontraras una lista de definiciones* y queremos que tú le coloques el nombre. ¿Cómo lo llamas tu normalmente o como lo llamarías? Es importante que sea algo breve que te permite identificarlo. Nombre del ganso te recuerda que leas muy bien cada definición y recuerdes el nombre que le darás. ¡Sera importante para la siguiente parte!
                <br /><small><i><b>*Tomadas de la RAE.</b></i></small>
              </p>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
      </div>
        <Form onSubmit={handleSubmit} name="addDefiniciones" className="my-4" validated={validate}>
          <div className="row text-center my-3 align-items-center">
            <div className='col-6' ><b><h5>Definición</h5></b></div>
            <div className='col-6' ><b><h5>¿Qué nombre le darías?</h5></b></div>
          </div>

          {definiciones?.map(({ id, definicion }, i) =>
            <div className="row text-center my-3 align-items-center" key={`definicion-${id}`}>
              <div className='col-md-6 mb-1 mb-md-0' >{definicion}</div>
              <div className='col-md-6 my-1 my-md-0' >
                <Form.Control id={`definicion-${id}`} className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={(event)=>handleOnChange(event,i)} 
                value={definicionesUsuario?.[i].definicion_usuario}
                /></div>
            </div>
          )
          }
          <div className="w-100 d-flex mx-md-4 my-4 px-md-3 ">
            {userClickModifyBtn ? (<>
              <div className="col-6 d-flex justify-content-start">
                <Button className="btn btn-naranja" onClick={handleCancelModify} > <FaClipboardCheck /> Dejar como estaba</Button>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Button type="submit" className="btn btn-naranja" onClick={(event)=>handleBtnClickSendOrUpdate(true,event)} >Actualizar <FaPaperPlane /></Button>
              </div></>) : (
              <div className='d-flex justify-content-center justify-content-md-end'>
                <Button type="submit" className="btn btn-naranja" onClick={(event)=>handleBtnClickSendOrUpdate(false,event)} >Enviar</Button>
              </div>)}
          </div>
        </Form>
      </>)}
        </>)
      }
      </>
      )}

      

    </div>
  )
}
