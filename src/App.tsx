import { ToastContainer } from 'react-toastify'
import Toasts from './constants/GlobalStyles/toasts'
import { ThemeProvider } from 'styled-components'
import theme from './constants/themeDefault'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './Routes/AppRouter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Components/Pages/Login'
import { Home } from './Components/Pages/Home'
import { RecoveryPassword } from './Components/Pages/RecoveryPassword'
import { CreateNewAccount } from './Components/Pages/CreateNewAccount'
import { ShowerPet } from './Components/Pages/ShowerPet'
import Scrollbars from './constants/GlobalStyles/scroolbars'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Scrollbars />
      <Toasts />
      <BrowserRouter basename="/front-petlux">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverypassword" element={<RecoveryPassword />} />
          <Route path="/createnewaccount" element={<CreateNewAccount />} />
          <Route path="/showerpet" element={<ShowerPet />} />
        </Routes>
      </BrowserRouter>{' '}
      <AppRouter />
      <ToastContainer theme="colored" autoClose={1000} limit={1} />
    </ThemeProvider>
  )
}

export default App
