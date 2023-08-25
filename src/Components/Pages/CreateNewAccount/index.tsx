import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { useState, useCallback, ChangeEvent } from 'react'
import { toast } from 'react-toastify'

export const CreateNewAccount = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('') // Adicione estados para outros campos
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useNavigate()

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    },
    []
  )
  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    },
    []
  )
  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    []
  )

  const handleConfirmPasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value)
    },
    []
  )

  const isPasswordValid = (password: string) => {
    // Expressão regular para validar a senha
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordPattern.test(password)
  }
  const isEmailValid = (email: string) => {
    // Expressão regular para validar o formato do email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  const handleCreateClick = useCallback(() => {
    if (
      !name ||
      !email ||
      !isEmailValid(email) ||
      !isPasswordValid(password) ||
      password !== confirmPassword
    ) {
      if (!name || !email) {
        toast.error('Por favor, preencha todos os campos.', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      } else if (!isEmailValid(email)) {
        toast.error('Por favor, insira um email válido.', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      } else if (!isPasswordValid(password)) {
        toast.error(
          'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial.',
          { position: toast.POSITION.BOTTOM_RIGHT }
        )
      } else if (password !== confirmPassword) {
        toast.error('As senhas não coincidem.', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    } else {
      toast.success('Conta criada com sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      // Realize a ação de criar a conta ou redirecionar, se todos os campos estiverem preenchidos e válidos
      history('/')
    }
  }, [name, email, password, confirmPassword, history])

  return (
    <S.Container>
      <div className="container-logo">
        <img
          src={'/front-petlux/assets/petluxlogo-135d622f.png'}
          alt="logo-petlux"
          className="logo"
        />
      </div>
      <div className="container-inputs">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="buttons-create">
        <button onClick={() => history('/')} className="cancel-button">
          Voltar
        </button>
        <button onClick={handleCreateClick}>Criar</button>
      </div>
    </S.Container>
  )
}
