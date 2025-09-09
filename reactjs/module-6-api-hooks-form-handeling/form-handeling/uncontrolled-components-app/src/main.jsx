import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddFormData from './AddFormData'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddFormData />
  </StrictMode>,
)
