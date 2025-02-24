import { ShoppingCart } from '@/components/ShoppingCart'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import { Divider, IconButton, Stack } from '@mui/material'

export const HeaderActions = () => {
  return (
    <Stack
      component='nav'
      direction='row'
      divider={
        <Divider
          orientation='vertical'
          flexItem
          sx={[
            (theme) => ({ borderColor: theme.palette.secondary.main }),
            { height: 24, marginY: 'auto', opacity: 0.2 }
          ]}
        />
      }
      sx={{ alignItems: 'center', gap: 1 }}
    >
      <IconButton color='secondary'>
        <FavoriteBorder />
      </IconButton>
      <IconButton color='secondary'>
        <AccountCircleOutlined />
      </IconButton>
      <ShoppingCart />
    </Stack>
  )
}
