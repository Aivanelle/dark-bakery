import { Link, Stack } from '@mui/material'
import { HeaderActions } from './HeaderActions'
import { Navbar } from './Navbar'
import lightLogo from '/light-logo.svg'

export const Header = () => {
  return (
    <Stack
      component='header'
      direction='row'
      sx={{ p: 12, justifyContent: 'space-between' }}
    >
      <Link href='#'>
        <img
          className='min-w-32'
          src={lightLogo}
        />
      </Link>
      <Navbar />
      <HeaderActions />
    </Stack>
  )
}
