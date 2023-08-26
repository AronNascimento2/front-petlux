import { Badge, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { NotificationBox } from './NotificationBox'
import CloseIcon from '@mui/icons-material/Close'

export const Notifications: React.FC = () => {
  const [show, setShow] = useState(false)

  const handleModal = () => {
    setShow(!show)
  }

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      // Verificar se o clique ocorreu dentro do Dialog ou no botão de notificações.
      if (
        event.target.closest('.dialog') === null &&
        event.target.closest('.notifications-button') === null
      ) {
        setShow(!show)
      }
    }

    if (show) {
      window.addEventListener('click', handleDocumentClick)
    }

    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [show])

  return (
    <>
      <IconButton
        onClick={handleModal}
        size="large"
        aria-label="show 1 new notifications"
        color="inherit"
        className="notifications-button">
        <Badge badgeContent={1} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {show && (
        <div className="dialog">
          <S.Dialog>
            <div className="container">
              <p>Notificações</p>
              <div className="icon-close">
                <CloseIcon onClick={handleModal} />
              </div>
            </div>
            <NotificationBox />
          </S.Dialog>
        </div>
      )}
    </>
  )
}
