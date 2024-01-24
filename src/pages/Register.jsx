import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";
import { Link } from 'react-router-dom';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailExistente, setEmailExistente] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleRegister() {
      createUserWithEmailAndPassword(email, password)
      console.log(user)
  }


  return (
    <div>
      <form>
        <h1>Registrar-se</h1>
        <div>
          <label>Email</label>
          <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          {emailExistente ? <p>Email Já cadastrado</p> : ""}
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
        <button type="submit" onClick={handleRegister}>Register</button>
      </form>
      <p>Já tem uma conta?<Link to="/login">Entrar</Link></p>

    </div>
  )
}
