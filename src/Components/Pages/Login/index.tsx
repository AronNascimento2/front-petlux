import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { useState, ChangeEvent, useCallback } from 'react'
import { toast } from 'react-toastify'
import { Users } from '../../../constants/Users'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Loader } from '../../GlobalComponents'
import { ImageLoader } from '../../../helpers/ImageLoader'

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
  const handleCreateACcountPage = useCallback(async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    history('/createnewaccount')
    setLoading(false) // Ativa o loading
  }, [history])

  const handleLostPasswordPage = useCallback(async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    history('/recoverypassword')
    setLoading(false) // Ativa o loading
  }, [history])

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
        <S.Wrapper>
          <div className="container-logo">
            <ImageLoader
              src="/front-petlux/assets/petluxlogo-135d622f.png"
              fallbackSrc="src/assets/petluxlogo.png"
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

          <a className="lost-password" onClick={handleLostPasswordPage}>
            Esqueceu a senha ?
          </a>
          <div className="button-group">
            <button onClick={handleLoginClick} disabled={loading}>
              Login
            </button>
            <button className="create-button" onClick={handleCreateACcountPage}>
              Criar nova conta
            </button>
          </div>
        </S.Wrapper>
      )}
    </S.Container>
  )
}
