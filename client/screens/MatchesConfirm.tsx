import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

const MatchesConfirm = (props: Props) => {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  let returnValue = (
    <View style={styles.view}>
      <Text style={styles.subHeader}>
        Are you sure you want to match {props.route.params.firstName1}
        with {props.route.params.firstName2}?
      </Text>
      <View style={styles.matchBox}>
        <Image
          style={styles.image}
          source={require('../assets/images/User2.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../assets/images/User2.jpg')}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setIsConfirmed(true);
        }}>
        <Text style={styles.button}>Confirm Match</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Text style={styles.button}>
          Go back to matching {props.route.params.firstName1}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (isConfirmed) {
    returnValue = (
      <View style={styles.view}>
        <Text style={styles.subHeader}>
          You've successfully matched {props.route.params.firstName1} with
          {props.route.params.firstName2}! They will be informed for the match
          and free to chat.
        </Text>
        <View style={styles.matchBox}>
          <Image
            style={styles.image}
            source={require('../assets/images/User2.jpg')}
          />
          <Image
            style={styles.image}
            source={require('../assets/images/User2.jpg')}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MatchesHome');
          }}>
          <Text style={styles.button}>Go back to your matches</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return returnValue;
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eaebed',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  mainHeader: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 60,
    fontFamily: 'MomcakeThin-9Y6aZ',
    marginBottom: 20,
  },
  matchBox: {
    flexDirection: 'row',
    height: 130,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '95%',
    width: '95%',
    resizeMode: 'contain',
    borderRadius: 150,
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

export default MatchesConfirm;
