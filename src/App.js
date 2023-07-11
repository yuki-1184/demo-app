import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Items from './pages/Items'
import ItemDetail from './pages/ItemDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/items:id" element={<ItemDetail></ItemDetail>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
