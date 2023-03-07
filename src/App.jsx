import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <AppRoutes />
      </CssBaseline>
    </div>
  )
}

export default App
