import React, {useState} from 'react'
import { checkIsEmailLogin, emailLinkLogin } from '../api/user'
import {loginAtom} from "./Atom"
import {atom, useAtom} from 'jotai'

export const nameAtom = atom('');

export const Login = () =>{

  const [email, setEmail] = useState('')
  const [loggedin, setLoggedin] = useAtom(loginAtom)
  const [userEmail, setUserEmail] = useAtom(nameAtom)

  const handleLogin = async(email:string) => {
    await emailLinkLogin(email).then(res=>setLoggedin(!res))
    localStorage.setItem("email", email)
    setUserEmail(email)
  }

  return (<div>
    <input type="email" placeholder="이메일 입력" onBlur={e=>setEmail(e.target.value)} />

    <button onClick={()=>handleLogin(email)}>로그인</button>
  </div>)
}