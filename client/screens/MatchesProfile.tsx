import React from 'react';
import Profile from '../components/Profile';

interface Props {
  navigation: any;
  route: any;
}

const ProfileHome = (props: Props) => {
  return <Profile user={false} userId={props.route.params.id} />;
};

export default ProfileHome;
