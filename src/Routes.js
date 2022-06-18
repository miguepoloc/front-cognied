import React, { lazy, Suspense, useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Loading } from './components/Loading'
import { AuthContext } from './context/AuthContext'
import ModuloAutodiagnostico from './pages/ModuloAutodiagnostico'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const Login = lazy(() => import('./pages/Login'))
const PageAuth = lazy(() => import('./pages/pageAuth'))
const PageAdmin = lazy(() => import('./pages/pageAdmin'))
const PageNotFound = lazy(() => import('./pages/pageNotFound'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Login2 = lazy(() => import('./pages/Login2'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const ModuloEmocionalCapsula = lazy(() => import('./pages/ModuloEmocional'))

const LoadingFallback = () => <Loading />

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
            <Redirect to="/login" />)
      }
    />
  )
}

const LoginRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext)
  console.log(auth.isAuthenticated())
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated()
          ? (<Redirect to="/dashboard" />)
          : (children)
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

        <LoginRoute path="/login">
          <Login />
        </LoginRoute>

        <LoginRoute path="/sign-up">
          <SignUp />
        </LoginRoute>

        <LoginRoute path="/login2">
          <Login2 />
        </LoginRoute>

        <AuthenticatedRoute path="/dashboard">
          <Dashboard />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/autodiagnostico">
          <ModuloAutodiagnostico />
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/emocional:slug">
          <ModuloEmocionalCapsula />
        </AuthenticatedRoute>

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
)

export default AppRoutes
