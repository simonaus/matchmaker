import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  id: number;
  firstName: string;
  profilePicture: string;
  isDragging: boolean;
}

const Friend = (props: Props) => {
  let returnValue: JSX.Element;
  if (props.isDragging) {
    returnValue = (
      <View style={styles.imageView}>
        <Image
          style={styles.imageDrag}
          source={require('../assets/images/User2.jpg')}
        />
      </View>
    );
  } else {
    returnValue = (
      <View style={styles.view}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../assets/images/User2.jpg')}
          />
        </View>
        <Text style={styles.text}>{props.firstName}</Text>
      </View>
    );
  }
  return returnValue;
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    width: 350,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
    borderRadius: 150,
  },
  imageView: {
    height: '80%',
    width: '40%',
  },
  imageDrag: {
    height: 120,
    width: 120,
    borderRadius: 20,
    marginLeft: '8%',
  },
  text: {
    fontSize: 27,
  },
});

export default Friend;
