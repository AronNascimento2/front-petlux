import './App.css'
import { ToastContainer } from 'react-toastify'
import Toasts from './constants/GlobalStyles/toasts'
import { ThemeProvider } from 'styled-components'
import theme from './constants/themeDefault'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './Routes/AppRouter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Components/Pages/Login'
import { Home } from './Components/Pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toasts />
      <BrowserRouter basename="/front-petlux">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>{' '}
      <AppRouter />
      <ToastContainer theme="colored" autoClose={1000} limit={1} />
    </ThemeProvider>
  )
}

export default App
