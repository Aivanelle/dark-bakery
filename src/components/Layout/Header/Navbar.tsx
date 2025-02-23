import { Button, Stack } from '@mui/material'
import { PropsWithChildren } from 'react'

const NavButton = ({ children }: PropsWithChildren) => (
  <Button color='secondary' sx={{ px: 4, py: 0.5, letterSpacing: '0.05em' }}>{children}</Button>
)

export const Navbar = () => {
  return (
    <Stack
      component='nav'
      direction='row'
      sx={{ gap: 2, alignItems: 'center' }}
    >
      <NavButton>Inicio</NavButton>
      <NavButton>Nosotros</NavButton>
      <NavButton>Productos</NavButton>
      <NavButton>Ideas</NavButton>
      <NavButton>Contacto</NavButton>
    </Stack>
  )
}
