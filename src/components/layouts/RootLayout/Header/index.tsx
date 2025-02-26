import { Link, Stack } from '@mui/material'
import { HeaderActions } from './HeaderActions'
import { Navbar } from './Navbar'
import lightLogo from '/light-logo.svg'

export const Header = () => {
  return (
    <Stack
      className='p-12 justify-between'
      component='header'
      direction='row'
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
