import { Header } from '../../Components/Header'
import * as S from './styles'

type Props = {
  children?: React.ReactNode
  [x: string]: any
}

export const PrivatePage = ({ children }: Props) => {
  return (
    <S.PageContainer>
      <S.PageRightContainer className="pageRightContainer">
        <Header />
        {children}
      </S.PageRightContainer>
    </S.PageContainer>
  )
}
