import React from 'react'

const LoggedIn = () => {
    const handleLogin=()=>{}
    const handleLogout=()=>{}

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is logged in/logged out</div>
    </div>
  )
}

export default LoggedIn
