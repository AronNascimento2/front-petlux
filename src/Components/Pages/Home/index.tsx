import * as S from './styles'
import { Header } from '../../Header'
import { Chat } from '../../Chat'

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <div className="content">
        <Chat className="chat" />
      </div>
    </S.Container>
  )
}
