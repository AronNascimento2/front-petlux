
type Props = {
    children?: React.ReactNode
    [x: string]: any
  }
  
export const PublicPage = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}
