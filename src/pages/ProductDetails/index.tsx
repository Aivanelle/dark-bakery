import { MBreadcrumbs } from '@/components/MBreadcrumbs'
import { Box, Stack } from '@mui/material'
import { ImageDisplay } from './components/ImageDisplay'
import { InfoTabs } from './components/InfoTabs'
import { ProductInfo } from './components/ProductInfo'
import { RelatedProducts } from './components/RelatedProducts'

const crumbs = ['Inicio', 'Productos', 'Hogaza', 'Hogaza con aceituna negra']

export const ProductDetails = () => {
  return (
    <Box className='p-12 pb-24'>
      <Stack sx={[(theme) => ({ maxWidth: theme.breakpoints.values.lg }), { mx: 'auto', maxHeight: 'min-content' }]}>
        <MBreadcrumbs crumbs={crumbs} />

        <Stack
          className='mt-10'
          direction={{ xs: 'column', md: 'row' }}
          useFlexGap
          spacing={14}
        >
          <ImageDisplay />
          <ProductInfo />
        </Stack>

        <Stack
          direction='row'
          spacing={14}
          useFlexGap
          sx={{ mt: 10 }}
        >
          <Box className='flex-1'>
            <InfoTabs />
          </Box>
          <Box className='flex-1 hidden lg:flex' />
        </Stack>

        <RelatedProducts />
      </Stack>
    </Box>
  )
}
