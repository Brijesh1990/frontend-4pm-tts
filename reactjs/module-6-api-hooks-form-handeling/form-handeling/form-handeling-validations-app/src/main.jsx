import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import FeedbackApp from './FeedbackApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackApp />
  </StrictMode>,
)
