import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Friend from '../components/Friend';

interface Props {
  navigation: any;
  route: any;
}

const MatchesAdd = (props: Props) => {
  const userInfo = props.route.params.userInfo;
  const matchFriends = userInfo.friends.filter(
    (friend: any) => friend.is_match
  );

  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Make a match</Text>
      <Text style={styles.subHeader}>Select a friend to match</Text>
      <FlatList
        data={matchFriends}
        keyExtractor={match => match.id + ''}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('MatchesPair', {
                  id: item.id,
                  firstName: item.first_name,
                  profilePicture: item.profile_picture,
                  userInfo: userInfo,
                });
              }}
            >
              <Friend
                id={item.id}
                firstName={item.first_name}
                profilePicture={item.profile_picture}
                isDragging={false}
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
  subHeader: {
    fontSize: 30,
    marginTop: 50,
  },
  mainHeader: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 60,
    fontFamily: 'MomcakeThin-9Y6aZ',
    marginBottom: 20,
  },
});

export default MatchesAdd;
