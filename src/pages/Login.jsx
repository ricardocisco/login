import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../services/firebaseConfig";
import { Navigate } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignin(e) {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  if(user){
    return (
      <Navigate to="/"/>
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email</label>
          <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSignin}>Login</button>
      </form>
    </div>
  )
}
