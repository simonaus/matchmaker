import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsHome from './FriendsHome';
import FriendsAdd from './FriendsAdd';
import FriendsProfile from './FriendsProfile';

const Stack = createStackNavigator();

const Friends = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendsHome"
        component={FriendsHome}
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
