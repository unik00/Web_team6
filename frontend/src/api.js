import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost/api`,
  headers:{
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export const Signin = (account) => {
  return api.post(`/auth/login`,JSON.stringify(account));
} 

export const Signup = (account) => {
  return api.post(`/auth/signup`,JSON.stringify(account));
} 

export const Logout = (account) => {
  return api.get(`auth/logout`,  {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const ViewMyProfile = (account) => {
  return api.get(`profile`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const ViewOtherProfile = (account, other_id) => {
  return api.get(`profile/${other_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}


export const UpdateProfile = (account, userDataUpdate) => {
  return api.put(`profile/edit`,userDataUpdate, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const SendMessage = (account, sendMessageData) => {
  return api.put(`message/send`, sendMessageData,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const GetMessages = (account) => {
  return api.get(`/message`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const ReadMessage = (account,idConversation) => {
  return api.get(`/message/${idConversation}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const getListUser = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `auth/list?offset=${offset}&limit=${limit}&random=${random}` 
                                  : `auth/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getListStudent = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `student/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `student/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getListCompany = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `company/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `company/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getListSchool = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `school/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `school/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const followUser = (account, other_id) => {
  return api.get(`follow/add?id=${other_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const unfollowUser = (account, other_id) => {
  return api.get(`follow/remove?id=${other_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}