import React, { Dispatch, SetStateAction } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsHome from './FriendsHome';
import FriendsAdd from './FriendsAdd';
import FriendsProfile from './FriendsProfile';
import { FbUserInfo } from '../interfaces/interfaces';

const Stack = createStackNavigator();

interface Props {
  userInfo: FbUserInfo;
  setUserInfo: Dispatch<SetStateAction<FbUserInfo>>;
  fbAuthToken: string;
}

const Friends = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendsHome"
        component={FriendsHome}
        initialParams={{
          userInfo: props.userInfo,
          setUserInfo: props.setUserInfo,
        }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendsAdd"
        component={FriendsAdd}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Friends;
