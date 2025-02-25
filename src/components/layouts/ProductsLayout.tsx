import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import productsBanner from '/products-banner.jpg'

export const ProductsLayout = () => {
  return (
    <>
      <Box className='relative'>
        <img
          className='max-h-96 w-full object-cover'
          src={productsBanner}
        />
        <Box className='w-full h-full bg-black/50 absolute top-0 left-0 grid items-center'>
          <h2 className='text-white text-center text-4xl sm:text-7xl font-serif'>Productos</h2>
        </Box>
      </Box>
      <Outlet />
    </>
  )
}
