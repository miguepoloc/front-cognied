import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Login.scss'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Schema = Yup.object().shape({
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
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

const EmailRecover = () => {
  const history = useHistory()

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
              Recuperacion de contraseña
            </Typography>
            <Formik
              initialValues={{
                email: ''
              }}

              validationSchema={Schema}

              onSubmit={async (values) => {
                try {
                  const respuesta = await Axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}/accounts/recover`,
                    data: values
                  })

                  const { data } = respuesta
                  console.log('🚀 ~ file: EmailRecover.jsx ~ line 106 ~ onSubmit={ ~ data', data)
                  history.push('/dashboard')
                  alert(JSON.stringify(values, null, 2))
                } catch (error) {
                  setMessLogin({ data: { message: error.response.data.errors } })
                }
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
                    <Card>
                      <CardContent>Ingresa el correo que registraste para recuperar tu contraseña.
                        Si es correcto se enviara un correo con la informacion necesaria para hacer el cambio de la contraseña</CardContent>
                    </Card>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Enviar Correo
                    </Button>
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

export default EmailRecover
