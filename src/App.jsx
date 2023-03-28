import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import AuthContext from './contexts/AuthContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  const[isLogged, setIsLogged] = useState(false);
  const[user, setUser] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
        <CssBaseline>
          <AppRoutes />
        </CssBaseline>
      </AuthContext.Provider>
    </div>
  )
}

export default App
