 import React, { useEffect, useState } from "react";
 import { fetchPosts } from "../services/api";
 import "../styles/feed.css"
import Post from "./post";
//  const Feed=()=>{
//     const [posts,setPosts]=useState([])
     
//     useEffect(()=>{
//         fetchPosts().then(response=>setPosts(response.data))

//     },[])
//     return(
//         <>
//           <div className="feed">
//             {posts.map((post)=>{
//                 return(
//                     <>
//                     <Post key={post.id} post={post}/>
//                     </>
//                 )
//             })}

//           </div>
//         </>
//     )
//  }
//  export default Feed;
const Feed = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const getPosts = async () => {
        const data = await fetchPosts();
        setPosts(data);
      };
      getPosts();
    }, []);
  
    return (
      <div className="feed">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  };
  
  export default Feed;