import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import api from '../services/api';

interface Props {
  user: boolean;
  userId: any;
}

const Profile = (props: Props) => {
  const [profileInfo, setProfileInfo] = useState<any>({});
  const [isMatch, setIsMatch] = useState<string>('Here to make matches');

  useEffect(() => {
    api.getProfileInfo(props.userId).then(newProfileInfo => {
      setProfileInfo(newProfileInfo);
      if (profileInfo.is_match) {
        setIsMatch('Here to be matched');
      }
    });
  }, [props.userId, profileInfo.is_match]);

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
        <Text style={styles.subHeader}>UserID: {profileInfo.id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.mainHeader}>{profileInfo.first_name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'http://10.0.2.2:3001/' + profileInfo.profile_picture,
          }}
        />
        {editButton}
        <View style={styles.container}>
          <Text style={styles.subHeader}>{isMatch}</Text>
        </View>
        <Text style={styles.subHeader}>About me</Text>
        <View style={styles.container}>
          <Text style={styles.description}>{profileInfo.description}</Text>
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
