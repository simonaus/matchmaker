import { FbUserInfo } from '../interfaces/interfaces';

const getUserInfoByFacebookId = async (facebookId: string) => {
  const response = await fetch(
    `http://10.0.2.2:3001/users/facebook/${facebookId}`
  );
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

const getFriendInfo = async (userId: string) => {
  const response = await fetch(
    `http://10.0.2.2:3001/friends/${Number(userId)}`
  );
  const userInfo = await response.json();
  return userInfo;
};

const getUserInfo = async (userId: string) => {
  const response = await fetch(`http://10.0.2.2:3001/users/${Number(userId)}`);
  const userInfo = await response.json();
  return userInfo;
};

const getProfileInfo = async (userId: number) => {
  const response = await fetch(`http://10.0.2.2:3001/profile/${userId}`);
  const profileInfo = await response.json();
  return profileInfo;
};

const verifyAndGetUser = async (userId: string, password: string) => {
  const response = await fetch(
    `http://10.0.2.2:3001/users/${userId}/${password}`
  );
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
  const response = await fetch('http://10.0.2.2:3001/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const returnedMessage = await response.json();
  return returnedMessage;
};

const postMatch = async (
  user_1: number,
  user_2: number,
  matched_by: number
) => {
  const data = JSON.stringify({
    user_1,
    user_2,
    matched_by,
  });
  const response = await fetch('http://10.0.2.2:3001/matches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const returnedMessage = await response.json();
  return returnedMessage;
};

const postFriend = async (user_1: number, user_2: number) => {
  const data = JSON.stringify({
    user_1,
    user_2,
  });
  const response = await fetch('http://10.0.2.2:3001/friends', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
  const returnedMessage = await response.json();
  return returnedMessage;
};

const postUser = async (
  email: string,
  first_name: string,
  password: string
) => {
  const data = JSON.stringify({
    email,
    first_name,
    password,
  });
  const response = await fetch('http://10.0.2.2:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  const returnedMessage = await response.json();
  return returnedMessage;
};

export default {
  getFriendInfo,
  getUserInfo,
  getProfileInfo,
  getUserInfoByFacebookId,
  postUserWithFacebookId,
  verifyAndGetUser,
  getMessages,
  postUser,
  postMessage,
  postMatch,
  postFriend,
};
