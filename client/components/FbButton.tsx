import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import api from '../services/api';
import { FbUserInfo } from '../interfaces/interfaces';

interface Props {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUserInfo: Dispatch<SetStateAction<FbUserInfo>>;
  setFbAuthToken: Dispatch<SetStateAction<string>>;
}

const FbButton = (props: Props) => {
  function logoutWithFacebook() {
    LoginManager.logOut();
    props.setUserInfo({});
  }

  function getInfoFromToken(accessToken: string) {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      { accessToken, parameters: PROFILE_REQUEST_PARAMS },
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          if (result) {
            api.getUserInfoByFacebookId(result.id).then(userInfo => {
              if (userInfo.length < 1) {
                //if there is no user under the facebook idea, add user to database
                api.postUserWithFacebookId(result).then(response => {
                  props.setUserInfo(response);
                  props.setIsLoggedIn(true);
                });
              } else {
                console.log(userInfo[0]);
                props.setUserInfo(userInfo[0]);
                props.setIsLoggedIn(true);
              }
            });
          }
        }
      }
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  }

  function loginWithFacebook() {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = '';
            if (data) {
              accessToken = data.accessToken.toString();
            }
            props.setFbAuthToken(accessToken);
            getInfoFromToken(accessToken);
          });
        }
      },
      (error: Error) => {
        console.log('Login fail with error: ' + error);
      }
    );
  }

  const buttonText = 'Log in with Facebook';
  const onPressButton = loginWithFacebook;

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4267B2',
    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 20,
    marginVertical: 16,
  },
  view: {
    margin: 20,
  },
});

export default FbButton;
