import * as S from './styles'
import { Header } from '../../Header'
import { Chat } from './components/Chat'

export const Home = () => {
  return (
    <S.Container>
      <Header className="header" />
      <S.Wrapper>
        {' '}
        <S.StyledCard></S.StyledCard>
        <S.StyledCard></S.StyledCard>
        <S.StyledCard></S.StyledCard>
        <S.StyledCard></S.StyledCard>
        <S.StyledCard></S.StyledCard>
        <S.StyledCard></S.StyledCard>
      </S.Wrapper>

      <div className="content">
        <Chat className="chat" />
      </div>
    </S.Container>
  )
}
