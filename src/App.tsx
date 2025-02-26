import { Route, Routes } from 'react-router'
import { ProductsLayout } from './components/layouts/ProductsLayout'
import { RootLayout } from './components/layouts/RootLayout'
import { HomeProducts } from './pages/HomeProducts'
import { ProductDetails } from './pages/ProductDetails'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<ProductsLayout />}>
          <Route
            index
            element={<HomeProducts />}
          />
          <Route
            path='details'
            element={<ProductDetails />}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

