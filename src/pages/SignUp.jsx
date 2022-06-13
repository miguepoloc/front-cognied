import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form, Field, useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import { FaUser, FaMedkit, FaUniversity, FaUserFriends, FaRegAddressCard, FaIdCardAlt } from 'react-icons/fa'
import { GrMail, GrUserWorker } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { GiAges, GiHealing, GiMedicines } from 'react-icons/gi'
import { IoMaleFemale } from 'react-icons/io5'
import { MdPlace, MdEngineering, MdHearingDisabled, MdDisabledVisible } from 'react-icons/md'
import { BsFillCalendarDateFill, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillMedicineBox } from 'react-icons/ai'

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val)
      }}
    />
  )
}

const Schema = Yup.object().shape({
  document: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  email: Yup.string().email('Correo inválido').required('Requerido'),
  password: Yup.string().required('No se ha introducido una contraseña'),
  nombre: Yup.string().required('Requerido'),
  edad: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  tipo_documento: Yup.string().required('Requerido'),
  sexo: Yup.string().required('Requerido'),
  lugar_nacimiento: Yup.string().required('Requerido'),
  fecha_nacimiento: Yup.date().required('Requerido'),
  estado_civil: Yup.string().required('Requerido'),
  programa: Yup.string().required('Requerido'),
  semestre: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  covid_positivo: Yup.boolean(),
  covid_familiar: Yup.boolean(),
  covid_vacuna: Yup.boolean(),
  covid_tipo_vacuna: Yup.string(),
  covid_dosis: Yup.boolean(),
  discapacidad: Yup.boolean(),
  discapacidad_tipo: Yup.string(),
  telefono: Yup.number().typeError('Debe ser un número')
    .required('Requerido').positive('Debe ser un número positivo').integer('No debe tener puntos'),
  ocupacion: Yup.string().required('Requerido')
})

const SignUpForm = () => {
  const history = useHistory()

  const { setAuthState } = useContext(AuthContext)
  const [messLogin, setMessLogin] = useState('')

  return (
    <>
      <img src={Ola} id="Ola" alt="" className="wave" />
      <div className="container-login">
        <div className="img-login">
          <img src={Cel} id="Cel" alt="" />
        </div>
        <div className="login-container">

          <Formik
            initialValues={{
              document: '1',
              password: 'Contrasena1!',
              email: 'prueba@gmail.com',
              nombre: 'Prueba',
              edad: '20',
              tipo_documento: 'CC',
              sexo: '1',
              lugar_nacimiento: 'Prueba Santa Marta',
              fecha_nacimiento: '1996-08-20',
              estado_civil: '1',
              programa: 'Ing Prueba',
              semestre: '2',
              covid_positivo: false,
              covid_familiar: false,
              covid_vacuna: false,
              covid_tipo_vacuna: '',
              covid_dosis: false,
              discapacidad: false,
              discapacidad_tipo: '',
              telefono: '3003859853',
              ocupacion: 'Contratista'
            }}

            validationSchema={Schema}

            onSubmit={async (values) => {
              console.log(JSON.stringify(values, null, 2))
              try {
                const respuesta = await Axios({
                  method: 'post',
                  url: `${process.env.REACT_APP_API_URL}/accounts/register`,
                  data: values
                })

                const { data } = respuesta
                console.log(data)
                setAuthState(data)
                history.push('/')
              } catch (error) {
                console.log(error.response.data)
                setMessLogin(error.response.data.errors)
              }
            }}
          >

            {({
              touched,
              errors,
              handleSubmit
            }) => (
              <Form onSubmit={handleSubmit} className="form-login">

                <img src={Logo} id="Icono" alt="" className="avatar" />
                <h2>Bienvenido</h2>

                <div className="input-div my-0">
                  <div className="i">
                    <FaUser></FaUser>
                  </div>
                  <div>
                    <Field
                      name="nombre"
                      placeholder="Nombre completo"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.nombre && touched.nombre && (
                  <div className="input-feedback">
                    {errors.nombre}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaIdCardAlt></FaIdCardAlt>
                  </div>
                  <div>
                    <Field
                      name="tipo_documento"
                      className="form-select"
                      as="select"
                    >
                      <option value="" disabled>Tipo de documento</option>
                      <option value="PA">PA</option>
                      <option value="CE">CÉDULA DE EXTRANJERÍA</option>
                      <option value="CC">CÉDULA DE CIUDADANÍA</option>
                      <option value="TI">TARJETA DE IDENTIDAD</option>
                      <option value="RC">REGISTRO CIVIL</option>
                    </Field>
                  </div>
                </div>
                {errors.tipo_documento && touched.tipo_documento && (
                  <div className="input-feedback">
                    {errors.tipo_documento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaRegAddressCard></FaRegAddressCard>
                  </div>
                  <div>
                    <Field
                      name="document"
                      placeholder="Documento de identidad"
                      className={'input'}
                    />
                  </div>
                </div>
                {(errors.document || messLogin.document) && touched.document && (
                  <div className="input-feedback">
                    {errors.document || messLogin?.document[0]}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <GrMail></GrMail>
                  </div>
                  <div>
                    <Field
                      name="email"
                      placeholder="Correo Electrónico"
                      className={'input'}
                    />
                  </div>
                </div>
                {(errors.email || messLogin.email) && touched.email && (
                  <div className="input-feedback">
                    {errors.email || messLogin?.email[0]}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <RiLockPasswordFill></RiLockPasswordFill>
                  </div>
                  <div>
                    <Field
                      name="password"
                      placeholder="Contraseña"
                      className={'input'}
                      type="password"
                    />
                  </div>
                </div>
                {errors.password && touched.password && (
                  <div className="input-feedback">
                    {errors.password}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <GiAges></GiAges>
                  </div>
                  <div>
                    <Field
                      name="edad"
                      placeholder="Edad"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.edad && touched.edad && (
                  <div className="input-feedback">
                    {errors.edad}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <IoMaleFemale></IoMaleFemale>
                  </div>
                  <div>
                    <Field
                      name="sexo"
                      className="form-select"
                      as="select"
                    >
                      <option value="" disabled>Sexo</option>
                      <option value="1">Masculino</option>
                      <option value="2">Femenino</option>
                      <option value="3">Intersex</option>
                    </Field>
                  </div>
                </div>
                {errors.sexo && touched.sexo && (
                  <div className="input-feedback">
                    {errors.sexo}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <MdPlace></MdPlace>
                  </div>
                  <div>
                    <Field
                      name="lugar_nacimiento"
                      placeholder="Lugar de nacimiento"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.lugar_nacimiento && touched.lugar_nacimiento && (
                  <div className="input-feedback">
                    {errors.lugar_nacimiento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <BsFillCalendarDateFill></BsFillCalendarDateFill>
                  </div>
                  <div>
                    Fecha de nacimiento
                    <DatePickerField name="fecha_nacimiento" />
                  </div>
                </div>
                {errors.fecha_nacimiento && touched.fecha_nacimiento && (
                  <div className="input-feedback">
                    {errors.fecha_nacimiento}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaUserFriends></FaUserFriends>
                  </div>
                  <div>
                    <Field
                      name="estado_civil"
                      placeholder="Estado civil"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.estado_civil && touched.estado_civil && (
                  <div className="input-feedback">
                    {errors.estado_civil}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <MdEngineering></MdEngineering>
                  </div>
                  <div>
                    <Field
                      name="programa"
                      placeholder="Programa"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.programa && touched.programa && (
                  <div className="input-feedback">
                    {errors.programa}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <FaUniversity></FaUniversity>
                  </div>
                  <div>
                    <Field
                      name="semestre"
                      placeholder="Semestre"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.semestre && touched.semestre && (
                  <div className="input-feedback">
                    {errors.semestre}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <GiHealing />
                  </div>

                  <div>
                    <p>Positivo</p>
                    <Field
                      name="covid_positivo"
                      placeholder="Positivo pa covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <GiHealing></GiHealing>
                  </div>
                  <div>
                    <p>Familiar Positivo</p>
                    <Field
                      name="covid_familiar"
                      placeholder="Familiar Positivo pa covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <AiFillMedicineBox></AiFillMedicineBox>
                  </div>
                  <div>
                    <p>Vacunado contra covid</p>
                    <Field
                      name="covid_vacuna"
                      placeholder="Vacunado contra covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <FaMedkit></FaMedkit>
                  </div>
                  <div>
                    <Field
                      name="covid_tipo_vacuna"
                      placeholder="Tipo de vacuna covid"
                      className='input'
                    />
                  </div>
                </div>
                {errors.covid_tipo_vacuna && touched.covid_tipo_vacuna && (
                  <div className="input-feedback">
                    {errors.covid_tipo_vacuna}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <GiMedicines></GiMedicines>
                  </div>
                  <div>
                    <p>Dosis completa covid</p>
                    <Field
                      name="covid_dosis"
                      placeholder="Dosis completa contra covid"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <MdHearingDisabled></MdHearingDisabled>
                  </div>
                  <div>
                    <p>Alguna discapacidad</p>
                    <Field
                      name="discapacidad"
                      placeholder="Tiene alguna discapacidad"
                      className='input-check'
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="input-div my-0">
                  <div className="i">
                    <MdDisabledVisible></MdDisabledVisible>
                  </div>
                  <div>
                    <Field
                      name="discapacidad_tipo"
                      placeholder="Tipo de discapacidad"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.discapacidad_tipo && touched.discapacidad_tipo && (
                  <div className="input-feedback">
                    {errors.discapacidad_tipo}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <BsFillTelephoneFill></BsFillTelephoneFill>
                  </div>
                  <div>
                    <Field
                      name="telefono"
                      placeholder="Teléfono"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.telefono && touched.telefono && (
                  <div className="input-feedback">
                    {errors.telefono}
                  </div>
                )}

                <div className="input-div my-0">
                  <div className="i">
                    <GrUserWorker></GrUserWorker>
                  </div>
                  <div>
                    <Field
                      name="ocupacion"
                      placeholder="Ocupación"
                      className={'input'}
                    />
                  </div>
                </div>
                {errors.ocupacion && touched.ocupacion && (
                  <div className="input-feedback">
                    {errors.ocupacion}
                  </div>
                )}
                <button type="submit" className="btn-login btn-primary btn-block">
                  {messLogin ? 'Hubo un error' : 'Registrarse'}
                </button>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}

export default SignUpForm
