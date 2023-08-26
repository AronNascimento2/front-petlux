import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PetsIcon from '@mui/icons-material/Pets'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router'
import TemporaryDrawer from '../TemporaryDrawer'

import { Box } from '@mui/material'
import { Notifications } from '../Notifications'

export default function AccountMenu() {
  const history = useNavigate()

  // State to manage the loading status
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogout = () => {
    setIsLoading(true) // Set loading state to true

    // Simulate logout process (replace with your actual logout logic)
    setTimeout(() => {
      setIsLoading(false) // Set loading state to false
      history('/') // Redirect to "/"
    }, 1000)
  } // Replace with your desired timeout
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          paddingRight: '2rem'
        }}>
        <Notifications />
        <Tooltip title="Conta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <Avatar
              src="/front-petlux/assets/Aronn1-ec7ee7e8.jpg"
              sx={{ width: 50, height: 50 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={handleClose}>
          <Avatar src="/front-petlux/assets/Aronn1-ec7ee7e8.jpg" /> Ver Perfil
        </MenuItem>

        <Divider />
        <TemporaryDrawer />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          Ver meus pets
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações{' '}
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {isLoading ? 'Saindo...' : 'Sair'}
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
