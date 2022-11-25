import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LoginContext from './store/LoginStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginContext>
      <App />
    </LoginContext>
  </React.StrictMode>
)
