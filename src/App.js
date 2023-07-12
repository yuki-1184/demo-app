import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Items from './pages/Items'
import ItemDetail from './pages/ItemDetail'
import Navbar from './components/Navbar'
import SearchResult from './pages/SearchResult'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/items/:id" element={<ItemDetail />}></Route>
        <Route path="/searchResult/:keyword" element={<SearchResult />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
