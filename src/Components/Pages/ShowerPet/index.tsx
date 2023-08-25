import { Header } from '../../Header'
import BasicDatePicker from './components/datepicker'
import * as S from './styles'

export const ShowerPet = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <BasicDatePicker />
      </S.Wrapper>
    </S.Container>
  )
}
