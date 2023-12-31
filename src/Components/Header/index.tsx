import * as S from './styles'
import AccountMenu from '../AccountMenu'
import { ImageLoader } from '../../helpers/ImageLoader'

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <S.Container className={className}>
      <div className="container-logo">
        <ImageLoader
          src="/front-petlux/assets/petluxlogo-135d622f.png"
          fallbackSrc="src/assets/petluxlogo.png"
          alt="logo-petlux"
          className="logo"
        />
      </div>

      <AccountMenu />
    </S.Container>
  )
}
