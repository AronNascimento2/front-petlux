import * as S from './styles'
import { Header } from '../../Header'
import { Chat } from './components/Chat'

export const Home = () => {
  return (
    <S.Container>
      <Header className="header" />
      <S.Wrapper>
        {' '}
        <S.StyledCard>
          <div>Agendamentos</div>
        </S.StyledCard>
        <S.StyledCard>
          <div>Carteirinha de vacinação</div>
        </S.StyledCard>
        <S.StyledCard>
          {' '}
          <div>Resultados de exames</div>
        </S.StyledCard>
      </S.Wrapper>

      <div className="content">
        <Chat className="chat" />
      </div>
    </S.Container>
  )
}
