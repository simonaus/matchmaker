import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {matchesArrayMock1} from '../services/mock';
import Match from '../components/Match';

interface Props {
  navigation: any;
}

const MatchesHome = (props: Props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Your matches</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('MatchesAdd');
        }}>
        <Text style={styles.button}>Make a new match</Text>
      </TouchableOpacity>
      <FlatList
        data={matchesArrayMock1}
        keyExtractor={match => match.id + ''}
        renderItem={({item}) => {
          return (
            <Match
              id={item.id}
              user1Name={item.user1Name}
              user2Name={item.user2Name}
              user2ProfilePicture={item.user2ProfilePicture}
              matchedByName={item.matchedByName}
              createdOn={item.createdOn}
            />
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
