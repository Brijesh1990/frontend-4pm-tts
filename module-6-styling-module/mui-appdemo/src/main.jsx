import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import SelectApp from './SelectApp'
// import ContainerApp from './ContainerApp'
import { Container } from '@mui/material'
import ImageGallery from './ImageGallery'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SelectApp /> */}
    {/* <ContainerApp /> */}
    <ImageGallery />
  </StrictMode>,
)
