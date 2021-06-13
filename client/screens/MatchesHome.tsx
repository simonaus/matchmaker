import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Match from '../components/Match';

interface Props {
  navigation: any;
  route: any;
}

const MatchesHome = (props: Props) => {
  const userInfo = props.route.params.userInfo;
  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Your matches</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('MatchesAdd', {
            userInfo: userInfo,
          });
        }}
      >
        <Text style={styles.button}>Make a new match</Text>
      </TouchableOpacity>
      <FlatList
        data={userInfo.matches}
        keyExtractor={match => match.id + ''}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('MatchesChat', {
                  id: item.id,
                  userId: userInfo.id,
                  firstName: item.first_name,
                  profilePicture: item.profile_picture,
                });
              }}
            >
              <Match
                id={item.id}
                firstName={item.first_name}
                profilePicture={item.profile_picture}
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

export default MatchesHome;
