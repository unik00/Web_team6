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