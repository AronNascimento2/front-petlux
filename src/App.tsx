import "./App.css";
import { ToastContainer } from "react-toastify";
import Toasts from "./GlobalStyles/toasts";
import { AppRouter } from "./Routes/AppRouter";
import { ThemeProvider } from "styled-components";
import theme from "./constants/themeDefault";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toasts />
      <AppRouter />
      <ToastContainer theme="colored" autoClose={1000} limit={1}  />
    </ThemeProvider>
  )
}

export default App
