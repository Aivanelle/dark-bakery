import { Box, Divider, Stack } from '@mui/material'
import { FooterLinks } from './FooterLinks'
import { InstagramPosts } from './InstagramPosts'
import { SocialInfo } from './SocialInfo'

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={[(theme) => ({ backgroundColor: theme.palette.secondary.main }), { px: 12, pt: 26, pb: 12 }]}
    >
      <Stack
        direction='column'
        useFlexGap
        divider={
          <Divider
            variant='middle'
            sx={{ borderColor: 'white', opacity: 0.4, mt: 18 }}
          />
        }
        sx={[
          (theme) => ({
            maxWidth: theme.breakpoints.values.lg
          }),
          { mx: 'auto' }
        ]}
      >
        <Stack
          direction='row'
          spacing={4}
          useFlexGap
          sx={{ justifyContent: 'space-between' }}
        >
          <SocialInfo />
          <FooterLinks />
          <InstagramPosts />
        </Stack>
        <span className='text-gray-400 text-center mt-6'>
          Copyright © 2024 Promatic Soft - Todos los derechos reservados
        </span>
      </Stack>
    </Box>
  )
}
