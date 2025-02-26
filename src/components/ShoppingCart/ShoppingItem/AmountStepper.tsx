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
      className='border-1 rounded-4xl px-2 py-1 items-center'
      direction='row'
      spacing={2}
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
