import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer.js'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore({
  reducer : rootReducer
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider> 
    </BrowserRouter>
  </StrictMode>
)
