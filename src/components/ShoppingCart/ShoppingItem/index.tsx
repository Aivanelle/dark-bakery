import { DeleteOutline } from '@mui/icons-material'
import { Box, Divider, IconButton, Stack } from '@mui/material'
import { AmountStepper } from './AmountStepper'
import shoppingPlaceholder from '/shopping-placeholder.jpg'

type Props = {
  name: string
  amount: number
  price: number
}

export const ShoppingItem = ({ name, amount, price }: Props) => {
  return (
    <Box>
      <Stack
        direction='row'
        spacing={10}
      >
        <img
          className='object-cover w-25 h-32'
          src={shoppingPlaceholder}
        />

        <Stack className='flex-1 justify-between'>
          <Stack
            className='justify-between items-start'
            direction='row'
            spacing={4}
          >
            <span className='font-medium text-lg'>{name}</span>
            <IconButton color='secondary'>
              <DeleteOutline />
            </IconButton>
          </Stack>
          <Stack
            className='justify-between items-center'
            direction='row'
          >
            <span className='font-medium text-lg'>${price.toFixed(2)}</span>
            <AmountStepper initialAmount={amount} />
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={[(theme) => ({ borderColor: theme.palette.secondary.main }), { mt: 4 }]} />
    </Box>
  )
}
