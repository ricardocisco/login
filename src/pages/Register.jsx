import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";
import { Link } from 'react-router-dom';


export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleRegister(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
      
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
          {mensagem}
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
