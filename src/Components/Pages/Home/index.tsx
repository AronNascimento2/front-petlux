import * as S from './styles'
import { Header } from '../../Header'
import { Chat } from './components/Chat'
import { InformationsBox } from './components/InformationsBox'

export const Home = () => {
  const info = [
    { id: 1, title: 'Banho e Tosa', createdAt: '25/09/2023', hour: '14:30' },
    { id: 2, title: 'Banho e Tosa', createdAt: '01/08/2023', hour: '10:30' },
    { id: 3, title: 'Banho e Tosa', createdAt: '01/08/2023', hour: '10:30' }
  ]
  return (
    <S.Container>
      <Header className="header" />
      <S.Wrapper>
        {' '}
        <S.StyledCard>
          <div className="title">Agendamentos</div>
          <div className="box">
            {' '}
            {info.map((i) => {
              return (
                <InformationsBox
                  key={i.id}
                  description={i.title}
                  hour={i.hour}
                  date={i.createdAt}
                />
              )
            })}
          </div>
        </S.StyledCard>
        <S.StyledCard>
          <div className="title">Carteirinha de vacinação</div>
          <InformationsBox description="Sem informações" />
        </S.StyledCard>
        <S.StyledCard>
          {' '}
          <div className="title">Resultados de exames</div>
          <InformationsBox description="Sem informações" />
        </S.StyledCard>
      </S.Wrapper>

      <div className="content">
        <Chat className="chat" />
      </div>
    </S.Container>
  )
}
