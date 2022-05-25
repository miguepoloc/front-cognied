/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import '../../assets/css/Act4.scss'
import ganso_lupa_celular from '../../assets/img/ganso/ganso_lupa_celular.png'
import { RetroalimentacionAlert } from '../../helpers/helper_Swal_Alerts'
import { section4_2, setColorSelect } from '../../helpers/helper_Reg_Emoc_act_4'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const Schema = Yup.object().shape({
  Texto1: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Es necesario llenar esta información'),
  Texto2: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Es necesario llenar esta información'),
  color1: Yup.string()
    .required('Es necesario seleccionar un color'),
  color2: Yup.string()
    .required('Es necesario seleccionar un color'),
  color3: Yup.string()
    .required('Es necesario seleccionar un color'),
  situacion: Yup.string()
    .required('Es necesario seleccionar una situación'),
  emocion: Yup.string()
    .required('Es necesario seleccionar una emoción')
})

const ManejoSemaforo = () => {
  const cantidad = section4_2.activities.length
  console.log(cantidad)
  const color = '#4cbeff'
  const ObjetoColor = {
    rojo: '#ff6961',
    amarillo: '#fdfd96',
    verde: '#77dd77'
  }
  const colorgris = '#f2f1f6'

  useEffect(() => { setColorSelect(color) }, [])

  const [activityIndex, setActivityIndex] = useState(0)

  return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
                        <img
                            style={{ width: '150px', height: '150px' }}
                            className="card-img-left flex-auto d-block "
                            src={ganso_lupa_celular}
                        />
                        <div className="card-body d-flex flex-column align-items-start justify-content-center">
                            <h5 className="card-title">Actividad 4.2</h5>
                            <p className="card-text">
                                Ya empezaste a identificar lo que tu harías, pero ¿puede identificarlo desde otra perspectiva? ¿Recuerdas el semáforo? Íbamos de color en color y hacíamos una comparación con la posibilidad que teníamos en nuestro proceso de gestión emocional. ¡Es momento de verlo reflejado!
                            </p>
                            <p>
                                A continuación, encontrarás las fases del semáforo, aplicadas a una situación. Identifica a que color del semáforo correspondería cada una.  Luego, debes elegir a que situación de las que anteriormente viste crees que corresponde esas descripciones y que emoción crees que está pasando la persona. Finalmente, se te plantea una reflexión importante ¡Adelante!
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
                            {section4_2.activities[activityIndex].name}
                        </h5>

                        <p>
                            Una noche saliendo de clases, en medio de una conversación, discutes en malos términos con un amigo(a) que aprecias. No alcanzas a terminar el tema, porque al salir de la universidad, ves tu bus pasando y sabes que necesitas alcanzarlo. Ahora vas en el bus pensativo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Formik
                    initialValues={{
                      Texto1: '',
                      Texto2: '',
                      color1: '',
                      color2: '',
                      color3: '',
                      situacion: '',
                      emocion: ''
                    }}
                    validationSchema={Schema}
                    onSubmit={(values, { resetForm }) => {
                      console.log(values)
                      RetroalimentacionAlert(undefined, section4_2.activities[activityIndex].text).then(function () {
                        if (activityIndex + 1 < cantidad) {
                          setActivityIndex(activityIndex + 1)
                        } else {
                          console.log('Final')
                        }
                      })
                      resetForm()
                    }}
                >
                    {({ errors, values, touched, handleChange }) => (
                        <Form>
                            <div className="row">
                                <div className="col-sm mb-4">
                                    <div
                                        className="card-header d-flex align-items-center mb-4"
                                        style={{ backgroundColor: ObjetoColor[values.color1] || colorgris, borderRadius: '10px', minHeight: '300px' }}
                                    >
                                        <h5 className="my-auto font-weight-normal centrado">
                                            Empieza a considerar lo que ocurre. Sabe que ahora mismo se encuentra bastante indispuesto y no quiere hacer algo de lo que se arrepienta después. Aprovecha el viaje en el bus para escuchar su música favorita. No quiere pensar en lo ocurrido mientras se sienta así. Considera las experiencias vividas, la relación con esa persona y lo que ocurrió en ese momento
                                        </h5>

                                    </div>

                                </div>
                                <div className="col-sm mb-4">
                                    <div
                                        className="card-header d-flex align-items-center mb-4"
                                        style={{ backgroundColor: ObjetoColor[values.color2] || colorgris, borderRadius: '10px', minHeight: '300px' }}
                                    >
                                        <h5 className="my-auto font-weight-normal centrado">
                                            Nota que su respiración aumenta, su corazón empieza a palpitar muy rápida y sus brazos y manos se tensan. Empieza a pensar: “¿Quién se cree acaso?” “¿Qué le pasa?” “¡Ni sabe que m(&/%&$ esta hablando!”. Un deseo de empujar a la otra persona casi de forma instantánea lo invade sin otra consideración, pero se detiene un momento y reflexiona lo que está sintiendo.
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm mb-4">
                                    <div
                                        className="card-header d-flex align-items-center mb-4"
                                        style={{ backgroundColor: ObjetoColor[values.color3] || colorgris, borderRadius: '10px', minHeight: '300px' }}
                                    >
                                        <h5 className="my-auto font-weight-normal centrado">
                                            Llega a casa y se dispone a comer, descambiarse y recostarse un momento. Con la mente más clara, piensa en lo que ha pasado y entonces le escribe a su amigo.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-4">
                                    <Field name="color1" as="select" className="form-control" value={values.color1 || ''}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Selecciona un color</option>
                                        <option value="rojo">Rojo</option>
                                        <option value="amarillo">Amarillo</option>
                                        <option value="verde">Verde</option>
                                    </Field>
                                    {errors.color1 && touched.color1
                                      ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.color1}
                                            </div>
                                        )
                                      : null}
                                </div>
                                <div className="col-sm mb-4">
                                    <Field name="color2" as="select" className="form-control" value={values.color2 || ''}
                                        onChange={handleChange}>
                                        <option value="" disabled>Selecciona un color</option>
                                        <option value="rojo">Rojo</option>
                                        <option value="amarillo">Amarillo</option>
                                        <option value="verde">Verde</option>
                                    </Field>
                                    {errors.color2 && touched.color2
                                      ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.color2}
                                            </div>
                                        )
                                      : null}
                                </div>
                                <div className="col-sm mb-4">
                                    <Field name="color3"
                                        as="select"
                                        value={values.color3 || ''}
                                        className="form-control"
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Selecciona un color</option>
                                        <option value="rojo">Rojo</option>
                                        <option value="amarillo">Amarillo</option>
                                        <option value="verde">Verde</option>
                                    </Field>
                                    {errors.color3 && touched.color3
                                      ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.color3}
                                            </div>
                                        )
                                      : null}
                                </div>
                            </div>
                            <div className="row  mb-4 mt-2">
                                <div className="col-sm">
                                    <div
                                        className="d-flex align-items-center m-auto"
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        <h5 className="my-0 font-weight-normal centrado">
                                            ¿Que situación crees que pudo causar lo anteriormente expuesto?
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm m-auto ">
                                    <Field
                                        name="situacion"
                                        as="select"
                                        className="form-control"
                                        value={values.situacion || ''}
                                        onChange={handleChange}>
                                        <option value="" key="Prueba" disabled>Selecciona una situacion</option>

                                        {section4_2.activities[activityIndex].situacion.map((situacion, situacionindex) => (
                                            <>
                                                <option value={`situacion${situacionindex}`} key={`Situacion_${situacionindex}`}>{situacion.option}</option>
                                            </>
                                        ))}

                                    </Field>
                                    {errors.situacion && touched.situacion
                                      ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.situacion}
                                            </div>
                                        )
                                      : null}
                                </div>

                                <div className="col-sm">
                                    <div
                                        className="d-flex align-items-center m-auto"
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        <h5 className="my-0 font-weight-normal centrado">
                                            ¿Que emoción crees que esta pasando la persona?
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm m-auto ">
                                    <Field
                                        name="emocion"
                                        as="select"
                                        className="form-control"
                                        value={values.emocion || ''}
                                        onChange={handleChange}>
                                        <option value="" key="Prueba" disabled>Selecciona una emocion</option>

                                        {section4_2.activities[activityIndex].emocion.map((emocion, emocionindex) => (
                                            <>
                                                <option value={`emocion${emocionindex}`} key={`Emocion_${emocionindex}`}>{emocion.option}</option>
                                            </>
                                        ))}

                                    </Field>
                                    {errors.emocion && touched.emocion
                                      ? (
                                            <div
                                                style={{ color: 'red' }}
                                            >
                                                {errors.emocion}
                                            </div>
                                        )
                                      : null}
                                    {values.emocion}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-sm mb-4"
                                    style={{ display: 'flex', alignItems: 'center' }}

                                >
                                    <h5>¿Qué resultados para si mismo y en su ambiente crees que pudo tener la forma como manejo la situación esta persona?</h5>
                                </div>
                                <div className="col-sm mb-4">

                                    <div className="border shadow w-100 float-left pt-0">
                                        <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>

                                            <Field name="Texto1" as="textarea" rows="3" className="form-control" />

                                        </div>
                                    </div>
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
                            <div className="row">
                                <div className="col-sm mb-4"
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <h5>Si hubiera hecho lo que tú, ¿que resultados para si mismo y en su ambiente crees que pudo tener la forma como manejo la situación esta persona ?</h5>
                                </div>
                                <div className="col-sm mb-4">

                                    <div className="border shadow w-100 float-left pt-0">
                                        <div className="float-left d-flex flex-column" key={'AnswerActivity' + activityIndex}>
                                            <Field name="Texto2" as="textarea" rows="3" className="form-control" />
                                        </div>

                                    </div>
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
                            {
                                <div className="mt-4 mb-4 text-center">
                                    <button
                                        type="submit"
                                        className="text-white btn btn-info "
                                    // disabled={!dirty || !isValid}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            }
                        </Form>
                    )}

                </Formik>
            </div>

        </div >
  )
}

export default ManejoSemaforo
