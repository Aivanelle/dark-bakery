import { Outlet } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
