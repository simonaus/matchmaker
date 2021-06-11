import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogIn from './screens/LogIn';
import Profile from './screens/Profile';
import Friends from './screens/Friends';
import Matches from './screens/Matches';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          }}>
          <Tab.Screen
            name="Matches"
            component={Matches}
            options={{
              tabBarLabel: 'Matches',
              tabBarIcon: ({color, size}: {color: string; size: number}) => (
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
            component={Friends}
            options={{
              tabBarLabel: 'Friends',
              tabBarIcon: ({color, size}: {color: string; size: number}) => (
                <MaterialCommunityIcons
                  name="playlist-plus"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}: {color: string; size: number}) => (
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
    homeScreen = <LogIn setIsLoggedIn={setIsLoggedIn} />;
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
