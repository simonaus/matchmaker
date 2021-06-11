import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { messagesArrayMock } from '../services/mock';
import Message from '../components/Message';

interface Props {
  navigation: any;
  route: any;
}

const MatchesChat = (props: Props) => {
  const [messageContent, setMessageContent] = useState<string>('');

  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>{props.route.params.firstName}</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/User2.jpg')}
      />
      <FlatList
        data={messagesArrayMock}
        keyExtractor={match => match.id + ''}
        renderItem={({ item }) => {
          return (
            <Message
              id={item.id}
              user={item.user}
              createdOn={item.createdOn}
              content={item.content}
            />
          );
        }}
      />
      <TextInput
        style={styles.input}
        value={messageContent}
        onChangeText={setMessageContent}
        multiline={true}
        numberOfLines={4}
        placeholder="Type message"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eaebed',
    height: '100%',
  },
  mainHeader: {
    paddingTop: 30,
    fontSize: 60,
    fontFamily: 'MomcakeThin-9Y6aZ',
    alignSelf: 'center',
  },
  image: {
    height: '20%',
    width: '20%',
    resizeMode: 'contain',
    borderRadius: 150,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    backgroundColor: '#eeeeee',
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default MatchesChat;
