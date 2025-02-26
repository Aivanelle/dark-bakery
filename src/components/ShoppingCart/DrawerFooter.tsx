import { Button, Link, Stack } from '@mui/material'

export const DrawerFooter = () => {
  return (
    <Stack
      className='p-4 m-6 mt-0 rounded-lg'
      spacing={4}
      useFlexGap
      sx={(theme) => ({ backgroundColor: theme.palette.secondary.main })}
    >
      <Stack
        className='text-white items-center justify-between'
        direction='row'
      >
        <span className='text-xl'>Subtotal</span>
        <span className='text-2xl tracking-wide'>$35.09</span>
      </Stack>

      <Stack
        direction='row'
        spacing={4}
      >
        <Button
          variant='outlined'
          sx={{
            color: 'white',
            borderColor: 'white',
            py: 2,
            px: 3,
            fontSize: '1rem',
            fontWeight: 300,
            flexGrow: 1
          }}
        >
          Continuar comprando
        </Button>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            py: 2,
            px: 3,
            fontSize: '1rem',
            fontWeight: 400,
            flexGrow: 1
          }}
        >
          Finalizar pedido
        </Button>
      </Stack>

      <span className='text-white text-xs text-center mt-2'>
        Al hacer click en Finalizar pedido está aceptando{' '}
        <Link
          href='#'
          color='inherit'
        >
          Términos y condiciones
        </Link>
        .
      </span>
    </Stack>
  )
}
