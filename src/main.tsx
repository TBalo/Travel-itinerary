import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PageRoutes from './navigation/PageRoutes'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PageRoutes />
  </React.StrictMode>,
)
