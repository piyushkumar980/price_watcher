import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './i18n'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)