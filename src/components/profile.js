
import React, { useEffect, useInsertionEffect, useState } from "react"
import { fetchUser } from "../services/api"
import "../styles/profile.css"

// const Profile=({userId})=>{
//     const [user,setUser]=useState(null)
//     useEffect(()=>{
//         fetchUser(userId).then(response => setUser(response.data)); 
//     },[userId])
//     return user?(
//         <>
//           <div className="profile">
//             <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.username} className="profile-img" />
//             <h4>{user.username}</h4>
//             <p>@{user.username}</p>
//           </div>
//         </>):(
//             <p>Loading....</p>
//         )
    
// }
// export default Profile;
// const Profile = ({ userId }) => {
//     const [user, setUser] = useState(null);
  
//     useEffect(() => {
//       const getUser = async () => {
//         const userData = await fetchUser(userId);
//         setUser(userData);
//       };
//       getUser();
//     }, [userId]);
  
//     return user ? (
//       <div className="profile">
//         <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.username} className="profile-img" />
//         <h4>{user.username}</h4>
//         <p>@{user.username}</p>
//       </div>
//     ) : (
//       <p>Loading...</p>
//     );
//   };
  
//   export default Profile;
const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [following, setFollowing] = useState(false);
  
    useEffect(() => {
      const getUser = async () => {
        const userData = await fetchUser(userId);
        setUser(userData);
      };
      getUser();
    }, [userId]);
  
    // Follow/Unfollow handler
    const handleFollowToggle = () => {
      setFollowing(!following);
    };
  
    return user ? (
      <div className="profile">
        <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.username} className="profile-img" />
        <h4>{user.username}</h4>
        <p>@{user.username}</p>
        <button onClick={handleFollowToggle} className="follow-button">
          {following ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    ) : (
      <p>Loading...</p>
    );
  };
  
  export default Profile;
