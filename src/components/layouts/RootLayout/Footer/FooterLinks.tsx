import { Link, Stack } from '@mui/material'

export const FooterLinks = () => {
  return (
    <>
      <Stack>
        <h2 className='text-white font-medium'>Sitio</h2>
        <Stack
          className='mt-8 text-white, font-[300] items-start'
          spacing={4}
          // sx={{ mt: 8, color: 'white', fontWeight: 300, alignItems: 'flex-start' }}
        >
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Inicio
          </Link>
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Nosotros
          </Link>
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Productos
          </Link>
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Ideas
          </Link>
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Contacto
          </Link>
        </Stack>
      </Stack>
      <Stack>
        <h2 className='text-white font-medium'>Ayuda</h2>
        <Stack
          className='mt-8 text-white, font-[300] items-start'
          spacing={4}
        >
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Soporte
          </Link>
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Preguntas frecuentes
          </Link>
          <Link
            underline='hover'
            href='#'
            sx={{ color: 'white' }}
          >
            Aviso de privacidad
          </Link>
        </Stack>
      </Stack>
    </>
  )
}
