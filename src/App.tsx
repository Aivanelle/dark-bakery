import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { ProductsLayout } from './pages/products/components/ProductsLayout'
import { HomeProducts } from './pages/products/HomeProducts'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProductsLayout />}>
          <Route
            index
            element={<HomeProducts />}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
