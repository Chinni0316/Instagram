import React, { useEffect, useState } from "react";
import { fetchComments, fetchUser } from "../services/api";
import axios from "axios";
import "../styles/post.css"
// const Post=({post})=>{

//     const [user,setUser]=useState(null)
//     const [comment,setComment]=useState([])

//     useEffect(()=>{
//         fetchUser(post.userId).then(response=>setUser(response.data))
//         fetchComments(post.id).then(response=>setComment(response.data))
//     },[post.userId,post.id])
//     return(
//         <>
//           <div className="post">
//              <div className="post-header">
//                 {user &&(
//                     <>
//                         <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.username} className="user-avatar" />
//                         <span>{user.username}</span>
//                     </>
//                 )}

//               </div>
//               <p>{post.body}</p>
//               <div className="post-actions">
//                 <button>Like</button>
//                 <button>Comment</button>
//                </div>
//                <div className="post-comments">
//                 {comment.slice(0,2).map(comments=>{
//                     return(
//                         <p key={comments.id}><strong>{comments.name}</strong>:{comments.body}</p>
//                     )
//                 })}

//                </div>

//             </div>
//         </>
//     )
// }
// export default Post;
// const Post = ({ post }) => {
//     const [user, setUser] = useState(null);
//     const [comments, setComments] = useState([]);
  
//     useEffect(() => {
//       const getUserData = async () => {
//         const userData = await fetchUser(post.userId);
//         setUser(userData);
//       };
//       getUserData();
  
//       const getComments = async () => {
//         const commentData = await fetchComments(post.id);
//         setComments(commentData);
//       };
//       getComments();
//     }, [post.userId, post.id]);
  
//     const handleLike = () => {
//       // Implement "like" functionality here
//     };
  
//     const handleComment = () => {
//       // Implement "comment" functionality here
//     };
  
//     return (
//       <div className="post">
//         <div className="post-header">
//           {user && (
//             <>
//               <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.username} className="user-avatar" />
//               <span>{user.username}</span>
//             </>
//           )}
//         </div>
//         <p>{post.body}</p>
//         <div className="post-actions">
//           <button onClick={handleLike}>Like</button>
//           <button onClick={handleComment}>Comment</button>
//         </div>
//         <div className="post-comments">
//           {comments.slice(0, 2).map(comment => (
//             <p key={comment.id}><strong>{comment.name}</strong>: {comment.body}</p>
//           ))}
//         </div>
//       </div>
//     );
//   };
  

//   export default Post;
const Post = ({ post }) => {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [liked, setLiked] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [showComments, setShowComments] = useState(false);
  
    useEffect(() => {
      const getUserData = async () => {
        const userData = await fetchUser(post.userId);
        setUser(userData);
      };
      getUserData();
  
      const getComments = async () => {
        const commentData = await fetchComments(post.id);
        setComments(commentData);
      };
      getComments();
    }, [post.userId, post.id]);
  
    // Like handler
    const handleLike = () => {
      setLiked(!liked);
    };
  
    // Comment submit handler
    const handleCommentSubmit = (e) => {
      e.preventDefault();
      if (commentText.trim()) {
        setComments([...comments, { id: comments.length + 1, name: 'You', body: commentText }]);
        setCommentText('');
      }
    };
  
    // Toggle comments visibility
    const toggleComments = () => {
      setShowComments(!showComments);
    };
  
    return (
      <div className="post">
        <div className="post-header">
          {user && (
            <>
              <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.username} className="user-avatar" />
              <span>{user.username}</span>
            </>
          )}
        </div>
        <p>{post.body}</p>
        <div className="post-actions">
          <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
          <button onClick={toggleComments}>Comments</button>
        </div>
        {showComments && (
          <div className="post-comments">
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="comment-input"
              />
              <button type="submit">Post</button>
            </form>
            {comments.slice(0, 5).map(comment => (
              <p key={comment.id}><strong>{comment.name}</strong>: {comment.body}</p>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Post;