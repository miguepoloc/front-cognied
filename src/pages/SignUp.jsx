import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory, Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/Brainy.svg'
import Ola from '../assets/img/wave.png'
import Logo from '../assets/img/logo9.svg'

const SignUpForm = () => {
  const history = useHistory()

  const { setAuthState } = useContext(AuthContext)
  const [messLogin, setMessLogin] = useState('')

  return (
    <>
      <img src={Ola} id="Ola" alt="" className="wave" />
      <div className="container-login">
        <div className="img">
          <img src={Cel} id="Cel" alt="" />
        </div>
        <div className="login-container">

          <Formik
            initialValues={{
              document: '',
              email: '',
              password: ''
            }}
            onSubmit={async (values) => {
              try {
                const respuesta = await Axios({
                  method: 'post',
                  url: `${process.env.REACT_APP_API_URL}/accounts/login`,
                  data: { user: { ...values } }
                })

                const { data } = respuesta
                setAuthState(data)
                history.push('/')
              } catch (error) {
                setMessLogin({ data: { message: error.response.data[0] } })
              }
            }}
            validationSchema={Yup.object().shape({
              document: Yup.number().required('Documento requerido'),
              email: Yup.number().required('Correo requerido'),
              password: Yup.string().required(
                'No se ha introducido una contraseña'
              )
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
              } = props

              return (
                <Form onSubmit={handleSubmit}>

                  <img src={Logo} id="Icono" alt="" className="avatar" />
                  <h2>Bienvenido</h2>

                  <div className="input-div my-0">
                    <div className="i">
                      <i className="fas fa-user"></i>
                    </div>
                    <div>
                      <input
                        id="document"
                        type="Text"
                        value={values.document}
                        onChange={(e) => {
                          handleChange(e)
                          setMessLogin(null)
                        }}
                        onBlur={handleBlur}
                        placeholder="Documento de identidad"
                        className={'input'}
                      />

                    </div>
                  </div>
                  {errors.document && touched.document && (
                    <div className="input-feedback">{errors.document}</div>
                  )}

                  <div className="input-div my-0">
                    <div className="i">
                    <i className="fa-solid fa-square-envelope"></i>
                    </div>
                    <div>
                      <input
                        id="email"
                        type="Text"
                        value={values.email}
                        onChange={(e) => {
                          handleChange(e)
                          setMessLogin(null)
                        }}
                        onBlur={handleBlur}
                        placeholder="Correo electrónico"
                        className={'input'}
                      />

                    </div>
                  </div>
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}

                  <div className="input-div my-0">
                    <div className="i">
                      <i className="fas fa-user"></i>
                    </div>
                    <div>
                      <input
                        id="password"
                        type="password"
                        value={values.password}
                        placeholder="Contraseña"
                        onChange={(e) => {
                          handleChange(e)
                          setMessLogin(null)
                        }}
                        onBlur={handleBlur}
                        className={'input'}
                      />

                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                  {messLogin?.data && (
                    <div className="input-feedback">
                      {messLogin?.data?.message}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary btn-block">
                    Crear usuario
                  </button>{' '}
                </Form>
              )
            }}
          </Formik>

        </div>
      </div>
    </>
  )
}

export default SignUpForm
