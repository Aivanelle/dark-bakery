import { ProductItem } from '@/components/ProductItem'
import { Box, Breadcrumbs, Grid2 as Grid, Link, Stack } from '@mui/material'
import { AsideFilters } from './components/AsideFilters'
import { FooterInfo } from './components/FooterInfo'
import { SortByMenu } from './components/SortByMenu'

const breadcrumbsPath = ['Inicio', 'Productos', 'Hogaza']
const products = [
  {
    name: 'Hogaza con aceituna negra',
    rating: 4.9,
    price: 12
  },
  {
    name: 'Hogaza con aceituna verde',
    rating: 4.9,
    price: 12
  },
  {
    name: 'Hogaza con aceituna y aguacate',
    rating: 4.9,
    price: 12
  },
  {
    name: 'Hogaza con queso',
    rating: 4.9,
    price: 10
  },
  {
    name: 'Hogaza con jamón y queso',
    rating: 4.9,
    price: 11
  }
]

export const HomeProducts = () => {
  return (
    <Box sx={{ p: 12 }}>
      <Stack sx={[(theme) => ({ maxWidth: theme.breakpoints.values.lg }), { mx: 'auto' }]}>
        <Stack
          className='justify-between items-center'
          direction='row'
        >
          <Breadcrumbs
            separator='›'
            sx={{ fontSize: '0.875rem' }}
          >
            {breadcrumbsPath.map((path, index) => (
              <Link
                key={index}
                color='inherit'
                underline='hover'
                href='#'
                sx={{ fontWeight: index === breadcrumbsPath.length - 1 ? 'medium' : 'regular' }}
              >
                {path}
              </Link>
            ))}
          </Breadcrumbs>
          <Stack
            className='items-center'
            direction='row'
            spacing={8}
          >
            <span className='text-sm'>Mostrar 1 - 10 de 5 productos</span>
            <SortByMenu />
          </Stack>
        </Stack>

        <Stack
          className='mt-10 mb-12'
          direction='row'
          spacing={8}
        >
          <AsideFilters />
          <Grid
            component='main'
            container
            columns={{ xs: 1, md: 2, lg: 3 }}
            columnSpacing={6}
            rowSpacing={10}
          >
            {products.map((product, index) => (
              <Grid
                key={index}
                size={1}
              >
                <ProductItem
                  key={index}
                  {...product}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>

        <FooterInfo />
      </Stack>
    </Box>
  )
}
