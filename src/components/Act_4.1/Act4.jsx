import React, { useEffect, useState } from 'react'
import '../../assets/css/Act4.scss'
// eslint-disable-next-line camelcase
import ganso_lupa_celular from '../../assets/img/ganso/ganso_lupa_celular.png'
import situacion1 from './img/Situacion1.png'
// eslint-disable-next-line camelcase
import { Warning_Alert, Correct_Alert, RetroalimentacionAlert } from '../../helpers/helper_Swal_Alerts'
import { section4, setColorSelect } from '../../helpers/helper_Reg_Emoc_act_4'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Schema = Yup.object().shape({
  Texto1: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Es necesario llenar esta información'),
  Texto2: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Es necesario llenar esta información')
})

const Act4 = () => {
  const cantidad = section4.activities.length
  console.log(cantidad)
  const color = '#4cbeff'

  useEffect(() => { setColorSelect(color) }, [])

  const [activityIndex, setActivityIndex] = useState(0)
  const [Texto1, setTexto1] = useState('')
  const [Texto2, setTexto2] = useState('')
  const handleButtonOption = () => {
    RetroalimentacionAlert(undefined, section4.activities[activityIndex].text).then(function () {
      if (activityIndex + 1 < cantidad) {
        setTexto1('')
        setTexto2('')
        setActivityIndex(activityIndex + 1)
      } else {
        console.log('Final')
      }
    })
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
                            {section4.activities[activityIndex].name}
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
                <Formik
                    initialValues={{
                      Texto1: Texto1,
                      Texto2: Texto2
                    }}
                    validationSchema={Schema}
                    onSubmit={(values, { resetForm }) => {
                      console.log(values)
                      resetForm()
                    }}
                >
                    {({ errors, touched, isValid, dirty }) => (
                        <Form>
                            <div className="row">
                                <div className="col-sm mb-4"
                                    style={{ display: 'flex', alignItems: 'center' }}

                                >
                                    <img
                                        style={{ width: '100%' }}
                                        className="card-img-left flex-auto d-block mx-auto"
                                        src={section4.activities[activityIndex].imagen}
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
                                            <Field name="Texto1" as="textarea" rows="3" />
                                            {errors.Texto1 && touched.Texto1
                                              ? (
                                                    <div
                                                        style={{ color: 'red' }}
                                                    >
                                                        {errors.Texto1}
                                                    </div>
                                                )
                                              : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div
                                        className="card-header  d-flex align-items-center"
                                        style={{ backgroundColor: color }}
                                    >
                                        <h5 className="my-0 font-weight-normal text-white centrado">
                                            ¿Qué emoción crees que expresa?
                                        </h5>
                                    </div>
                                    <div className="border shadow w-100 card-body float-left pt-0">
                                        <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>
                                            <Field name="Texto2" as="textarea" rows="3" />
                                            {errors.Texto2 && touched.Texto2
                                              ? (
                                                    <div
                                                        style={{ color: 'red' }}
                                                    >
                                                        {errors.Texto2}
                                                    </div>
                                                )
                                              : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                <div className="mt-4 mb-4 text-center">
                                    <button
                                        type="submit"
                                        className="text-white btn btn-info "
                                        onClick={handleButtonOption}
                                        disabled={!dirty || !isValid}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            }
                        </Form>
                    )}

                </Formik>
            </div>

        </div>
  )
}

export default Act4
