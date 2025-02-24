import { ContainedIconButton } from '@/components/ContainedIconButton'
import Facebook from '@mui/icons-material/FacebookOutlined'
import GitHub from '@mui/icons-material/GitHub'
import Instagram from '@mui/icons-material/Instagram'
import X from '@mui/icons-material/X'
import { Stack } from '@mui/material'
import darkLogo from '/dark-logo.svg'

export const SocialInfo = () => {
  return (
    <Stack sx={{ minWidth: 'max-content' }}>
      <img
        className='invert-100'
        width={96}
        src={darkLogo}
      />
      <p className='text-gray-400 mt-6 text-sm tracking-wide'>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit. Sed
        <br />
        euismod, risus sit amet
      </p>
      <Stack
        direction='row'
        spacing={3}
        sx={{ mt: 8 }}
      >
        <ContainedIconButton>
          <X fontSize='small' />
        </ContainedIconButton>
        <ContainedIconButton
          component='a'
          href='https://www.facebook.com/people/nora-Dark-Bakery-By-Birote-Salado/61564663842220/'
          target='_blank'
        >
          <Facebook fontSize='small' />
        </ContainedIconButton>
        <ContainedIconButton
          component='a'
          href='https://www.instagram.com/nora_darkbakery/'
          target='_blank'
        >
          <Instagram fontSize='small' />
        </ContainedIconButton>
        <ContainedIconButton>
          <GitHub fontSize='small' />
        </ContainedIconButton>
      </Stack>
    </Stack>
  )
}
