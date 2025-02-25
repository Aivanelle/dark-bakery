import { Tune } from '@mui/icons-material'
import { ButtonBase, Stack } from '@mui/material'
import { useState } from 'react'

const categories = ['Masa madre', 'Birote salado', 'Hogaza', 'Baguette', 'Brioche', 'Cayota Sonorense']

export const CategoriesFilter = () => {
  const [selectedIndex, setSelectedIndex] = useState(2)

  const handleSelectCategory = (index: number) => () => {
    setSelectedIndex(index)
  }

  return (
    <Stack spacing={4}>
      <Stack
        className='justify-between'
        direction='row'
      >
        <span className='font-medium'>Categorías</span>
        <Tune />
      </Stack>
      {categories.map((category, index) => (
        <ButtonBase
          key={index}
          onClick={handleSelectCategory(index)}
          sx={{
            px: 3,
            py: 3,
            borderRadius: 1,
            border: 1,
            borderColor: 'lightgray',
            color: selectedIndex === index ? 'white' : 'gray',
            backgroundColor: selectedIndex === index ? 'black' : undefined,
            transition: 'background-color .1s ease'
          }}
        >
          <span className='mr-auto'>{category}</span>
        </ButtonBase>
      ))}
    </Stack>
  )
}
