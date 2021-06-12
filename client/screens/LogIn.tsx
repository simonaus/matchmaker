import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FbButton from '../components/FbButton';
import { FbUserInfo } from '../interfaces/interfaces';

interface Props {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUserInfo: Dispatch<SetStateAction<FbUserInfo>>;
  setFbAuthToken: Dispatch<SetStateAction<string>>;
}

const LogIn = (props: Props) => {
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerFirstname, setRegisterFirstname] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [registerRetypePassword, setRegisterRetypePassword] =
    useState<string>('');

  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.mainHeader}>Matchmaker</Text>
        <Text style={styles.subHeader}>Log-in</Text>
        <View style={styles.container}>
          <FbButton
            setIsLoggedIn={props.setIsLoggedIn}
            setUserInfo={props.setUserInfo}
            setFbAuthToken={props.setFbAuthToken}
          />
          <Text style={styles.text}>or log in with Matchmaker</Text>
          <TextInput
            style={styles.input}
            value={loginUsername}
            onChangeText={setLoginUsername}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            value={loginPassword}
            onChangeText={setLoginPassword}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={() => {
              props.setIsLoggedIn(true);
            }}
          >
            <Text style={styles.button}>Log in</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeader}>Sign up</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={registerEmail}
            onChangeText={setRegisterEmail}
            placeholder="E-mail"
          />
          <TextInput
            style={styles.input}
            value={registerFirstname}
            onChangeText={setRegisterFirstname}
            placeholder="First name"
          />
          <TextInput
            style={styles.input}
            value={registerPassword}
            onChangeText={setRegisterPassword}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TextInput
            style={styles.input}
            value={registerRetypePassword}
            onChangeText={setRegisterRetypePassword}
            secureTextEntry={true}
            placeholder="Retype password"
          />
          <TouchableOpacity
            onPress={() => {
              props.setIsLoggedIn(true);
            }}
          >
            <Text style={styles.button}>Sign up</Text>
          </TouchableOpacity>
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
  },
  container: {
    marginVertical: 20,
    paddingBottom: 20,
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    backgroundColor: '#eeeeee',
    width: 300,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#222222',
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'white',
  },
});

export default LogIn;
