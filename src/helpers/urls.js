const API_ROOT = 'http://codeial.com:8000/api/v2';


export const APIUrls = {
    login: () => `${API_ROOT}/users/login`,
    signup: () => `${API_ROOT}/users/signup`,
    editProfile: () => `${API_ROOT}/users/edit`,
    fetchPosts: (page=1, limit=25) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
    userProfile: (userId) => `${API_ROOT}/users/${userId}`,
    userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
    
};