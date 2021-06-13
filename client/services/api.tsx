import { FbUserInfo } from '../interfaces/interfaces';

const getUserInfoByFacebookId = async (facebookId: string) => {
  const response = await fetch(`http://10.0.2.2:3001/users/facebook/${Number(facebookId)}`);
  const userInfo = await response.json();
  return userInfo;
};

const postUserWithFacebookId = async (fbUserInfo: FbUserInfo) => {
  const data = JSON.stringify({
    first_name: fbUserInfo.first_name,
    id: Number(fbUserInfo.id),
  });
  const response = await fetch('http://10.0.2.2:3001/users/facebook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const userInfo = await response.json();
  return userInfo;
};

const getUserInfo = async (userId: string) => {
  const response = await fetch(`http://10.0.2.2:3001/users/${userId}`);
  const userInfo = await response.json();
  return userInfo;
};

const verifyAndGetUser = async (userId: string, password: string) => {
  const response = await fetch(`http://10.0.2.2:3001/users/${userId}/${password}`);
  const userInfo = await response.json();
  return userInfo[0];
};

const getMessages = async (matchId: number) => {
  const response = await fetch(`http://10.0.2.2:3001/messages/${matchId}`);
  const messagesArray = await response.json();
  return messagesArray;
};

const postMessage = async (
  matchId: number,
  userId: number,
  message: string
) => {
  const data = JSON.stringify({
    matchId: matchId,
    createdBy: userId,
    message: message,
  });
  console.log('userid', userId);
  console.log('postmessagedata', data);
  const response = await fetch('http://10.0.2.2:3001/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const returnedMessage = await response.json();
  console.log('returned message', returnedMessage);
  return returnedMessage;
};

export default {
  getUserInfo,
  getUserInfoByFacebookId,
  postUserWithFacebookId,
  verifyAndGetUser,
  getMessages,
  postMessage,
};
