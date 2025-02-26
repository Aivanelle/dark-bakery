import { Add, Remove } from '@mui/icons-material'
import { Box, ButtonBase, Stack } from '@mui/material'
import { useState } from 'react'

export const AmountStepper = () => {
  const [amount, setAmount] = useState(0)

  const handleSetAmount = (amount: number) => () => {
    if (amount <= 0) return

    setAmount(amount)
  }

  return (
    <Stack direction='row' >
      <ButtonBase
        onClick={handleSetAmount(amount - 1)}
        sx={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4, border: 1, p: 2 }}
      >
        <Remove />
      </ButtonBase>
      <Box className='px-6 border-1 grid items-center'>
        <span className='w-[3ch] text-center'>{amount}</span>
      </Box>
      <ButtonBase
        onClick={handleSetAmount(amount + 1)}
        sx={{
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          border: 1,
          p: 2,
          backgroundColor: 'secondary.main',
          color: 'white',
          borderColor: 'secondary.main'
        }}
      >
        <Add />
      </ButtonBase>
    </Stack>
  )
}
