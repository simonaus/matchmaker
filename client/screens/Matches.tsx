import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MatchesHome from './MatchesHome';
import MatchesAdd from './MatchesAdd';
import MatchesPair from './MatchesPair';
import MatchesConfirm from './MatchesConfirm';
import MatchesChat from './MatchesChat';
import MatchesProfile from './MatchesProfile';

const Stack = createStackNavigator();

const Matches = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MatchesHome"
        component={MatchesHome}
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
