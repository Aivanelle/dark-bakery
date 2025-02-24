import { Close } from '@mui/icons-material'
import { Drawer, Stack } from '@mui/material'
import { ContainedIconButton } from '../ContainedIconButton'
import { DrawerFooter } from './DrawerFooter'
import { RecommendedItem } from './RecommendedItem'
import { ShoppingItem } from './ShoppingItem'

type Props = {
  open: boolean
  toggleDrawer: (value: boolean) => () => void
}

const items = [
  {
    name: 'Hogaza con aceitunas negras',
    amount: 1,
    price: 15
  },
  {
    name: 'Birote salado con jamón y queso',
    amount: 2,
    price: 20
  }
]

export const ShoppingDrawer = ({ open, toggleDrawer }: Props) => {
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={toggleDrawer(false)}
    >
      <Stack sx={{ maxWidth: 468, height: '100%', overflow: 'hidden' }}>
        <Stack
          direction='row'
          sx={{ mb: 8, p: 6, pb: 0, justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span className='text-2xl font-medium tracking-wide'>
            Tu carrito <span className='text-red-500'>(3)</span>
          </span>
          <ContainedIconButton onClick={toggleDrawer(false)}>
            <Close />
          </ContainedIconButton>
        </Stack>

        <Stack
          direction='column'
          sx={{ gap: 6, overflowX: 'auto', px: 6, pb: 4, height: '100%' }}
        >
          {items.map((item, index) => (
            <ShoppingItem
              key={index}
              {...item}
            />
          ))}
          <RecommendedItem />
        </Stack>

        <DrawerFooter />
      </Stack>
    </Drawer>
  )
}
