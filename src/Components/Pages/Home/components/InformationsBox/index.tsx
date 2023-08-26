import * as S from './styles'

type InfoProps = {
  description?: string
  hour?: string
  date?: string
}

export const InformationsBox = ({ description, date, hour }: InfoProps) => {
  return (
    <S.StyledInformations>
      {date && hour && (
        <>
          <div className="container">
            <div className="subtitle">{date}</div>
            <div className="hour">{hour}</div>
          </div>
          <div className="line" />
        </>
      )}
      <p className="description">{description}</p>
    </S.StyledInformations>
  )
}
