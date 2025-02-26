import { Button, Stack } from '@mui/material'
import { NavLink } from 'react-router'

const links = [
  {
    label: 'Inicio',
    path: ''
  },
  {
    label: 'Nosotros',
    path: ''
  },
  {
    label: 'Productos',
    path: '/'
  },
  {
    label: 'Ideas',
    path: ''
  },
  {
    label: 'Contacto',
    path: ''
  }
]

export const Navbar = () => {
  return (
    <Stack
      className='items-center'
      component='nav'
      direction='row'
      spacing={2}
    >
      {links.map((link, index) => (
        <Button
          key={index}
          component={NavLink}
          to={link.path}
          color='secondary'
          sx={{ px: 4, py: 0.5, letterSpacing: '0.05rem' }}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  )
}
