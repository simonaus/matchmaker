import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogIn from './screens/LogIn';
import ProfileHome from './screens/ProfileHome';
import Friends from './screens/Friends';
import Matches from './screens/Matches';
import { FbUserInfo } from './interfaces/interfaces';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<FbUserInfo>({});
  const [fbAuthToken, setFbAuthToken] = useState<string>('');

  let homeScreen: Element;
  const Tab = createBottomTabNavigator();

  if (isLoggedIn) {
    homeScreen = (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#dddddd',
            inactiveBackgroundColor: '#666666',
            tabStyle: styles.tab,
            labelStyle: styles.tabText,
            showLabel: false,
          }}
        >
          <Tab.Screen
            name="Matches"
            children={() => (
              <Matches
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                fbAuthToken={fbAuthToken}
              />
            )}
            options={{
              tabBarLabel: 'Matches',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="account-supervisor"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Friends"
            children={() => (
              <Friends
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                fbAuthToken={fbAuthToken}
              />
            )}
            options={{
              tabBarLabel: 'Friends',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="playlist-plus"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileHome"
            children={() => (
              <ProfileHome
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                fbAuthToken={fbAuthToken}
              />
            )}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    homeScreen = (
      <LogIn
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
        setFbAuthToken={setFbAuthToken}
      />
    );
  }

  return <View style={styles.view}>{homeScreen}</View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  tabText: {
    fontSize: 23,
    alignSelf: 'center',
    color: 'black',
  },
  tab: {
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#eaebed',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});

export default App;
