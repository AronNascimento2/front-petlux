import * as S from './styles'
import AccountMenu from '../AccountMenu'

export const Header = () => {
  return (
    <S.Container>
      <img
        src={'./src/assets/petluxlogo.png'}
        alt="logo-petlux"
        className="logo"
      />

      <AccountMenu />
    </S.Container>
  )
}
