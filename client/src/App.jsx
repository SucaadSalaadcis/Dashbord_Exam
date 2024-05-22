
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Items from './components/Items'
import OrdersList from './components/OrdersList'
import GeneralS from './components/GeneralS'
import Login from './components/Login'
import Home from './components/Home'

function App() {

  return <>

    <Products>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item' element={<Items />} />
        <Route path='/order' element={<OrdersList />} />
        <Route path='/general' element={<GeneralS />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </Products>

  </>



}

export default App
