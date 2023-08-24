import { useState, useRef, useEffect } from 'react'
import * as S from './styles'
import MessageIcon from '@mui/icons-material/Message'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import { Inputtext } from '../Input'
import { ComposeMessage } from '../ComposeMessage'

type props = { className: string }

export const Chat = ({ className }: props) => {
  const [show, setShow] = useState(false)
  const containerRef = useRef(null)

  const handleOpenModal = () => {
    setShow(true)
  }

  const handleCloseModal = () => {
    setShow(false)
  }

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleCloseModal)
    } else {
      document.removeEventListener('mousedown', handleCloseModal)
    }
    return () => {
      document.removeEventListener('mousedown', handleCloseModal)
    }
  }, [show])

  return (
    <div ref={containerRef}>
      <S.Container onClick={handleOpenModal} className={className}>
        <MessageIcon color="info" className="icon" />
      </S.Container>
      {show && (
        <S.ChatWrapper>
          <S.ModalChat>
            <div className="headerchat">
              {' '}
              <div className="infochat">
                <Avatar className="avatar" />
                <p>Aron Nascimento</p>
              </div>
              <div className="icon-close">
                <CloseIcon onClick={handleCloseModal} />
              </div>
            </div>
            <ComposeMessage />
            <Inputtext />
          </S.ModalChat>
        </S.ChatWrapper>
      )}
    </div>
  )
}
