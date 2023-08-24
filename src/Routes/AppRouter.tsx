import { CreateNewAccount } from "../Components/Pages/CreateNewAccount";
import { Home } from "../Components/Pages/Home";
import { Login } from "../Components/Pages/Login";
import { RecoveryPassword } from "../Components/Pages/RecoveryPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header />}> */}
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="recoverypassword" element={<RecoveryPassword />} />
          <Route path="createnewaccount" element={<CreateNewAccount />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
 
    </>
  )
}


