import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Message from '../components/Message';
import api from '../services/api';
import moment from 'moment';

interface Props {
  navigation: any;
  route: any;
}

const MatchesChat = (props: Props) => {
  const [messageContent, setMessageContent] = useState<string>('');
  const [messagesArray, setMessagesArray] = useState<any[]>([]);

  useEffect(() => {
    console.log('in useffect');
    console.log('matchid', props.route.params.id);
    api.getMessages(props.route.params.id).then(returnedMessages => {
      const returnedMessagesArray = returnedMessages.map(message => {
        let isUser = false;
        if (message.created_by === props.route.params.userId) {
          isUser = true;
        }
        return {
          id: message.id,
          user: isUser,
          createdOn: moment(message.created_at).format('MMMM Do, YYYY'),
          content: message.content,
        };
      });
      setMessagesArray(returnedMessagesArray);
    });
  }, [props.route.params.userId, props.route.params.id]);

  const onSubmitInput = async () => {
    const newMessage = await api.postMessage(
      props.route.params.id,
      props.route.params.userId,
      messageContent
    );
    setMessageContent('');
    console.log('newnewmessage', newMessage);
    setMessagesArray(prev => [
      ...prev,
      {
        id: newMessage.id,
        user: true,
        createdOn: moment(newMessage.created_at).format('MMMM Do, YYYY'),
        content: newMessage.content,
      },
    ]);
    return;
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => {
          props.navigation.navigate('MatchesProfile', {
            id: props.route.params.id,
          });
        }}
      >
        <Text style={styles.mainHeader}>{props.route.params.firstName}</Text>
        <Image
          style={styles.image}
          source={require('../assets/images/User2.jpg')}
        />
      </TouchableOpacity>
      <FlatList
        data={messagesArray}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageContent}
          onChangeText={setMessageContent}
          multiline={true}
          numberOfLines={2}
          placeholder="Type message"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onSubmitInput();
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eaebed',
    height: '100%',
  },
  mainHeader: {
    fontSize: 60,
    fontFamily: 'MomcakeThin-9Y6aZ',
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: '5%',
  },
  headerContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: '8%',
  },
  image: {
    height: '90%',
    width: '20%',
    resizeMode: 'contain',
    borderRadius: 150,
    alignSelf: 'center',
    marginLeft: '5%',
    marginTop: '10%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    textAlignVertical: 'top',
    fontSize: 25,
    marginLeft: '2%',
    marginRight: '3%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  button: {
    width: 50,
    height: 70,
    alignSelf: 'center',
    textAlignVertical: 'top',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
  },
});

export default MatchesChat;
