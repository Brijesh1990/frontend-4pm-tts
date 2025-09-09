import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddFormApp from './AddFormApp'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddFormApp />
  </StrictMode>,
)
