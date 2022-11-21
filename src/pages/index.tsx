import React from 'react'
import secureLocalStorage from 'react-secure-storage'
import Dashboard from './dashboard'
import LoginScreen from './login'


const index = () => {
  var token = secureLocalStorage.getItem('token')
  return (
    <div>
      {token && <Dashboard />}
      {!token && <LoginScreen />}
    </div>
  )
}

export default index