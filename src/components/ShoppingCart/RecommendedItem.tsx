import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Button, Divider, IconButton, Stack } from '@mui/material'
import shoppingPlaceholder from '/shopping-placeholder.jpg'

export const RecommendedItem = () => {
  return (
    <Stack
      spacing={5}
      sx={{ mt: 'auto' }}
    >
      <Stack
        direction='row'
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <IconButton>
          <ChevronLeft sx={{ opacity: 0.4 }} />
        </IconButton>
        <span className='text-center text-lg text-black font-medium'>Nuestra recomendación</span>
        <IconButton>
          <ChevronRight sx={{ opacity: 0.4 }} />
        </IconButton>
      </Stack>

      <Stack
        direction='row'
        spacing={6}
        sx={{ px: 8 }}
      >
        <img
          className='object-cover w-25 h-32'
          src={shoppingPlaceholder}
        />
        <Stack sx={{ justifyContent: 'space-between' }}>
          <span className='font-medium text-lg'>Hogaza con aceitunas verdes</span>
          <Stack
            direction='row'
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span className='font-medium text-lg'>$15.00</span>
            <Button
              disableElevation
              variant='contained'
              color='secondary'
              sx={{ py: 2 }}
            >
              Agregar
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Divider sx={{ borderColor: 'black' }} />
    </Stack>
  )
}
