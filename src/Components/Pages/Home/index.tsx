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
          <div className="title">Agendamentos</div>
          <S.StyledInformations>
            <div className="text">
              <p>25/09/2023 12:00 </p>
              <p>Banho e Tosa com TaxiDog</p>
            </div>
          </S.StyledInformations>
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
