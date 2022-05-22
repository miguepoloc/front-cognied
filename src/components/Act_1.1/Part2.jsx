import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { FaHandSparkles, FaBolt, FaBrain, FaPencilAlt } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'
import "../../assets/css/Surveys.scss";
import Answer from "../Surveys/Answer";
import swal from "sweetalert2";
import ganso_elegante from "../../assets/img/ganso/ganso_elegante.png"
import ganso_stop from "../../assets/img/ganso/ganso_stop.png"
import Scroll from '../../helpers/helperScroll'
import ButtonLibro from "../Dashboard/ButtonLibro"
import { Warning_Alert, Correct_Alert } from "../../helpers/helper_Swal_Alerts";
import { seccion2, initialOptions, areUniqueValue, areValidValues, areCorrectAnswers } from "../../helpers/helper_Reg_Emoc_act_1";

const Part2 = () => {
  const color = "#4cbeff";
  const [selectOption, setSelectOption] = useState(initialOptions);
  const [activityIndex, setActivityIndex] = useState(0)
  const handleChange = (event) => {
    setSelectOption(() => { return { ...selectOption, [event.target.name]: event.target.value } })
  }

  const handleSubmit = () => {
    let valueSensaciones = [selectOption.select_sensaciones_0, selectOption.select_sensaciones_1, selectOption.select_sensaciones_2];
    let valuePensamientos = [selectOption.select_pensamientos_0, selectOption.select_pensamientos_1, selectOption.select_pensamientos_2];
    let valueAcciones = [selectOption.select_acciones_0, selectOption.select_acciones_1, selectOption.select_acciones_2];
    let SinAcciones = seccion2.ejercicios[activityIndex].SinAcciones;


    /*
      Valido que el usuario haya seleccionado una respuesta por select.
    */
    if (!areValidValues(valueSensaciones)) {
      errorAlert("sensaciones");
      return null;
    }

    if (!areValidValues(valuePensamientos)) {
      errorAlert("pensamientos");
      return null;
    }
    //Si sinacciones es null, entonces valida el lado derecho.
    if (!SinAcciones && !areValidValues(valueAcciones)) {
      errorAlert("acciones");
      return null;
    }

    /*
      Valido que las respuestas tengan diferente indice
    */
    if (!areUniqueValue(valueSensaciones)) {
      errorRepeatedAnswer("sensaciones");
      return null;
    }

    if (!areUniqueValue(valuePensamientos)) {
      errorRepeatedAnswer("pensamientos");
      return null;
    }
    //Si sinacciones es null, entonces valida el lado derecho.
    if (!SinAcciones && !areUniqueValue(valueAcciones)) {
      errorRepeatedAnswer("acciones");
      return null;
    }


    /* 
      Valido que el usuario haya seleccionado las respuestas correctas.
    */
    if (!areCorrectAnswers(valueSensaciones, "sensaciones", activityIndex)) {
      errorAnswer("sensaciones");
      return null;
    }
    if (!areCorrectAnswers(valuePensamientos, "pensamientos", activityIndex)) {
      errorAnswer("pensamientos");
      return null;
    }
    if (!SinAcciones && !areCorrectAnswers(valueAcciones, "acciones", activityIndex)) {
      errorAnswer("acciones");
      return null;
    }

    correctAnswer(seccion2.ejercicios[activityIndex].successMsg).then(() => {
      if (activityIndex + 1 < seccion2.ejercicios.length) {
        restartValuesOption();
        setActivityIndex(activityIndex + 1);
        moveToEjercicio(); //sube el scroll. muy util en dispositivos moviles.
      } else {
        console.log("terminaste crack.")
      }
    }

    )


  }

  const moveToEjercicio = () => {
    Scroll.scroll("ejercicio", true);
  }

  const errorAlert = (seccion) => {
    return Warning_Alert("<h5><b>¿Seguro que no olvidaste hacer algo?</b></h5>",
      `<p>Parece que en la columna <i><b>${seccion}</b></i> no diste respuesta a alguna(s) opcion(es)</p>`)
  }

  const errorAnswer = (seccion) => {
    return Warning_Alert("<h5><b>¿Seguro que no olvidaste hacer algo?</b></h5>",
      `<p>¡Sigue intentando! Una o más de las opciones de la columna  <i><b>${seccion}</b></i> no corresponde tan precisamente a la emoción</p>`)
  }

  const errorRepeatedAnswer = (seccion) => {
    return Warning_Alert("<h5><b>Respuesta repetida</b></h5>",
      `<p>Seleccionaste la misma opcion en la columna  <i><b>${seccion}</b></i>. las respuestas deben ser diferentes.</p>`)
  }


  const correctAnswer = (msg) => {
    return Correct_Alert(undefined, msg)
  }



  const restartValuesOption = () => {
    setSelectOption(() => { return (initialOptions); });
  }





  const SinAcciones = seccion2.ejercicios[activityIndex].SinAcciones;

  return (
    <div className="container">
      <ButtonLibro title={"Glosario"}
        text={`
        <ul class="mb-0">
            <li class="my-1"><i>Aumento de las inhalaciones:</i> aumento de las aspiraciones al respirar. </li>
            <li class="my-1"><i>Frecuencia cardiaca:</i> número de veces que se contrae el corazón en un minuto.</li>
            <li class="my-1"><i>Frecuencia respiratoria:</i> número de veces en respiraciones.</li>
            <li class="my-1"><i>Interrupción puntual:</i> Que se detiene en ese momento por un instante.</li>
            <li class="my-1"><i>Presión sanguínea:</i> tensión de la sangre.</li>
            <li class="my-1"><i>Tensión muscular:</i> rigidez en algún o varios grupos de músculos.</li>
        </ul>
            `}
      ></ButtonLibro>
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
              <hr />
              <p>A continuación, para cada emoción, selecciona las sensaciones, pensamientos y acciones que crees que pueden asociarse a cada una de estas. ¡Usa cada uno de los botones de la columna que corresponda y elige las opciones que creas correctas! Para algunos casos, no será necesario que indiques acciones.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div
            className="callout mb-5  h-md-250 "
            style={{ borderLeftColor: color }}
          >
            <h5 style={{ color: color }}>
              <FaBolt /> Tip
            </h5>

            <p>
              En la columna de pensamientos puede que encuentres expresiones como “¡Ugh!”. Trata de identificar si estas pueden relacionarse a la emoción. También tienes un pequeño glosario arriba por si tienes alguna duda.
            </p>
          </div>
        </div>
      </div>



      <div className="row mb-4 text-center" id="ejercicio">
        <p className="text-strong" style={{ color: color }}> <FaPencilAlt /> Ejercicio {activityIndex + 1} de {seccion2.ejercicios.length} </p>
        <div className="text-center">
          <img className=" justify-content-center align-self-center" src={seccion2.ejercicios[activityIndex].image} alt="" style={{ width: "50%" }} />
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

      <div className="row my-4 align-items-center">
        <div className="col-sm-6 col-lg-4">
          <h5 style={{ color: color }} className="text-center">
            <FaHandSparkles /> Sensaciones
          </h5>

          {[...Array(3)].map((element, indexSelect) => (
            <Form.Select className="mb-4 mt-3" name={`select_sensaciones_${indexSelect}`} onChange={handleChange}>
              <option value="-1" disabled selected>Seleccciona una opcion</option>
              {seccion2.ejercicios[activityIndex].sensaciones.map((sensacion, sensacionindex) => (
                <>
                  <option value={sensacionindex} key={`${seccion2.ejercicios[activityIndex].name}-select_acciones_${indexSelect}-${sensacionindex}`}>{sensacion.option}</option>
                </>
              ))}
            </Form.Select>

          ))}

        </div>
        <div className="col-sm-6 col-lg-4">
          <h5 style={{ color: color }} className="text-center">
            <FaBrain /> Pensamientos
          </h5>

          {[...Array(3)].map((element, indexSelect) => (
            <Form.Select className="mb-4 mt-3" name={`select_pensamientos_${indexSelect}`} onChange={handleChange}>
              <option value="-1" >Seleccciona una opcion</option>
              {seccion2.ejercicios[activityIndex].pensamientos.map((sensacion, sensacionindex) => (
                <>
                  <option value={sensacionindex} key={`${seccion2.ejercicios[activityIndex].name}-select_acciones_${indexSelect}-${sensacionindex}`}>{sensacion.option}</option>
                </>
              ))}
            </Form.Select>
          ))}

        </div>
        <div className="col-sm-12 col-lg-4">
          {SinAcciones ? (<>
            <p className="text-justify">{seccion2.ejercicios[activityIndex].SinAcciones}</p>
          </>) : (<>
            <h5 style={{ color: color }} className="text-center">
              <BiCurrentLocation />Acciones
            </h5>

            {[...Array(3)].map((element, indexSelect) => (
              <Form.Select className="mb-4 mt-3" name={`select_acciones_${indexSelect}`} onChange={handleChange}>
                <option value="-1">Seleccciona una opcion</option>
                {seccion2.ejercicios[activityIndex].acciones.map((sensacion, sensacionindex) => (
                  <>
                    <option value={sensacionindex} key={`${seccion2.ejercicios[activityIndex].name}-select_acciones_${indexSelect}-${sensacionindex}`}>{sensacion.option}</option>
                  </>
                ))}
              </Form.Select>
            ))}</>)
          }

        </div>
        <Button variant="info" size="lg" className="my-3" style={{ color: "white", backgroundColor: color }} onClick={handleSubmit} >
          Submit
        </Button>
      </div>

    </div>
  );
}

export default Part2;
