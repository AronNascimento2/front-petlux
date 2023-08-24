import './App.css'
import { ToastContainer } from 'react-toastify'
import Toasts from './constants/GlobalStyles/toasts'
import { ThemeProvider } from 'styled-components'
import theme from './constants/themeDefault'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './Routes/AppRouter'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toasts />
      <AppRouter />
      <ToastContainer theme="colored" autoClose={1000} limit={1} />
    </ThemeProvider>
  )
}

export default App
