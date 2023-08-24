import * as S from './styles'
import AccountMenu from '../AccountMenu'

export const Header = () => {
  return (
    <S.Container>
      <img
        src={'/front-petlux/assets/petluxlogo-135d622f.png'}
        alt="logo-petlux"
        className="logo"
      />

      <AccountMenu />
    </S.Container>
  )
}
