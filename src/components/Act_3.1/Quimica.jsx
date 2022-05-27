import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { FaArrowRight, FaClipboardCheck, FaPaperPlane } from 'react-icons/fa'

import ganso_elegante from "../../assets/img/ganso/ganso_elegante.png"
import ganso_leyendo from "../../assets/img/ganso/ganso_leyendo.png"
import ganso_celular from "../../assets/img/ganso/ganso_celular.png"

import situacion1 from "../../assets/img/situaciones/situacion_1.png"
import situacion2 from "../../assets/img/situaciones/situacion_2.png"

import situacion3 from "../../assets/img/situaciones/situacion_3.png"

import ReactSpeedometer from "react-d3-speedometer"
import * as Yup from 'yup'

const Quimica = () => {
  const [retroPrimera, setRetroPrimera] = useState(null)
  const [retroSegunda, setRetroSegunda] = useState(null)
  const [retroTercera, setRetroTercera] = useState(null)
  const [validate, setValidate] = useState(false);
  const [emociones, setEmociones] = useState(null);
  const [acciones, setAcciones] = useState(null);




  const Schema = Yup.object().shape({

    Emocion1: Yup.string()
      .required('Es necesario escojer dos emociones'),
    Emocion12: Yup.string()
      .required('Es necesario escojer dos emociones'),
    Nivel1: Yup.string()
      .required('Es necesario escojer dos niveles'),
    Nivel12: Yup.string()
      .required('Es necesario escojer dos niveles'),
    Respuesta1: Yup.string().min(2, 'Demasiado corto')
      .max(50, 'Demasiado largo')
      .required('Es necesario llenar esta información'),
    Emocion2: Yup.string()
      .required('Es necesario llenar esta información'),
    Nivel2: Yup.string()
      .required('Es necesario llenar esta información'),
    Accion2: Yup.string()
      .required('Es necesario llenar esta información'),
    Respuesta2: Yup.string().min(2, 'Demasiado corto')
      .max(50, 'Demasiado largo')
      .required('Es necesario llenar esta información'),
    Emocion3: Yup.string()
      .required('Es necesario llenar esta información'),
    Nivel3: Yup.string()
      .required('Es necesario llenar esta información'),
    Respuesta3: Yup.string().min(2, 'Demasiado corto')
      .max(50, 'Demasiado largo')
      .required('Es necesario llenar esta información'),
  })


  const handleBtnClickSend = () => {
    setValidate(true);
  }
  const handleOnChange = () => {
    if (validate)
      setValidate(false);
  }

  const getEmociones = async () => {
    const url = 'http://localhost:8000/api/definiciones/'
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
  const getNivel = (nivel) => {
    if (nivel == "alto") return 166
    if (nivel == "medio") return 500
    if (nivel == "bajo") return 832
    return 0

  }

  useEffect(async () => {
    // let response = await getEmociones()
    // console.log(response)
    // if (response !== null) {
    //   setEmociones(response)
    // }
  }, [])
  const color = '#fc8890'
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <img
              style={{ width: '150px', height: '150px' }}
              className="card-img-left flex-auto d-block "
              src={ganso_celular}
            />
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
              <h5 className="card-title">Actividad 3.1</h5>
              <p className="card-text">
                ¡Ya tenemos las bases para la identificación de las emociones y su comprensión a partir de darles nombre de acuerdo a lo que vivimos! Ahora hay que analizar cómo nos impactan en nuestro día a día. ¿Las emociones en determinados niveles pueden influir en nuestras acciones? ¡Claro que sí! Y es justo lo que nos pondrá a pensar el siguiente ejercicio.
              </p>
              <p className="card-text">
                A continuación, veras un cuadro describiendo una situación. El objetivo del ejercicio es que selecciones de la lista de emociones, las mismas que ya nombraste, cual consideras que podrían ayudarte en esa situación. Puede ser una o dos emociones máximo que elijas, pero, aquí un punto importante: debajo de esto debes indicar en qué nivel consideras que podría ayudar. No es lo mismo a que tengas ira en un nivel bajo a un nivel alto. Luego, escribe brevemente porque crees que esa emoción o emociones podrían ayudar. ¡Adelante!
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
              Tip importante:
            </h5>

            <p>
              Cada ejercicio te indicara si es así si debes usar una o dos emociones.
            </p>
          </div>
        </div>
      </div>







      <Formik
        initialValues={{
          Emocion1: '',
          Emocion12: '',
          Nivel1: '',
          Nivel12: '',
          Respuesta1: '',
          Emocion2: '',
          Nivel2: '',
          Respuesta2: '',
          Emocion3: '',
          Nivel3: '',
          Accion3: '',
          Respuesta3: '',
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >


        {({ errors, values, touched, handleChange, setFieldValue }) => (
          <Form>

            <div className="row m-4">

              <div className="col">
                <div className="row">
                  <div className="col-7 my-auto my-auto">
                    <div className="d-flex align-middle">
                      <img
                        style={{ width: "100%" }}
                        className="card-img-left  justify-content-center align-self-center "
                        src={situacion1}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row text-center my-3 align-items-center">
                      <b>Coloca las emociones</b>
                    </div>

                    <div className="row text-center align-items-center">
                      <div className='col-md-6 mb-1 mb-md-0' >
                        <div>
                          <Field as='select' name="Emocion1" className="form-select" value={values.Emocion1 || ''}
                            onChange={handleChange}
                          >
                            <option value="" disabled>Escoje una emocion</option>

                            {emociones && emociones.map(({ id, emocion }, i) =>

                              <option key={{ id }} value={{ id }}>{{ emocion }}</option>

                            )}
                          </Field>
                          {errors.Emocion1 && touched.Emocion1
                            ? (
                              <div
                                style={{ color: 'red' }}
                              >
                                {errors.Emocion1}
                              </div>
                            )
                            : null}
                        </div>
                      </div>
                      <div className='col-md-6 mb-1 mb-md-0' >
                        <div>
                          <Field name="Emocion12" as="select" className="form-select" value={values.Emocion12 || ''}
                            onChange={handleChange}
                          >
                            <option value="" disabled>Escoje una emocion</option>

                            {emociones && emociones.map(({ id, emocion }, i) =>

                              <option key={{ id }} value={{ id }}>{{ emocion }}</option>

                            )}
                          </Field>
                          {errors.Emocion12 && touched.Emocion12
                            ? (
                              <div
                                style={{ color: 'red' }}
                              >
                                {errors.Emocion12}
                              </div>
                            )
                            : null}
                        </div>
                      </div>

                    </div>

                    <div className="row text-center mt-3 align-items-center">
                      <b>*Se requieren dos Emociones</b>
                    </div>


                    <div className="row text-center align-items-center">
                      <div className='col-md-6 mb-md-0' >
                        <ReactSpeedometer
                          width={200}
                          height={160}
                          needleHeightRatio={0.7}
                          value={getNivel(values.Nivel1)}
                          segments={3}
                          segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                          currentValueText={"Selecciona un nivel"}
                          maxSegmentLabels={0}
                          ringWidth={47}
                          needleTransitionDuration={1500}
                          needleTransition="easeElastic"
                          needleColor={'#333333'}
                          textColor={'#000000'}
                          style={{ marginBottom: '-50px' }}
                        />
                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel1", "alto")} >Alto </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel1", "medio")} >Medio </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel1", "bajo")} >Bajo </Button>
                        </div>
                      </div>
                      <div className='col-md-6 mb-md-0' >
                        <ReactSpeedometer
                          width={200}
                          height={160}
                          needleHeightRatio={0.7}
                          value={getNivel(values.Nivel12)}
                          segments={3}
                          segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                          currentValueText={"Selecciona un nivel"}
                          maxSegmentLabels={0}
                          ringWidth={47}
                          needleTransitionDuration={1500}
                          needleTransition="easeElastic"
                          needleColor={'#333333'}
                          textColor={'#000000'}


                        />

                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel12", "alto")} >Alto </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel12", "medio")} >Medio </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel12", "bajo")} >Bajo </Button>
                        </div>
                      </div>
                    </div>
                    <div className="row text-center align-items-center">
                      <p>¿Porque considera que estas  emociones te serian de ayuda?</p>
                      <Field name="Respuesta1" as="textarea" rows="3" className="form-control" />
                    </div>
                    <div className="row mt-4">
                      <Button name="situacion1" className="mx-auto btn btn-naranja" onClick={handleBtnClickSend} >Guardar </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {retroPrimera && <div>
                  <p>{retroPrimera}</p>
                </div>
                }
              </div>

            </div>

            <div className="row m-4">
              <div className="col">
                <div className="row">
                  <div className="col-7 my-auto">
                    <div className="d-flex align-middle">
                      <img
                        style={{ width: "100%" }}
                        className="card-img-left  justify-content-center align-self-center "
                        src={situacion2}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row text-center my-3 align-items-center">
                      <b>Coloca la emocion</b>
                    </div>

                    <div className="row text-center align-items-center">
                      <div >
                        <Field as='select' name="Emocion2" className="form-select" value={values.Emocion2 || ''}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Escoje una emocion</option>

                          {emociones && emociones.map(({ id, emocion }, i) =>

                            <option key={{ id }} value={{ id }}>{{ emocion }}</option>

                          )}
                        </Field>
                        {errors.Emocion2 && touched.Emocion2
                          ? (
                            <div
                              style={{ color: 'red' }}
                            >
                              {errors.Emocion2}
                            </div>
                          )
                          : null}
                      </div>


                    </div>

                    <div className="row text-center mt-3 align-items-center">
                      <b>*Se requiere una Emocion</b>
                    </div>


                    <div className="row text-center align-items-center">
                      <div className='col' >
                        <ReactSpeedometer
                          width={200}
                          height={160}
                          needleHeightRatio={0.7}
                          value={getNivel(values.Nivel2)}
                          segments={3}
                          segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                          currentValueText={"Selecciona un nivel"}
                          maxSegmentLabels={0}
                          ringWidth={47}
                          needleTransitionDuration={1500}
                          needleTransition="easeElastic"
                          needleColor={'#333333'}
                          textColor={'#000000'}
                        />
                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel2", "alto")} >Alto </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel2", "medio")} >Medio </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel2", "bajo")} >Bajo </Button>
                        </div>
                      </div>


                    </div>
                    <div className="row text-center mt-4 align-items-center">
                      <p>¿Porque considera que estas  emociones te serian de ayuda?</p>
                      <Field name="Respuesta2" as="textarea" rows="3" className="form-control" />
                    </div>
                    <div className="row mt-4">
                      <Button name="situacion2" className="mx-auto btn btn-naranja" onClick={handleBtnClickSend} >Guardar </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {retroSegunda && <div>
                  <p>{retroSegunda}</p>
                </div>
                }
              </div>

            </div>

            <div className='row my-5 text-center'>
              <b>Una pequeña adición: para esta situación es importante que analices que acción complementa la influencia de esa emoción que elijas. ¡Piénsalo bien!</b>
            </div>

            <div className="row m-4">
              <div className="col">
                <div className="row">
                  <div className="col-7 my-auto">
                    <div className="d-flex align-middle">
                      <img
                        style={{ width: "100%" }}
                        className="card-img-left  justify-content-center align-self-center "
                        src={situacion3}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row text-center my-3 align-items-center">
                      <b>Coloca la emocion</b>
                    </div>

                    <div className="row text-center align-items-center">
                      <div >
                        <Field as='select' name="Emocion3" className="form-select" value={values.Emocion3 || ''}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Escoje una emocion</option>

                          {emociones && emociones.map(({ id, emocion }, i) =>

                            <option key={{ id }} value={{ id }}>{{ emocion }}</option>

                          )}
                        </Field>
                        {errors.Emocion3 && touched.Emocion3
                          ? (
                            <div
                              style={{ color: 'red' }}
                            >
                              {errors.Emocion3}
                            </div>
                          )
                          : null}
                      </div>

                    </div>

                    <div className="row text-center mt-3 align-items-center">
                      <b>*Se requiere una Emocion</b>
                    </div>


                    <div className="row text-center align-items-center">
                      <div className='col-md-6 mb-md-0' >
                        <ReactSpeedometer
                          width={200}
                          height={160}
                          needleHeightRatio={0.7}
                          value={getNivel(values.Nivel3)}
                          segments={3}
                          segmentColors={['#77dd77', '#fdfd96', '#ff6961']}
                          currentValueText={"Selecciona un nivel"}
                          maxSegmentLabels={0}
                          ringWidth={47}
                          needleTransitionDuration={1500}
                          needleTransition="easeElastic"
                          needleColor={'#333333'}
                          textColor={'#000000'}
                        />
                        <div style={{ marginTop: '-2em' }} className="mx-auto">
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel3", "alto")} >Alto </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel3", "medio")} >Medio </Button>
                          <Button variant="outline-primary" bsPrefix='btn btn-outline-naranja mx-1' style={{ padding: "5px" }} onClick={() => setFieldValue("Nivel3", "bajo")} >Bajo </Button>
                        </div>

                      </div>
                      <div className='col-md-6 mb-md-0' >
                        <div>
                          <b>¿Qué acción crees que
                            deba acompañar esta emoción?</b>
                          <Field as='select' name="Accion3" className="form-select" value={values.Accion3 || ''}
                            onChange={handleChange}
                          >
                            <option value="" disabled>Escoje una accion</option>

                            {acciones && acciones.map(({ id, accion }, i) =>

                              <option key={{ id }} value={{ id }}>{{ accion }}</option>

                            )}
                          </Field>
                          {errors.Accion3 && touched.Accion3
                            ? (
                              <div
                                style={{ color: 'red' }}
                              >
                                {errors.Accion3}
                              </div>
                            )
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className="row text-center mt-4 align-items-center">
                      <p>¿Porque considera que estas  emociones te serian de ayuda?</p>
                      <Field name="Respuesta3" as="textarea" rows="3" className="form-control" />
                    </div>
                    <div className="row mt-4">
                      <Button name="situacion3" className="mx-auto btn btn-naranja" onClick={handleBtnClickSend} >Guardar </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {retroTercera && <div>
                  <p>{retroTercera}</p>
                </div>
                }
              </div>

            </div >


            <div className="row mt-4 mb-4 text-center">
              <button
                type="submit"
                className="text-white btn btn-info "
              // disabled={!dirty || !isValid}
              >
                Siguiente
              </button>
            </div>

          </Form >
        )}
      </Formik >
    </div >
  )
}

export { Quimica }