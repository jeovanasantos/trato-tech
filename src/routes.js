import PaginaPadrao from 'components/PaginaPadrao';
import Home from './styles/pages/Home/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categoria from './styles/pages/Categoria/index';

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaPadrao />}>
        <Route index element={<Home />} />
        <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}