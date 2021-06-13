import React, { Dispatch, SetStateAction } from 'react';
import Profile from '../components/Profile';
import { FbUserInfo } from '../interfaces/interfaces';

interface Props {
  userInfo: FbUserInfo;
  setUserInfo: Dispatch<SetStateAction<FbUserInfo>>;
  fbAuthToken: string;
}

const ProfileHome = (props: Props) => {
  return <Profile user={true} userInfo={props.userInfo} />;
};

export default ProfileHome;
