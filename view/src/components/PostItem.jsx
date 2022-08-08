import React, { Fragment, useState, useEffect } from 'react'

export default function PostItem(props) {
  const { post } = props;
  const currentUser = JSON.parse(localStorage.getItem("User"));
  const [allUserData, setAllUserData] = useState({})
  /* const date = new Date(); */

  useEffect(() => {
    fetch(`/api/user/${post.userId}`)
      .then(response => {
        return response.json()
      })
      .then(user => {
        setAllUserData(user)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const deletePost = () => {
    fetch(`/api/post/${post._id}`, {method:"DELETE"})
      .then(() => {
        console.log("suppression effectuer");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <article className='Post'>
      <header className='Post__Header'>

        <h1> { allUserData.userName } </h1>
        
        <h2>
          {post.day > 9 ?
          post.day : "0" + post.day}
          /
          {post.month > 9 ? post.month : "0" + post.month}
          /
          {post.year}

          {" - "}

          {post.hour > 9 ?
          post.hour : "0" + post.hour}
          :
          
          {post.minute > 9 ?
          post.minute : "0" + post.minute}
        </h2>
      </header>
      <p className='Post__Message'>{post.content}</p>

      {
        currentUser ? 
          currentUser.userId === post.userId ? 
            <button onClick={deletePost}>Supprimer</button>
            :
            <Fragment/>
        :
        <Fragment/>
      }

      
    </article>
  )
}
