import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Friend from '../components/Friend';
import api from '../services/api';

interface Props {
  navigation: any;
  route: any;
}

const FriendsAdd = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [friendVisible, setFriendVisible] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any>({});

  const handleSubmit = async () => {
    const apiResponse = await api.getFriendInfo(searchTerm);
    setSearchResult(apiResponse);
    setSearchTerm('');
    setFriendVisible(true);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Add a friend</Text>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search by UserID"
        onSubmitEditing={handleSubmit}
      />
      <View
        style={[
          styles.view,
          { opacity: friendVisible ? 1 : 0 },
          { marginTop: '10%' },
        ]}
      >
        <Friend
          id={searchResult.id}
          firstName={searchResult.firstName}
          profilePicture={searchResult.profilePicture}
          isDragging={false}
        />
        <TouchableOpacity
          onPress={async () => {
            await api.postFriend(
              props.route.params.userInfo.id,
              searchResult.id
            );
            const newUserInfo = await api.getUserInfo(
              props.route.params.userInfo.id
            );
            props.route.params.setUserInfo(newUserInfo[0]);
            props.navigation.navigate('FriendsHome', {
              userInfo: newUserInfo[0],
            });
          }}
        >
          <Text style={styles.button}>Add {searchResult.firstName}?</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    backgroundColor: '#eeeeee',
    width: 300,
    marginTop: 20,
    fontSize: 30,
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

export default FriendsAdd;
