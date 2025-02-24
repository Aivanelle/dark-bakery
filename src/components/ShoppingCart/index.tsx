import { ShoppingBagOutlined } from '@mui/icons-material'
import { Badge, IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import { ShoppingDrawer } from './ShoppingDrawer'

export const ShoppingCart = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (value: boolean) => () => setOpen(value)

  return (
    <>
      <Stack
        direction='row'
        sx={{ alignItems: 'center' }}
      >
        <IconButton
          color='secondary'
          onClick={toggleDrawer(true)}
        >
          <Badge
            badgeContent={1}
            color='secondary'
            overlap='circular'
            sx={{ '& .MuiBadge-badge': { fontSize: '0.5rem', height: 14, minWidth: 14 } }}
          >
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
        <span className='font-medium'>$57.00</span>
      </Stack>

      <ShoppingDrawer
        open={open}
        toggleDrawer={toggleDrawer}
      />
    </>
  )
}
