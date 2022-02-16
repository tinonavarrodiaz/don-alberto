import { StrictMode } from 'react'
import { render } from 'react-dom'
import './scss/styles.scss'
import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
