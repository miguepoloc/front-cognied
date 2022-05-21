import React, { useEffect, useState } from 'react'
import '../../assets/css/Act4.scss'
// eslint-disable-next-line camelcase
import ganso_lupa_celular from '../../assets/img/ganso/ganso_lupa_celular.png'
import situacion1 from './img/Situacion1.png'
// eslint-disable-next-line camelcase
import { Warning_Alert, Correct_Alert } from '../../helpers/helper_Swal_Alerts'
import { section1, setColorSelect } from '../../helpers/helper_Reg_Emoc_act_1'

const Act4 = () => {
  const color = '#4cbeff'

  useEffect(() => { setColorSelect(color) }, [])

  const [optionIndex, setOptionIndex] = useState(-1)
  const [activityIndex, setActivityIndex] = useState(0)
  const handleButtonOption = () => {
    console.log(section1.activities[activityIndex].correctAnswerIndex)
    if (optionIndex >= 0) {
      if (
        optionIndex ===
                section1.activities[activityIndex].correctAnswerIndex
      ) {
        console.log(
          section1.activities[activityIndex].correctAnswerIndex
        )
        Correct_Alert(undefined, section1.activities[activityIndex].text).then(function () {
          setOptionIndex(-1)
          if (activityIndex + 1 < section1.options.length) {
            setActivityIndex(activityIndex + 1)
          } else {
            console.log('Final.')
          }
        })
      } else {
        Warning_Alert('¿Seguro que es la respuesta?', '¿Porque no intentas otra vez?')
      }
    }
  }

  return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
                        <img
                            style={{ width: '150px', height: '150px' }}
                            className="card-img-left flex-auto d-block "
                            // eslint-disable-next-line camelcase
                            src={ganso_lupa_celular}
                        />
                        <div className="card-body d-flex flex-column align-items-start justify-content-center">
                            <h5 className="card-title">Actividad 4.1</h5>
                            <p className="card-text">
                                Ahora que identificamos como esas emociones pueden impactarnos en nuestro día a día,
                                es tiempo de reconocer lo que hacemos nosotros para manejarlas. Hablamos sobre que implica
                                la gestión emocional y todo ese conjunto de perspectivas importantes. ¡Pero es tiempo de
                                ponerlo en práctica!
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
                            {/* {section1.activities[activityIndex].name} */}
                            Ejercicio 1
                        </h5>

                        <p>
                            A continuación, veras una serie de situaciones que podrían ocurrirte.
                            Ponte en el papel y responde en los cuadros que crees que sentirías en esa
                            situación y qué harías para manejarlo y darle clic al botón de cada línea a
                            medida que lo vas completando. ¡Nombre del ganso te ira dando unos tips a medida
                            que vayas respondiendo!¡Adelante!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm mb-4"
                        style={{ display: 'flex', alignItems: 'center' }}

                    >
                        <img
                            style={{ width: '100%' }}
                            className="card-img-left flex-auto d-block mx-auto"
                            src={situacion1}
                        />
                    </div>
                    <div className="col-sm mb-4">

                        <div
                            className="card-header  d-flex align-items-center"
                            style={{ backgroundColor: color }}
                        >
                            <h5 className="my-0 font-weight-normal text-white centrado">
                                ¿Qué crees que sentirías en esa situación?
                            </h5>
                        </div>
                        <div className="border shadow w-100 card-body float-left pt-0">
                            <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div
                            className="card-header d-flex align-items-center centrado"
                            style={{ backgroundColor: color, textAlign: 'center' }}
                        >
                            <h5 className="my-0 font-weight-normal text-white ">
                                ¿Qué emoción crees que expresa?
                            </h5>
                        </div>
                        <div className="border shadow w-100 card-body float-left pt-0">
                            <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    <div className="mt-4 mb-4 text-center">
                        <button
                            type="button"
                            className="text-white btn btn-info "
                            disabled={optionIndex === -1}
                            onClick={handleButtonOption}
                        >
                            Submit
                        </button>
                    </div>
                }
            </div>

        </div>
  )
}

export default Act4
