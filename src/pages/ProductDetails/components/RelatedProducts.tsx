import { ProductItem } from '@/components/ProductItem'
import { Stack } from '@mui/material'

const products = [
  {
    name: 'Hogaza con aguacate y huevo',
    rating: 4.9,
    price: 15
  },
  {
    name: 'Hogaza con aceituna verde',
    rating: 4.9,
    price: 20
  },
  {
    name: 'Hogaza con aguacate y tomate',
    rating: 4.9,
    price: 5
  },
  {
    name: 'Hogaza con jamón y tomate',
    rating: 4.9,
    price: 5
  }
]

export const RelatedProducts = () => {
  return (
    <Stack
      className='mt-36'
      spacing={16}
    >
      <span className='font-serif text-4xl text-center'>Productos relacionados</span>
      <Stack
        className=' overflow-auto'
        direction='row'
        spacing={10}
      >
        {products.map((product) => (
          <ProductItem {...product} />
        ))}
      </Stack>
    </Stack>
  )
}
