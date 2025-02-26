import { CachedOutlined, FavoriteBorderOutlined, LocalShippingOutlined, StarRounded } from '@mui/icons-material'
import { Button, ButtonBase, Divider, Stack } from '@mui/material'
import { AmountStepper } from './AmountStepper'
import { SizePicker } from './SizePicker'

export const ProductInfo = () => {
  return (
    <Stack
      className='flex-1'
      spacing={6}
      sx={{ containerType: 'inline-size' }}
    >
      <Stack
        spacing={2}
        sx={{ containerType: 'inline-size' }}
      >
        <span className='font-serif text-4xl'>Hogaza con aceituna negra</span>
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            flexDirection: {
              '@400': 'row',
              '@': 'column'
            },
            alignItems: {
              '@400': 'center',
              '@': 'flex-start'
            }
          }}
        >
          <Stack direction='row'>
            <StarRounded sx={{ color: 'orange' }} />
            <StarRounded sx={{ color: 'orange' }} />
            <StarRounded sx={{ color: 'orange' }} />
            <StarRounded sx={{ color: 'orange' }} />
            <StarRounded sx={{ color: 'lightgray' }} />
          </Stack>
          <Stack
            direction='row'
            spacing={2}
          >
            <span className='text-sm text-gray-400'>(150 reseñas)</span>
            <Divider
              orientation='vertical'
              variant='middle'
              flexItem
              sx={{ borderColor: 'secondary.main' }}
            />
            <span className='text-sm text-gray-400'>Stock disponible: indefinido</span>
          </Stack>
        </Stack>
        <span className='text-xl'>$15.00</span>
      </Stack>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, risus sit amet consectetur fringilla,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Divider sx={{ borderColor: 'secondary.main' }} />

      <SizePicker />

      <Stack
        spacing={4}
        useFlexGap
        sx={{
          flexDirection: {
            '@420': 'row',
            '@': 'column'
          }
        }}
      >
        <AmountStepper />
        <Stack
          direction='row'
          spacing={4}
          sx={{ flexGrow: 1 }}
        >
          <Button
            disableElevation
            variant='contained'
            color='secondary'
            sx={{ borderRadius: 1, flexGrow: 1, fontSize: '1.1rem', fontWeight: 400 }}
          >
            Agregar al carrito
          </Button>
          <ButtonBase sx={{ border: 1, p: 2, borderRadius: 1 }}>
            <FavoriteBorderOutlined />
          </ButtonBase>
        </Stack>
      </Stack>

      <Stack className='border-1 rounded-sm'>
        <Stack
          className='px-4 py-5 items-center'
          direction='row'
          spacing={3}
        >
          <LocalShippingOutlined sx={{ fontSize: '3rem' }} />
          <span>Envíos en 24 horas</span>
        </Stack>
        <Divider sx={{ borderColor: 'secondary.main' }} />
        <Stack
          className='px-4 py-5 items-center'
          direction='row'
          spacing={3}
        >
          <CachedOutlined sx={{ fontSize: '3rem' }} />
          <span>Devolución gratuita</span>
        </Stack>
      </Stack>
    </Stack>
  )
}
