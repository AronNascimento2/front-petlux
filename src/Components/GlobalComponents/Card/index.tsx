import * as S from './styles'
type Props = {
  children?: React.ReactNode
  className?: string
}
const Card = ({ children, className }: Props) => {
  return <S.Container className={className}>{children}</S.Container>
}
export default Card
