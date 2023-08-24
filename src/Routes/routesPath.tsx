import { CreateNewAccount } from '../Components/Pages/CreateNewAccount'
import { Home } from '../Components/Pages/Home'
import { Login } from '../Components/Pages/Login'
import { RecoveryPassword } from '../Components/Pages/RecoveryPassword'

export const ROUTES_PATH = [
  {
    path: 'login',
    element: <Login />,
    isPrivate: false // Public route
  },
  {
    path: 'home',
    element: <Home />
    // isPrivate: true, // Private route
  },
  {
    path: 'recoverypassword',
    element: <RecoveryPassword />
    // isPrivate: false, // Public route
  },
  {
    path: 'createnewaccount',
    element: <CreateNewAccount />
    // isPrivate: false, // Public route
  }
]
