import React, { createContext, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

const FetchContext = createContext()
const { Provider } = FetchContext

const FetchProvider = ({ children }) => {
  
  
  const authContext = useContext(AuthContext)

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })

  authAxios.interceptors.request.use(
    (config) => {
      const { origin } = new URL(config.url)
      const allowedOrigins = ['http://localhost:3001']

      if (allowedOrigins.includes(origin)) {
        config.headers.Authorization = `Bearer ${authContext.authState.token}`
      }

      return config
    },
    (error) => Promise.reject(error)
  )

  authAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = error?.response?.status
      if (code === 401 || code === 403) {
        console.log('error code', code)
      }
      return Promise.reject(error)
    }
  )

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  )
}

export { FetchContext, FetchProvider }
