import { Add, Remove } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import { useEffect, useState } from 'react'

export const AmountStepper = ({ initialAmount }: { initialAmount: number }) => {
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    setAmount(initialAmount)
  }, [initialAmount])

  const updateAmount = (value: number) => () => {
    if (value <= 0) return

    setAmount(value)
  }

  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{ borderWidth: 1, borderRadius: 50, px: 2, py: 1, alignItems: 'center' }}
    >
      <IconButton
        color='secondary'
        onClick={updateAmount(amount - 1)}
      >
        <Remove fontSize='small' />
      </IconButton>
      <span className='font-medium w-[2ch] text-center'>{amount}</span>
      <IconButton
        color='secondary'
        onClick={updateAmount(amount + 1)}
      >
        <Add fontSize='small' />
      </IconButton>
    </Stack>
  )
}
