import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react' // Import useState if not already imported
import * as S from './styles'

export const Header = () => {
  const history = useNavigate() // Get the history object

  // State to manage the loading status
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    setIsLoading(true) // Set loading state to true

    // Simulate logout process (replace with your actual logout logic)
    setTimeout(() => {
      setIsLoading(false) // Set loading state to false
      history('/') // Redirect to "/"
    }, 1000) // Replace with your desired timeout
  }

  return (
    <S.Container>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>Serviços</li>
        <li>
          <button onClick={handleLogout} disabled={isLoading}>
            {isLoading ? 'Saindo' : 'Sair'}
          </button>
        </li>
      </ul>

      <Outlet />
    </S.Container>
  )
}
