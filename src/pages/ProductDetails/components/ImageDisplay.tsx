import { Box, Stack } from '@mui/material'
import productPlaceholder from '/product-placeholder.jpg'

export const ImageDisplay = () => {
  return (
    <Stack
      className='flex-1'
      direction={{ xs: 'column-reverse', sm: 'row', md: 'column-reverse', lg: 'row' }}
      spacing={8}
    >
      <Stack
        className='overflow-auto max-h-130 max-w-100'
        direction={{ xs: 'row', sm: 'column', md: 'row', lg: 'column' }}
        spacing={4}
      >
        {Array(7)
          .fill(undefined)
          .map((_, index) => (
            <img
              key={index}
              className='w-30 min-w-20 aspect-square object-cover rounded-sm'
              src={productPlaceholder}
            />
          ))}
      </Stack>
      <Box className='flex w-full md:h-full lg:h-auto'>
        <img
          className='w-full h-80 object-cover sm:h-full md:w-full md:h-full rounded-sm'
          src={productPlaceholder}
        />
      </Box>
    </Stack>
  )
}
