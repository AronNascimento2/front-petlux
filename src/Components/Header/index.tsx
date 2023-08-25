import * as S from './styles'
import AccountMenu from '../AccountMenu'

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <S.Container className={className}>
      <img
        src={'/front-petlux/assets/petluxlogo-135d622f.png'}
        alt="logo-petlux"
        className="logo"
      />

      <AccountMenu />
    </S.Container>
  )
}
