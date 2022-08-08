import React, { Fragment } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'

export default function HomePage() {  
  return (
    <section>
      {localStorage.getItem("User") ? <PostForm/> : <Fragment/>}
      <PostList/>
    </section>
  )
}
