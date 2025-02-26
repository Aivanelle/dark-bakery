import { FavoriteBorderOutlined, StarRounded } from '@mui/icons-material'
import { Box, Button, ButtonBase, Paper, Stack } from '@mui/material'
import { NavLink } from 'react-router'
import productPlaceholder from '/product-placeholder.jpg'

type Props = {
  name: string
  rating: number
  price: number
}

export const ProductItem = ({ name, rating, price }: Props) => {
  return (
    <Paper
      variant='outlined'
      sx={{ borderRadius: 4, minHeight: 344, height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Box className='relative rounded-t-2xl overflow-hidden'>
        <ButtonBase
          className='w-full'
          component={NavLink}
          to='/details'
        >
          <img
            className='h-50 w-full object-cover'
            src={productPlaceholder}
          />
        </ButtonBase>
        <ButtonBase
          sx={{ position: 'absolute', top: 16, right: 16, p: 1, backgroundColor: 'white', borderRadius: '50%' }}
        >
          <FavoriteBorderOutlined fontSize='small' />
        </ButtonBase>
      </Box>
      <Stack
        className='p-4 justify-between items-start'
        direction='row'
        spacing={4}
      >
        <span className='font-medium text-lg overflow-ellipsis overflow-hidden line-clamp-2'>{name}</span>
        <Stack
          className='pt-2'
          direction='row'
          spacing={1}
        >
          <StarRounded sx={{ fontSize: '0.875rem', color: 'orange' }} />
          <span className='text-xs'>{rating}</span>
        </Stack>
      </Stack>
      <Stack
        className='p-4 pt-0 mt-auto justify-between items-center'
        direction='row'
        spacing={4}
      >
        <Button
          variant='outlined'
          color='secondary'
          sx={{ fontSize: '0.75rem', py: 2, px: 6, borderRadius: 50 }}
        >
          Agregar
        </Button>
        <span className='font-medium'>${price.toFixed(2)}</span>
      </Stack>
    </Paper>
  )
}
