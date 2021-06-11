import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { userMock2 } from '../services/mock';

interface Props {
  user: boolean;
  userId: number;
}

const Profile = (props: Props) => {
  let editButton;
  if (props.user) {
    editButton = (
      <View>
        <TouchableOpacity
          onPress={() => {
            return;
          }}
        >
          <Text style={styles.button}>Edit Profile</Text>
        </TouchableOpacity>
        <Text style={styles.subHeader}>UserID: {userMock2.id}</Text>
      </View>
    );
  }

  let isMatch: string = 'Here to make matches';
  if (userMock2.isMatch === 'true') {
    isMatch = 'Here to be matched';
  }

  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.mainHeader}>{userMock2.firstName}</Text>
        <Image
          style={styles.image}
          source={require('../assets/images/User2.jpg')}
        />
        {editButton}
        <View style={styles.container}>
          <Text style={styles.subHeader}>{isMatch}</Text>
        </View>
        <Text style={styles.subHeader}>About me</Text>
        <View style={styles.container}>
          <Text style={styles.description}>{userMock2.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eaebed',
    height: '100%',
  },
  scroll: {
    width: '100%',
    height: 1000,
    alignItems: 'center',
  },
  mainHeader: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 60,
    fontFamily: 'MomcakeThin-9Y6aZ',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  container: {
    marginVertical: 20,
    paddingBottom: 20,
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#222222',
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'white',
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  image: {
    height: '30%',
    width: '80%',
    resizeMode: 'contain',
    borderRadius: 150,
  },
  description: {
    fontSize: 25,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: '5%',
  },
});

export default Profile;
