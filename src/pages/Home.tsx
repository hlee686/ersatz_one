import React, { useState, useEffect } from 'react';
import {getPostsByUid} from "../api/post"
import { useAtom } from 'jotai';
import { postAtom, loginAtom} from './Atom.js';
import {Card} from "./Card.js"
import { emailLinkLogin, logOut } from '../api/user.js';
import { Login } from './Login.js';
import { useNavigate } from 'react-router-dom';
import { DocumentData } from 'firebase/firestore';
import { DefaultCard } from './DefaultCard.js';

export const Home = () => {

  const initialLoginState = localStorage.getItem('loginState') === 'true';


  const [posts, setPosts] = useAtom(postAtom);
  const [bool, setBool] = useState(false);
  const [loggedin, setLoggedin] = useAtom(loginAtom);
  const nav = useNavigate()

  const allPosts = async () => {
    const postList = await getPostsByUid();
    setPosts(postList);
    setBool(true);
  };

  const handleLogOut = () => {
    localStorage.setItem('loginState', 'false');
    logOut();
    setLoggedin(false);
  };

  const handleLogin = async() => {
    localStorage.setItem('loginState', 'true');
    nav("/login")
  }
  const newPost = ()=>{
    if(loggedin){
      nav('/newPost')
    }
  }

  useEffect(() => {
    const storedLoginState = localStorage.getItem('loginState') === 'true';
    setLoggedin(storedLoginState);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <button onClick={allPosts}>글 읽어오기</button>
      {bool && <Card />}

      {loggedin ? (
        <div>
          로그인 상태
          <button onClick={handleLogOut}>로그아웃</button>
        </div>
      ) : (
        <div>로그아웃됨</div>
      )}

        {loggedin && <div onClick={newPost}>새 블로그 쓰기</div>}

      {!loggedin && <div onClick={handleLogin}>로그인</div>}

    </div>
  );
};
