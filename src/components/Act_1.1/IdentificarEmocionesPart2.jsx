import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles, faBolt,faBrain, faLocationCrosshairs, faPencil } from '@fortawesome/free-solid-svg-icons'
import "../../assets/css/Surveys.scss";
import Answer from "../Surveys/Answer";
import swal from "sweetalert2";
import ganso_elegante from "../../assets/img/ganso/ganso_elegante.png"
import alegria from "../../assets/img/modulo_emocional/Actividad_1.1/seccion2/Alegria.jpg"
import asco from "../../assets/img/modulo_emocional/Actividad_1.1/seccion2/Asco.jpg"
import ira from "../../assets/img/modulo_emocional/Actividad_1.1/seccion2/Ira.jpg"
import miedo from "../../assets/img/modulo_emocional/Actividad_1.1/seccion2/Miedo.jpg"
import sorpresa from "../../assets/img/modulo_emocional/Actividad_1.1/seccion2/Sorpresa.jpg"
import tristeza from "../../assets/img/modulo_emocional/Actividad_1.1/seccion2/Tristeza.jpg"
import Scroll from '../../helpers/helperScroll'

const IdentificarEmocionesPart2 = () => {
    window.Swal = swal;
  /*
    •	Sorpresa.
    •	Asco
    •	Miedo
    •	Alegría
    •	Tristeza
    •	Ira
 */
//{option:"",isCorrect: true},
  const seccion2 = {
    ejercicios:[{
      name:"Ejercicio 1",
      image:asco,
      text:"Cuando experimentas asco, ¿cómo has sentido que lo expresas?",
      //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
      successMsg:"¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. Identificar, por ejemplo, como experimentamos en nuestro cuerpo las emociones es un paso esencial para la gestión emocional. ",
      sensaciones: [
        {option:"Erizamiento de la piel.",isCorrect: false},
        {option:"Aumento de la frecuencia cardiaca.",isCorrect: true},
        {option:"Prolongación de la pausa entre inspiraciones.",isCorrect: true},
        {option:"Bajo tono muscular.",isCorrect: false},
        {option:"Nauseas." ,isCorrect: true},
        {option:"Interrupción puntual de la respiración.", isCorrect: false}
      ],
      pensamientos: [
        {option:"Pensamientos de rechazo.",isCorrect: true},
        {option:"Pensamientos optimistas.",isCorrect: false},
        {option:"Percepción de que algo no es como debería ser.", isCorrect: true},
        {option:"¡Importante!",isCorrect: false},
        {option:"¡Ugh!",isCorrect: true}
      ],
      acciones: [
        {option:"Correr.",isCorrect: false},
        {option:"Salta.",isCorrect: false},
        {option:"Distanciarse.",isCorrect: true},
        {option:"Cantar.",isCorrect: false},
        {option:"Inmovilización.",isCorrect: false},
        {option:"Evitación.",isCorrect: true},
        {option:"Retirar la atención.",isCorrect: true},
      ]
    },
    {
      name:"Ejercicio 2",
      image:miedo,
      text:"Cuando experimentas miedo, ¿cómo has sentido que lo expresas?",
      //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
      successMsg:"¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. Recuerda que, por ejemplo, las acciones tienden a ser respuestas impulsivas que debemos saber identificar para gestionar.",
      sensaciones: [
        {option:"Aumento de la tensión muscular.",isCorrect: true},
        {option:"Aumento de la frecuencia respiratoria.",isCorrect: true},
        {option:"Prolongación de la pausa entre inspiraciones.",isCorrect: false},
        {option:"Aumento de la frecuencia cardiaca.",isCorrect: true},
        {option:"Erizamiento de la piel.",isCorrect: false},
      ],
      pensamientos: [
        {option:"Percepción de incertidumbre.",isCorrect: false},
        {option:"Percepción de daño.",isCorrect: true},
        {option:"Pensamientos optimistas.", isCorrect: false},
        {option:"Percepción de peligro.",isCorrect: true},
        {option:"Reflexión sobre la vida.",isCorrect: false},
        {option:"Pensamientos de preocupación.",isCorrect: true}
      ],
      acciones: [
        {option:"Retirarse.",isCorrect: true},
        {option:"Acercarse.",isCorrect: false},
        {option:"Atacar.",isCorrect: true},
        {option:"Inmovilizarse.",isCorrect: true},
        {option:"Correr.",isCorrect: false},
        {option:"Buscar en los bolsillos.",isCorrect: false},
      ]
    },
    {
      name:"Ejercicio 3",
      image:tristeza,
      text:"Cuando experimentas tristeza, ¿cómo has sentido que lo expresas?",
      //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
      successMsg:"¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. Los pensamientos que tienden a surgir cuando se experimenta una emoción pueden ser distorsionados o exagerados con respecto a la situación. ¡Por eso es importante reconocerlos!",
      sensaciones: [
        {option:"Aumento de la presión sanguínea.",isCorrect: true},
        {option:"Aumento de la frecuencia respiratoria.",isCorrect: false},
        {option:"Aumento de la frecuencia cardiaca.",isCorrect: false},
        {option:"Prolongación de la pausa entre inspiraciones.",isCorrect: false},
        {option:"Aumento de las inhalaciones (respiración).",isCorrect: true},
        {option:"Aumento del tono muscular.",isCorrect: true},
      ],
      pensamientos: [
        {option:"Percepción en torno a la aflicción.",isCorrect: true},
        {option:"Percepción de daño.",isCorrect: false},
        {option:"Percepción de peligro.", isCorrect: false},
        {option:"“¡Esto es lo peor!”",isCorrect: true},
        {option:"Pensamientos de preocupación.",isCorrect: false},
        {option:"Pensamiento enfocado en lo negativo.",isCorrect: true}
      ],
      acciones: [
        {option:"Ritmo acelerado.",isCorrect: false},
        {option:"Ritmo pausado en acciones.",isCorrect: true},
        {option:"Retraimiento.",isCorrect: true},
        {option:"Cocinar.",isCorrect: false},
        {option:"Leer.",isCorrect: false},
        {option:"Evitar interacción con otros.",isCorrect: true},
      ]
    },
    {
      name:"Ejercicio 4",
      image:ira,
      text:"Cuando experimentas ira, ¿cómo has sentido que lo expresas?",
      //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
      successMsg:"¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. ¿Te han dicho cuando estás muy molesto y has tomado una decisión que mejor lo pienses “con cabeza fría”? Precisamente, de aquí parte el saber identificar y aceptar nuestras emociones. Esto no significa que todos se lanzan a la acción de agredir o se irritan internamente, dado que depende de muchos factores tanto de la persona como de la situación y el ambiente para una reacción u otra.",
      sensaciones: [
        {option:"Aumento de la presión sanguínea.",isCorrect: false},
        {option:"Aumento del ritmo respiratorio",isCorrect: true},
        {option:"Prolongación de la pausa entre inspiraciones.",isCorrect: false},
        {option:"Aumento del tono muscular.",isCorrect: true},
        {option:"Aumento de la frecuencia cardiaca.",isCorrect: true},
      ],
      pensamientos: [
        {option:"Percepción en torno a la aflicción.",isCorrect: false},
        {option:"Pensamientos impulsivos.",isCorrect: true},
        {option:"Acción antes que consideración de la situación.", isCorrect: true},
        {option:"Poca reflexión sobre situaciones.",isCorrect: true},
        {option:"“¡Esto es lo peor!”",isCorrect: false},

      ],
      acciones: [
        {option:"Agredir verbalmente.",isCorrect: true},
        {option:"Inmovilizarse.",isCorrect: false},
        {option:"Acción violenta.",isCorrect: false},
        {option:"Pegar a algo o alguien.",isCorrect: true},
        {option:"Desgana.",isCorrect: false},
        {option:"Irritarse internamente.",isCorrect: true},
      ]
    },
    {
      name:"Ejercicio 5",
      image:alegria,
      text:"Cuando experimentas alegría, ¿cómo has sentido que lo expresas?",
      //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
      successMsg:"¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. ¡Recuerda valorar todas las emociones y aceptarlas, son parte de tu vida y te permiten adaptarte a tu entorno!",
      sensaciones: [
        {option:"Aumento de la frecuencia cardiaca.",isCorrect: true},
        {option:"Alto tono muscular.",isCorrect: false},
        {option:"Interrupción puntual de la respiración.",isCorrect: false},
        {option:"Erizamiento de la piel.",isCorrect: false},
        {option:"Bajo tono muscular.",isCorrect: true},
        {option:"Aumento de las inhalaciones (respiración).",isCorrect: true},
      ],
      pensamientos: [
        {option:"“¿Qué pasó?”",isCorrect: false},
        {option:"Pensamientos impulsivos.",isCorrect: true},
        {option:"Acción antes que consideración de la situación.", isCorrect: true},
        {option:"Poca reflexión sobre situaciones.",isCorrect: true},
        {option:"“¡Esto es lo peor!”",isCorrect: false},

      ],
      SinAcciones: "La alegría facilita la interacción social, mejora el rendimiento cognitivo y la actitud frente a las situaciones, entre otros puntos. De aquí se pueden derivar muchas acciones dependiendo de tu personalidad, puede que estés más propenso a hablar con otras personas, o a prestar atención a lo que te comentan o a compartir algo determinado. La importancia de identificar las emociones nos permite observar su impacto (Fernández-Abascal et al., 2010)" 
    },
    {
      name:"Ejercicio 6",
      image:sorpresa,
      text:"Cuando experimentas sorpresa, ¿cómo has sentido que lo expresas?",
      //errorMsg:"¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción",
      successMsg:"¡Correcto! Si bien estas no son todas ni las únicas manifestaciones de esta emoción, son algunas de las que podrías identificar cuando se activa. ¡Ejercita la identificación de tus emociones como paso fundamental para tu gestión emocional!",
      sensaciones: [
        {option:"Temblor en los brazos.",isCorrect: false},
        {option:"Disminución de la frecuencia cardiaca.",isCorrect: true},
        {option:"Aumento de la frecuencia cardiaca.",isCorrect: false},
        {option:"Interrupción puntual de la respiración.",isCorrect: true},
        {option:"Erizamiento de la piel.",isCorrect: true},
        {option:"Respiración normal.",isCorrect: false},
      ],
      pensamientos: [
        {option:"“¿¡Qué!? ¿Qué pasó?”",isCorrect: true},
        {option:"Pensamientos de incertidumbre.",isCorrect:true},
        {option:"Pensamientos positivos.", isCorrect: false},
        {option:"Pensamientos negativos.",isCorrect: false},
        {option:"“¿Qué hora es?”",isCorrect: false},
        {option:"Mente en blanco.",isCorrect: true},
      ],
      SinAcciones: "La sorpresa facilita que aparezcan acciones relacionadas a explorar, investigar. Es decir, en torno al interés o curiosidad por la situación. Siempre dependerá del tipo de factor al que te enfrentas, lo que hará que después determine uno u otro tipo de acción (Fernández-Abascal et al., 2010)" 
    },
  ]
  }
  const moveToEjercicio = () => {
    Scroll.scroll("ejercicio",true);
  }

  const [selectOption, setSelectOption] = useState({
    select_sensaciones_0:-1,
    select_sensaciones_1:-1,
    select_sensaciones_2:-1,
    select_pensamientos_0:-1,
    select_pensamientos_1:-1,
    select_pensamientos_2:-1,
    select_acciones_0:-1,
    select_acciones_1:-1,
    select_acciones_2:-1

  });
  const [activityIndex, setActivityIndex] = useState(0)
  const handleChange = (event) => {
    setSelectOption(()=>{return {...selectOption, [event.target.name] : event.target.value}})
  }

  const handleSubmit = () => {
    let valueSensaciones0 = selectOption.select_sensaciones_0;
    let valueSensaciones1 = selectOption.select_sensaciones_1;
    let valueSensaciones2 = selectOption.select_sensaciones_2;
    let valuePensamientos0 = selectOption.select_pensamientos_0;
    let valuePensamientos1 = selectOption.select_pensamientos_1;
    let valuePensamientos2 = selectOption.select_pensamientos_2;
    let valueAcciones0 = selectOption.select_acciones_0;
    let valueAcciones1 = selectOption.select_acciones_1;
    let valueAcciones2 = selectOption.select_acciones_2;
    let sensaciones = seccion2.ejercicios[activityIndex].sensaciones;
    let pensamientos = seccion2.ejercicios[activityIndex].pensamientos;
    let acciones = seccion2.ejercicios[activityIndex].acciones;
    /*
      Valido que el usuario haya seleccionado una respuesta por select.
    */
    if(valueSensaciones0 == -1 || valueSensaciones1 == -1 || valueSensaciones2 == -1){
      console.log("No has seleccionado alguna opcion de sensaciones");
      return null;
    }

    if(valuePensamientos0  == -1 || valuePensamientos1 == -1 || valuePensamientos2 == -1){
      console.log("No has seleccionado alguna opcion de pensamientos");
      return null;
    }

    if(valueAcciones0  == -1 || valueAcciones1 == -1 || valueAcciones2 == -1){
      console.log("No has seleccionado alguna opcion de Acciones");
      return null;
    }

    /* 
      Valido que el usuario haya seleccionado las respuestas correctas.
    */
    
    if(!(sensaciones[valueSensaciones0].isCorrect && 
      sensaciones[valueSensaciones1].isCorrect && 
      sensaciones[valueSensaciones2].isCorrect)){
        console.log("¡Sigue intentando! Una o más de las opciones de la columna sensaciones no corresponde tan precisamente a la emoción")
        return null;
      }
    if(!(pensamientos[valuePensamientos0].isCorrect && 
        pensamientos[valuePensamientos1].isCorrect && 
        pensamientos[valuePensamientos2].isCorrect)){
          console.log("¡Sigue intentando! Una o más de las opciones de la columna pensamientos no corresponde tan precisamente a la emoción")
          return null;
        }
    if(!(acciones[valueAcciones0].isCorrect && 
          acciones[valueAcciones1].isCorrect && 
          acciones[valueAcciones2].isCorrect)){
            console.log("¡Sigue intentando! Una o más de las opciones de la columna acciones no corresponde tan precisamente a la emoción")
            return null;
          }
    setSelectOption(()=>{return({
      select_sensaciones_0:-1,
      select_sensaciones_1:-1,
      select_sensaciones_2:-1,
      select_pensamientos_0:-1,
      select_pensamientos_1:-1,
      select_pensamientos_2:-1,
      select_acciones_0:-1,
      select_acciones_1:-1,
      select_acciones_2:-1
  
    })})
    setActivityIndex(activityIndex + 1);
    moveToEjercicio();
  }

  return (
    <div className="container">
      <div className="row">
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
              <h5 className="card-title"> Actividad 1.2</h5>
              <p className="card-text">
              ¿Fue difícil adivinar a que emoción se refería cada imagen? Apuesto a que lo has hecho muy bien. Y lo mejor, ¡ahora conoces las funciones básicas de las emociones y un poco de lo que implican! Aunque seguramente dirás: “Pues eso podía adivinarlo fácil, ¿no?”. Bueno, ¿qué tal si lo ponemos a prueba? 
              </p>
              <p className="card-text">
              Ahora que sabes un poco más de estas emociones y recordando lo que hablamos sobre como las emociones se relacionan a unas sensaciones, pensamientos y acciones. ¿Puedes identificar cuáles son los que identifican a cada emoción?               </p>
              <hr/>
              <p>A continuación, para cada emoción, selecciona las sensaciones, pensamientos y acciones que crees que pueden asociarse a cada una de estas. ¡Usa cada uno de los botones de la columna que corresponda y elige las opciones que creas correctas! Para algunos casos, no será necesario que indiques acciones.
</p>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div
            className="callout mb-5  h-md-250 "
            style={{ borderLeftColor: "#4cbeff" }}
          >
            <h5 style={{ color: "#4cbeff" }}>
            <FontAwesomeIcon icon={faBolt} /> Tip 
            </h5>

            <p>
            En la columna de pensamientos puede que encuentres expresiones como “¡Ugh!”. Trata de identificar si estas pueden relacionarse a la emoción. También tienes un pequeño glosario arriba por si tienes alguna duda. 
            </p>
          </div>
        </div>
      </div>



      <div className="row mb-4 text-center" id="ejercicio"> 
          <p className="text-strong" style={{ color: "#4cbeff" }}> <FontAwesomeIcon icon={faPencil} /> Ejercicio {activityIndex +1} de {seccion2.ejercicios.length} </p> 
          <div className="text-center">
            <img className=" justify-content-center align-self-center" src={seccion2.ejercicios[activityIndex].image} alt="" style={{ width: "50%"}}/>
          </div>
          <div className="d-flex justify-content-center">
          <div className="card px-4  py-1 mt-4 mb-2 text-center w-75">
            <div className="card-body">
               <p className="card-text">
               {seccion2.ejercicios[activityIndex].text}</p>
              </div>
          </div>
          </div>
      </div>
      
      <div className="row my-4">
        <div className="col-sm">
          <h5 style={{ color: "#4cbeff" }} className="text-center">
          <FontAwesomeIcon icon={faHandSparkles} /> Sensaciones
          </h5>

            {[...Array(3)].map((element,indexSelect)=>(
              <Form.Select className="mb-4 mt-3" name={`select_sensaciones_${indexSelect}`} onChange={handleChange}>
                <option value="-1" >Seleccciona una opcion</option>
              {seccion2.ejercicios[activityIndex].sensaciones.map((sensacion,sensacionindex)=>(
                <>
                <option value = {sensacionindex} key={`${seccion2.ejercicios[activityIndex].name}-select_acciones_${indexSelect}-${sensacionindex}`}>{sensacion.option}</option>
                </>
              ))}  
              </Form.Select> 
            ))}

        </div>
        <div className="col-sm">
          <h5 style={{ color: "#4cbeff" }}  className="text-center">
          <FontAwesomeIcon icon={faBrain} /> Pensamientos 
          </h5>

        {[...Array(3)].map((element,indexSelect)=>(
              <Form.Select className="mb-4 mt-3" name={`select_pensamientos_${indexSelect}`} onChange={handleChange}>
                <option value="-1" >Seleccciona una opcion</option>
              {seccion2.ejercicios[activityIndex].pensamientos.map((sensacion,sensacionindex)=>(
                <>
                <option value = {sensacionindex} key={`${seccion2.ejercicios[activityIndex].name}-select_acciones_${indexSelect}-${sensacionindex}`}>{sensacion.option}</option>
                </>
              ))}  
              </Form.Select> 
            ))}

        </div>
        <div className="col-sm">
          <h5 style={{ color: "#4cbeff" }} className="text-center">
           <FontAwesomeIcon icon={faLocationCrosshairs} />Acciones
          </h5>

          {[...Array(3)].map((element,indexSelect)=>(
              <Form.Select className="mb-4 mt-3" name={`select_acciones_${indexSelect}`} onChange={handleChange}>
                <option value="-1">Seleccciona una opcion</option>
              {seccion2.ejercicios[activityIndex].acciones.map((sensacion,sensacionindex)=>(
                <>
                <option value = {sensacionindex} key={`${seccion2.ejercicios[activityIndex].name}-select_acciones_${indexSelect}-${sensacionindex}`}>{sensacion.option}</option>
                </>
              ))}  
              </Form.Select> 
            ))}
        </div>
        <Button variant="info" size="lg" className="my-3" style={{color:"white",backgroundColor:"#4cbeff"}} onClick={handleSubmit} >
          Submit
        </Button>
        </div>

    </div>
  );
}

export default IdentificarEmocionesPart2;
