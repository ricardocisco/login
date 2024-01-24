import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebaseConfig'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'

export default function Home() {

  const [user, loding, error] = useAuthState(auth)

  const logout = () => {
    signOut(auth)
  } 


  return (
    <div>
      <h1>Home</h1>
      <div>
        {user ? <p>Logado</p> : <p>Deslogado</p>}
      </div>
      <p>Seja Bem Vindo </p>
      <Link to="/login">Entrar</Link>
      <button type='submit' onClick={logout}>Logout</button>
      <Link to="/register">Registrar</Link>
    </div>
  )
}
