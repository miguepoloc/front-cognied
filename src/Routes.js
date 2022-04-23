import React, { lazy, Suspense, useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

import Capsula1 from './assets/img/modulo_emocional/Capsula_1.png'
import Capsula2 from './assets/img/modulo_emocional/Capsula_2.png'
import Capsula3 from './assets/img/modulo_emocional/Capsula_3.png'
import Capsula4 from './assets/img/modulo_emocional/Capsula_4.png'
import Capsula5 from './assets/img/modulo_emocional/Capsula_5.png'
import Capsula6 from './assets/img/modulo_emocional/Capsula_6.png'
import Capsula7 from './assets/img/modulo_emocional/Capsula_7.png'
import Capsula8 from './assets/img/modulo_emocional/Capsula_8.png'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const Login = lazy(() => import('./pages/Login'))
const PageAuth = lazy(() => import('./pages/pageAuth'))
const PageAdmin = lazy(() => import('./pages/pageAdmin'))
const PageNotFound = lazy(() => import('./pages/pageNotFound'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const ModuloEmocionalCapsula = lazy(() => import('./pages/ModuloEmocionalCapsula'))

const LoadingFallback = () => <div>Loading...</div>

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext)
  console.log(auth.isAuthenticated())
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated()
          ? (children)
          : (
            <Redirect to="/" />)
      }
    />
  )
}

const AdminRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() && auth.isAdmin()
          ? (
            <div>{children}</div>
            )
          : (
            <Redirect to="/" />
            )
      }
    />
  )
}

const AppRoutes = () => (
  <>
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route exact path="/">
          <LandingPage style="onlyLogo" />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/emocionalcap1">
          <ModuloEmocionalCapsula capsula={Capsula1} nombrecapsula={'Cápsula 1'} />
        </Route>

        <Route exact path="/emocionalcap2">
          <ModuloEmocionalCapsula capsula={Capsula2} nombrecapsula={'Cápsula 2'} />
        </Route>

        <Route exact path="/emocionalcap3">
          <ModuloEmocionalCapsula capsula={Capsula3} nombrecapsula={'Cápsula 3'} />
        </Route>

        <Route exact path="/emocionalcap4">
          <ModuloEmocionalCapsula capsula={Capsula4} nombrecapsula={'Cápsula 4'} />
        </Route>

        <Route exact path="/emocionalcap5">
          <ModuloEmocionalCapsula capsula={Capsula5} nombrecapsula={'Cápsula 5'} />
        </Route>

        <Route exact path="/emocionalcap6">
          <ModuloEmocionalCapsula capsula={Capsula6} nombrecapsula={'Cápsula 6'} />
        </Route>

        <Route exact path="/emocionalcap7">
          <ModuloEmocionalCapsula capsula={Capsula7} nombrecapsula={'Cápsula 7'} />
        </Route>

        <Route exact path="/emocionalcap8">
          <ModuloEmocionalCapsula capsula={Capsula8} nombrecapsula={'Cápsula 8'} />
        </Route>

        <AuthenticatedRoute path="/auth">
          <PageAuth />
        </AuthenticatedRoute>

        <AdminRoute path="/admin">
          <PageAdmin />
        </AdminRoute>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </>
);

export default AppRoutes
