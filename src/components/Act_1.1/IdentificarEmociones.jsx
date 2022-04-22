import React, { useEffect, useState } from "react";
import "../../assets/css/Surveys.scss";
import Answer from "../Surveys/Answer";
import swal from "sweetalert2";
import pato from "./img/pato.jpg"

const IdentificarEmociones = () => {
    window.Swal = swal;
  /*
    •	Sorpresa.
    •	Asco
    •	Miedo
    •	Alegría
    •	Tristeza
    •	Ira
 */
  const color = "#4cbeff";
  const root = document.documentElement;
  root.style.setProperty("--colorCheck", color);
  const [optionIndex, setOptionIndex] = useState(-1);
  const [activityIndex, setActivityIndex] = useState(0)
  const section1 = {
    name: "Seccion1",
    options: ["Sorpresa", "Asco", "Miedo", "Alegría", "Tristeza", "Ira"],
    activities: [
      {
        name: "Actividad 1",
        correctAnswerIndex: 1,
        correctAnswerText: "Asco",
        url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wOC8yNS8yMS80NC9zaG9ja2VkLTI2ODE0ODhfOTYwXzcyMC5qcGdfKG5vX3ByZXZpZXdfNClfKG5vcD0xMik~`,
        text: `El asco comprende un rechazo o repugnancia hacia algo desagradable o repugnante. Es una respuesta emocional cuya función es prepararte ante el rechazo a situaciones (ya sea físicas, psicológicas u otras) que podrían ser dañinas, dirigiendo la acción hacia el alejamiento de lo que lo provoca. Principalmente potencia los hábitos saludables <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
      },
      {
        name: "Actividad 2",
        correctAnswerIndex: 2,
        correctAnswerText: "Miedo",
        url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNC8wNC8wNS8xMS8wNi9wZW9wbGUtMzE0NDgxXzk2MF83MjAuanBnXyhub19wcmV2aWV3XzQpXyhub3A9MTUp`,
        text: `El miedo implica un estado emocional producido por un peligro presente e inminente, que tiende a estar muy ligada al factor que lo genera. Su función está orientada a la adaptación, avisándote de un riesgo vital, facilitando de este modo respuestas de escape o evitación. Su motivación corresponde más a la supervivencia <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
      },
      {
        name: "Actividad 3",
        correctAnswerIndex: 4,
        correctAnswerText: "Tristeza",
        url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wNy8wMS8yMi8zNC9wZW9wbGUtMTQ5MjA1Ml85NjBfNzIwLmpwZ18obm9fcHJldmlld180KV8obm9wPTE1KQ~~`,
        text: `La tristeza comprende un sentimiento negativo producto de una bajada en el estado de ánimo, acompañada de una reducción de tu actividad en cuanto a pensamientos y acciones. Es una respuesta emocional que te induce a funcionar lentamente a nivel general, buscando ahorrar energía y permitiendo concentrar tu atención en ti, promoviendo la reflexión de situaciones y aspectos que antes podrías haber omitido <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
      },
      {
        name: "Actividad 4",
        correctAnswerIndex: 5,
        correctAnswerText: "Ira",
        url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wMS8xOS8wNy8zNS9zdHJlbmd0aC0xMTQ4MDI5Xzk2MF83MjAuanBnXyhub19wcmV2aWV3XzQpXyhub3A9MjAp`,
        text: `La ira comprende un sentimiento vigorizador que aparece cuando te ves sometido a situaciones frustrantes o que te resultan increíblemente molestas. Se dice que es vigorizador porque urge a la acción, centrando la atención en el factor que produce la emoción e interrumpiendo los pensamientos que se encuentren en el momento. Es una respuesta emocional que te permite desarrollar rápidamente acciones de defensa o ataque ante situaciones desagradables <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
      },
      {
        name: "Actividad 5",
        correctAnswerIndex: 3,
        correctAnswerText: "Alegría",
        url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wOC8wNS8xNC8yMS9wZW9wbGUtMjU4Mzk0M185NjBfNzIwLmpwZ18obm9fcHJldmlld180KV8obm9wPTIwKQ~~`,
        text: `La alegría comprende un sentimiento positivo producto de conseguir una meta, objetivo o eliminar elementos negativos que influyan. Es una respuesta emocional que te ayuda a regular tus sistemas biológicos y psicológicos disminuyendo factores negativos. También promueve el contacto social <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
      },
      {
        name: "Actividad 6",
        correctAnswerIndex: 0,
        correctAnswerText: "Sorpresa",
        url: `aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxMi8wMi8yOS8xMi8xMi9jdXRlLTE4OTI3Xzk2MF83MjAuanBnXyhub19wcmV2aWV3XzQpXyhub3A9MjUp`,
        text: `La sorpresa es una emoción neutra, es decir, no está orientada hacia una clasificación especifica positiva, negativa, agradable o desagradable. Su función está orientada a prepararte para afrontar situaciones repentinas o inesperadas y lo que venga con ellas, es decir, hace una limpieza general de cualquier cosa que podría distraerte para lo que sea que viene con ese acontecimiento <hr/> <i>(Fernandez-Abascal et al., 2010)</i>.`,
      },
    ],
  };
    const handleButtonOption = ()=>{
      console.log(section1.activities[activityIndex].correctAnswerIndex);
        if(optionIndex >= 0){
            if (
              optionIndex ==
              section1.activities[activityIndex].correctAnswerIndex
            ) {
              console.log(
                section1.activities[activityIndex].correctAnswerIndex
              );
              Swal.fire({
                title: "<strong>¡Correcto!</strong>",
                imageUrl: "https://c.tenor.com/u0TyVuvUCCsAAAAM/pato.gif",
                imageWidth: 200,
                imageHeight: 100,
                imageAlt: "¡Correcto!",
                html: section1.activities[activityIndex].text,
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: true,
                focusConfirm: true,
              }).then(function () {
                setOptionIndex(-1);
                if (activityIndex + 1 < section1.options.length) {
                  setActivityIndex(activityIndex + 1);
                  document.querySelector(
                    `input[name="${section1.activities[activityIndex].name}"]`
                  ).checked = false;
                } else {
                  console.log("Final.");
                }
              });
            } else {
              Swal.fire({
                title: "¿Seguro que es la respuesta?",
                imageUrl:
                  "https://c.tenor.com/aUQTBbOvlnwAAAAC/ay-mijo-no-te-preocupes-finn.gif",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "¡Respuesta equivocada!",
                html: "¿Porque no intentas otra vez?",
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: true,
                focusConfirm: true,
              });
            }
        }
        
    }    
    
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <img
              style={{ width: "150px", height: "150px" }}
              className="card-img-left flex-auto d-none d-md-block "
              src={pato}
            />
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
              <h5 className="card-title">Actividad 1.1</h5>
              <p className="card-text">
                Para empezar a entrenar nuestra gestión emocional, es importante
                empezar por el paso más básico: identificar una expresión
                emocional. Dirás: ¿quién no sabe identificar una emoción? Pues
                ocurre que muchas veces esto no ocurre tan fácilmente para
                todos.
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
              {section1.activities[activityIndex].name}
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
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <iframe
            style="width: 100%; height: 416px; border-style: solid; border-width: 2px; border-color: #888;"
            allowFullScreen="true"
            src="https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?frm=1&url=${section1.activities[activityIndex].url}"
            title="Jigsaw Puzzle"
          >
            Jigsaw Puzzle
          </iframe>`,
            }}
          ></div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="mb-4">
            <div
              className="card-header  d-flex align-items-center"
              style={{ backgroundColor: color }}
            >
              <h5 className="my-0 font-weight-normal text-white  ">
                ¿Qué emoción crees que expresa?
              </h5>
            </div>
            <div className="border shadow w-100 card-body float-left pt-0">
              <div className="float-left d-flex flex-column">
                {section1.options.map((opcion, index) => {
                  return (
                    <Answer
                      _name={section1.activities[activityIndex].name}
                      _text_answer={opcion}
                      _id={`${section1.name}_${index}`}
                      key={`${section1.name}_${index}`}
                      handleClickAnswer={() => setOptionIndex(index)}
                    />
                  );
                })}
                {
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-white btn btn-info "
                      disabled={optionIndex == -1 ? true : false}
                      onClick={handleButtonOption}
                    >
                      Submit
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentificarEmociones;
