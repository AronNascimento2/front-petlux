import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../Components/Pages/Login'

const AppRouter = () => {
  return (
    <BrowserRouter basename="/front-petlux">
      <Routes>
        <Route path="/front-petlux" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
