import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Items from './pages/Items'
import ItemDetail from './pages/ItemDetail'
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/itemDetail" element={<ItemDetail></ItemDetail>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
