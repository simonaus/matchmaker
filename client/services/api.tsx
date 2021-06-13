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

export default { getUserInfo, getUserInfoByFacebookId, postUserWithFacebookId };
