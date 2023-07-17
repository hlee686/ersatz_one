import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form'
import {getPostsByUid, writePost} from "../api/post"
import {NEW_POST_TYPE}  from '../types/post';
import {v4 as uuidv4} from 'uuid'
import { nameAtom } from './Login';
import {useAtom, useAtomValue} from "jotai"


export const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();

  const [writer, setWriter] = useAtom(nameAtom)

  useEffect(()=>{
    const email = localStorage.getItem("email")
    if(email){
      setWriter(email)
    }
  },[])

  const onSubmit = async (data: any) => {
    const newPost = {
      uid: '',
      author: writer,
      postId: uuidv4(),
      seriesId: '',
      title: data.title,
      content: data.content,
      thumbnail: 'TH',
      tags: [data.tag],
      state: 'published' as const,
    };

    await writePost(newPost);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          {...register('title', { required: true })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="태그를 입력하세요"
          {...register('tag', { required: true })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          {...register('content', { required: true })}
        />
      </div>
      <button type="submit">출간하기</button>
    </form>
  );
};
