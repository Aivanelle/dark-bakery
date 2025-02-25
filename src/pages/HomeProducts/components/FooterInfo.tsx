import { LocalShippingOutlined, PaymentsOutlined, StoreOutlined } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { Stack } from '@mui/system'

const benefits = [
  {
    Icon: LocalShippingOutlined,
    header: 'Envíos a domicilio',
    description: 'Envíos gratuitos a partir de $80 000.00'
  },
  {
    Icon: PaymentsOutlined,
    header: 'Medios de pago',
    description: 'Consulta nuestros medios de pago'
  },
  {
    Icon: StoreOutlined,
    header: 'Retiro en sucursal',
    description: 'Conoce nuestra dirección de retiro'
  }
]

export const FooterInfo = () => {
  return (
    <Stack className='mt-14'>
      <Divider>
        <span className='mx-4 font-medium text-xl'>¿Cómo recibir y pagar tu pedido?</span>
      </Divider>
      <Stack
        className='justify-around mt-10'
        direction='row'
        spacing={4}
      >
        {benefits.map((info, index) => (
          <Stack
            key={index}
            className='items-center'
            direction='row'
            spacing={2}
          >
            <info.Icon sx={{ fontSize: '2rem', color: 'primary.main' }} />
            <Stack>
              <span className='font-medium text-lg'>{info.header}</span>
              <span className='text-xs text-gray-400'>{info.description}</span>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
