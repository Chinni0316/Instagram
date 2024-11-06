import axios from "axios"
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  
  // Fetch posts
  export const fetchPosts = async () => {
    const response = await api.get('/posts');
    return response.data;
  };
  
  // Fetch user by ID
  export const fetchUser = async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  };
  
  // Fetch comments for a post
  export const fetchComments = async (postId) => {
    const response = await api.get(`/posts/${postId}/comments`);
    return response.data;
  };
  
  export default api;