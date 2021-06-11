import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { friendsArrayMock1 } from '../services/mock';
import Friend from '../components/Match';

interface Props {
  navigation: any;
}

const FriendsHome = (props: Props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Your Friends</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('FriendsAdd');
        }}
      >
        <Text style={styles.button}>Add a friend</Text>
      </TouchableOpacity>
      <FlatList
        data={friendsArrayMock1}
        keyExtractor={friend => friend.id + ''}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('FriendsProfile', {
                  id: item.id,
                  firstName: item.user2Name,
                  profilePicture: item.user2ProfilePicture,
                });
              }}
            >
              <Friend
                id={item.id}
                user1Name={item.user1Name}
                user2Name={item.user2Name}
                user2ProfilePicture={item.user2ProfilePicture}
                matchedByName={item.matchedByName}
                createdOn={item.createdOn}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eaebed',
    height: '100%',
    alignItems: 'center',
  },
  mainHeader: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 60,
    fontFamily: 'MomcakeThin-9Y6aZ',
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#222222',
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'white',
  },
});

export default FriendsHome;
