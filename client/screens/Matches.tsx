import React, { Dispatch, SetStateAction } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchesHome from './MatchesHome';
import MatchesAdd from './MatchesAdd';
import MatchesPair from './MatchesPair';
import MatchesConfirm from './MatchesConfirm';
import MatchesChat from './MatchesChat';
import MatchesProfile from './MatchesProfile';
import { FbUserInfo } from '../interfaces/interfaces';

const Stack = createStackNavigator();

interface Props {
  userInfo: FbUserInfo;
  setUserInfo: Dispatch<SetStateAction<FbUserInfo>>;
  fbAuthToken: string;
}

const Matches = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MatchesHome"
        component={MatchesHome}
        initialParams={{ userInfo: props.userInfo }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchesAdd"
        component={MatchesAdd}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchesPair"
        component={MatchesPair}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchesConfirm"
        component={MatchesConfirm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchesChat"
        component={MatchesChat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchesProfile"
        component={MatchesProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Matches;
