import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { useState, ChangeEvent, useCallback } from 'react'
import { toast } from 'react-toastify'
import { Users } from '../../../constants/Users'
import { Loader } from '../../Loader'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const Login = () => {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false) // Track whether the password is shown

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLoginClick = useCallback(async () => {
    setLoading(true) // Ativa o loading

    // Simula um atraso de 2 segundos para a requisição
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const user = Users.find(
      (user) => user.email === email && user.senha === password
    )

    setLoading(false) // Desativa o loading após a requisição

    if (user) {
      history('/Home')
    } else {
      toast.error(
        'Credenciais inválidas. Por favor, verifique seu email e senha.',
        { position: toast.POSITION.BOTTOM_RIGHT }
      )
    }
  }, [email, password, history])

  return (
    <S.Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container-logo">
            <img
              src={'src/assets/Petluxlogo.jpeg'}
              alt="logo-petlux"
              className="logo"
            />
          </div>
          <div className="container-div">
            <input
              type="text"
              placeholder="E-mail"
              className="input"
              value={email}
              onChange={handleEmailChange}
            />

            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                className="input"
                value={password}
                onChange={handlePasswordChange}
              />

              <div className="password-toggle" onClick={handleTogglePassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </div>
            </div>
          </div>

          <a
            className="lost-password"
            onClick={() => history('/recoverypassword')}>
            Esqueceu a senha ?
          </a>
          <div className="button-group">
            <button onClick={handleLoginClick} disabled={loading}>
              Login
            </button>
            <button
              className="create-button"
              onClick={() => history('/createnewaccount')}>
              Criar nova conta
            </button>
          </div>
        </>
      )}
    </S.Container>
  )
}
