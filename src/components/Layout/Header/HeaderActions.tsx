import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import ShoppingBag from '@mui/icons-material/ShoppingBagOutlined'
import { Badge, Divider, IconButton, Stack } from '@mui/material'

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
      <Stack
        direction='row'
        sx={{ alignItems: 'center' }}
      >
        <IconButton color='secondary'>
          <Badge
            badgeContent={1}
            color='secondary'
            sx={{ '& .MuiBadge-badge': { fontSize: 8, height: 14, minWidth: 14 } }}
            overlap='circular'
          >
            <ShoppingBag />
          </Badge>
        </IconButton>
        <span className='font-medium'>$57.00</span>
      </Stack>
    </Stack>
  )
}
