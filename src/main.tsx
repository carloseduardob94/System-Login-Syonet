import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'

/* Imports Pages */

import { Home } from './page/Home'
import { SignUp } from './page/SignUp'
import { Users } from './page/Users'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import { RequireAuth } from './contexts/Auth/RequireAuth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/users" element={<RequireAuth><Users /></RequireAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
