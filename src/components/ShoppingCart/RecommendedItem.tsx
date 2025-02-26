import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Button, Divider, IconButton, Stack } from '@mui/material'
import shoppingPlaceholder from '/shopping-placeholder.jpg'

export const RecommendedItem = () => {
  return (
    <Stack
      className='mt-auto'
      spacing={5}
    >
      <Stack
        className='items-center content-between'
        direction='row'
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
        className='px-8'
        direction='row'
        spacing={6}
      >
        <img
          className='object-cover w-25 h-32'
          src={shoppingPlaceholder}
        />
        <Stack className='justify-between'>
          <span className='font-medium text-lg'>Hogaza con aceitunas verdes</span>
          <Stack
            className='justify-between items-center'
            direction='row'
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
