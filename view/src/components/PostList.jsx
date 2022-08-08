import React, {useEffect, useState} from 'react';
import PostItem from './PostItem';

export default function PostList() {
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        fetch("/api/post")
            .then(response => {
                return response.json()
            })
            .then(postList => {
                setAllPosts(postList)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <div>
            {
                allPosts.map((post) => {
                    return <PostItem key={post._id} post={post}/>
                })
            }
        </div>
    )
}
