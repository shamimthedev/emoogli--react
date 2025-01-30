import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'


const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div></>
  )
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
