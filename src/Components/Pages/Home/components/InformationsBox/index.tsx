import * as S from './styles'

type InfoProps = {
  description?: string
  hour?: string
  date?: string
}

export const InformationsBox = ({ description, date, hour }: InfoProps) => {
  return (
    <S.BackgroundOverlay>
      <S.StyledInformations>
        {date && hour && (
          <div className="container">
            <p className="subtitle">{date}</p>
            <p className="hour">{hour}</p>
          </div>
        )}
        <p className="description">{description}</p>
      </S.StyledInformations>
    </S.BackgroundOverlay>
  )
}
