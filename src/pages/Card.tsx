import React from 'react';
import '../css/Card.css';
import { useAtom } from 'jotai';
import { postAtom } from './Atom';
import { deletePost, editPost } from '../api/post';
import {nameAtom} from "./Login"

export const Card = () => {

  const [posts, setPosts] = useAtom(postAtom);
  const [userEmail, setUserEmail] = useAtom(nameAtom)

  const deleteContent = (id:any) => {
    deletePost(id)
  }
  
  return (<div style={{display: "flex"}}>
    {posts.map((item)=><div key={item.postId} className="card">
      제목: {item.title}
      글쓴이: {item.author}
      <button onClick={()=>deleteContent(item.postId)}>삭제</button>
      </div>)}
  </div>)
}
