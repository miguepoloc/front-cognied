import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles, faBolt,faBrain, faLocationCrosshairs, faPencil, faSquarePen } from '@fortawesome/free-solid-svg-icons'
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

  const [optionIndex, setOptionIndex] = useState(-1);
  const [activityIndex, setActivityIndex] = useState(0)

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
            <p><hr/>A continuación, para cada emoción, selecciona las sensaciones, pensamientos y acciones que crees que pueden asociarse a cada una de estas. ¡Usa cada uno de los botones de la columna que corresponda y elige las opciones que creas correctas! Para algunos casos, no será necesario que indiques acciones.
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



      <div className="row mb-4 text-center"> 
          <div className="text-center">
            <img className=" justify-content-center align-self-center" src={asco} alt="" style={{ width: "50%"}}/>
          </div>
          <div className="d-flex justify-content-center">
          <div className="card px-4  py-1 mt-4 mb-2 text-center w-75">
            <div className="card-body">
               <p className="card-text">
               Cuando experimentas asco, ¿cómo has sentido que lo expresas?</p>
              </div>
          </div>
          </div>
      </div>

      <div className="row my-4">
        <div className="col-sm">
          <h5 style={{ color: "#4cbeff" }} className="text-center">
          <FontAwesomeIcon icon={faHandSparkles} /> Sensaciones
          </h5>

          <Form.Select className="mb-4 mt-3">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="my-4">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="my-4">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

        </div>
        <div className="col-sm">
          <h5 style={{ color: "#4cbeff" }}  className="text-center">
          <FontAwesomeIcon icon={faBrain} /> Pensamientos 
          </h5>

          <Form.Select className="mb-4 mt-3">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="my-4">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="my-4">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

        </div>
        <div className="col-sm">
          <h5 style={{ color: "#4cbeff" }} className="text-center">
           <FontAwesomeIcon icon={faLocationCrosshairs} />Acciones
          </h5>

         <Form.Select className="mb-4 mt-3">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="my-4">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Select className="my-4">
            <option>Seleccciona una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <Button variant="info" size="lg" style={{color:"white",backgroundColor:"#4cbeff"}}>
          Submit
        </Button>
        </div>

    </div>
  );
}

export default IdentificarEmocionesPart2;
