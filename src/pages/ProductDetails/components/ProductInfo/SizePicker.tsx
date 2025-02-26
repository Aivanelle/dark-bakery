import { ButtonBase, Stack } from '@mui/material'
import { useState } from 'react'

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export const SizePicker = () => {
  const [selectedIndex, setSelectedIndex] = useState(2)

  const handleSelectSize = (index: number) => () => {
    setSelectedIndex(index)
  }

  return (
    <Stack
      sx={{
        flexDirection: {
          '@420': 'row',
          '@': 'column'
        },
        gap: {
          '@420': 6,
          '@': 2
        }
      }}
    >
      <span className='text-2xl'>Tamaño:</span>
      <Stack
        direction='row'
        spacing={4}
        useFlexGap
      >
        {sizes.map((size, index) => (
          <ButtonBase
            key={index}
            onClick={handleSelectSize(index)}
            sx={{
              backgroundColor: selectedIndex === index ? 'secondary.main' : undefined,
              color: selectedIndex === index ? 'white' : 'secondary.main',
              borderRadius: 1,
              border: 1,
              aspectRatio: '1/1',
              fontWeight: '500',
              width: '2rem'
            }}
          >
            {size}
          </ButtonBase>
        ))}
      </Stack>
    </Stack>
  )
}
