import { KeyboardArrowDown } from '@mui/icons-material'
import { ButtonBase, Menu, MenuItem, Stack } from '@mui/material'
import { MouseEvent, useState } from 'react'

const options = ['Más vendido', 'Nombre A-Z', 'Nombre Z-A', 'Mayor a menor precio', 'Menor a mayor precio']

export const SortByMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const open = Boolean(anchor)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget)
  }
  const handleClose = () => {
    setAnchor(null)
  }

  const handleMenuItemClick = (index: number) => () => {
    setSelectedIndex(index)
    setAnchor(null)
  }

  return (
    <Stack
      className='items-center'
      direction='row'
      spacing={1}
    >
      <span className='text-sm'>Ordenar por:</span>
      <ButtonBase
        onClick={handleClick}
        sx={{ py: 0, px: 1, borderRadius: 1 }}
      >
        <span className='text-sm font-medium'>{options[selectedIndex]}</span>
        <KeyboardArrowDown />
      </ButtonBase>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuItemClick(index)}
            sx={{ fontSize: '0.875rem' }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  )
}
