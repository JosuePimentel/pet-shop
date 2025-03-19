import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router'
import MainRoutes from './main-routes.tsx'
import Header from './components/header.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <MainRoutes />
  </BrowserRouter>
)
