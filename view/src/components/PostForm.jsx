import React, { Fragment, useState } from 'react';

export default function PostForm() {
    const [post, setPost] = useState("");
    const [errorVisible, setErrorVisible] = useState(false);


    const handleChangeText = (e) => {
        setPost(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("User"))
        const bodyRequest = {userId:user.userId, content:post}
        if(post !== "") {
            if(setErrorVisible){
                fetch("/api/post", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(bodyRequest)})
                    .then(() => {
                        console.log("publication réussite")
                        window.location.reload();

                    })
                    .catch(err => {
                        console.log(err)
                    })
                setErrorVisible(false);
            }
                
            setPost("")
        }else {
            setErrorVisible(true);
        }
    }

    return (
        <form className='PostForm' >
            <textarea className='PostForm__Input' value={post} onChange={handleChangeText} placeholder='Partager nous votre humeur'/>
            
            {
                errorVisible ? <p className='PostForm__Error'> Vous devez obligatoirement écrire pour publier </p> : <Fragment/>
            }

            <button type='submit' className='PostForm__Button' onClick={handleSubmit}> Publier </button>
        </form>
    )
}
