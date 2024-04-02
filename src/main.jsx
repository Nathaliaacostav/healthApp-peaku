import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './styles/global.sass'
import SignIn from './pages/SignIn/index.jsx'
import Welcome from './pages/Welcome/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)