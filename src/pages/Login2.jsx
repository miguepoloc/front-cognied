import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Cel from '../assets/img/pato.svg'
import Ola from '../assets/img/wave.svg'
import Logo from '../assets/img/logo9.svg'
import { FaUser, FaLock } from 'react-icons/fa'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LogoPeque from '../assets/img/logo_peque.svg'

const Schema = Yup.object().shape({
  document: Yup
    .number()
    .typeError('Debe ser un número')
    .required('Documento requerido')
    .positive('Debe ser un número positivo')
    .integer('No debe tener puntos'),
  password: Yup
    .string()
    .required('No se ha introducido una contraseña')
})

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

const Login2 = () => {
  const history = useHistory()

  const { setAuthState } = useContext(AuthContext)
  const [messLogin, setMessLogin] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Bienvenido
            </Typography>
            <Formik
              initialValues={{
                document: '',
                password: ''
              }}

              validationSchema={Schema}

              onSubmit={async (values) => {
                alert(JSON.stringify(values, null, 2))
                // try {
                //   const respuesta = await Axios({
                //     method: 'post',
                //     url: `${process.env.REACT_APP_API_URL}/accounts/login`,
                //     data: values
                //   })

                //   const { data } = respuesta
                //   setAuthState(data)

                //   history.push('/dashboard')
                // } catch (error) {
                //   setMessLogin({ data: { message: error.response.data.errors } })
                // }
              }}
            >

              {
                ({
                  touched,
                  errors,
                  values,
                  handleSubmit,
                  handleChange
                }) => (
                  <Form onSubmit={handleSubmit} className="form-login">
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FaUser
                          style={{ color: '#000000', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }}
                        />
                        <TextField
                          color={touched.password && Boolean(errors.password) ? 'error' : 'primary'}
                          variant="standard"
                          required
                          fullWidth
                          id="document"
                          label="Documento"
                          name="document"
                          autoComplete="document"
                          value={values.document}
                          onChange={handleChange}
                          error={touched.document && Boolean(errors.document)}
                          helperText={touched.document && errors.document}
                        />
                      </Box>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <FaLock
                          style={{ color: '#000000', fontSize: '1.3rem', marginRight: '0.5rem', marginBottom: '6px' }}
                        />
                        <TextField
                          color={touched.password && Boolean(errors.password) ? 'error' : 'primary'}
                          variant="standard"
                          required
                          fullWidth
                          autoComplete="password"
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                        />
                      </Box>
                    </Box>
                    {/* <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    /> */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Iniciar Sesion
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="/recover" variant="body2">
                          Olvide mi Contraseña
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Form>
                )
              }

            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login2
