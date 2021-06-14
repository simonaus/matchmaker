import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  PanResponder,
  Animated,
  PanResponderInstance,
} from 'react-native';
import Friend from '../components/Friend';

interface Props {
  navigation: any;
  route: any;
}

const MatchesPair = (props: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(-1);

  const matchFriends = props.route.params.userInfo.friends
    .filter((friend: any) => friend.is_match)
    .filter((friend: any) => !(friend.id === props.route.params.id));

  let point = new Animated.ValueXY();

  let scrollOffset = 0;
  let flatlistTopOffset = 346.18182373046875;
  let rowHeight = 100;
  let currentIndex: any = -1;
  let currentY = 0;

  const panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    onPanResponderGrant: (_, gestureState) => {
      Animated.event([{ y: point.y }], { useNativeDriver: false })({
        y: gestureState.y0,
      });
      console.log('gesturestate0', gestureState.y0);
      currentIndex = yToIndex(gestureState.y0);
      currentY = gestureState.y0;
      setDraggingIndex(currentIndex);
    },
    onPanResponderMove: (_, gestureState) => {
      Animated.event([{ y: point.y }], { useNativeDriver: false })({
        y: gestureState.moveY,
      });
      currentY = gestureState.moveY;
      setIsDragging(true);
    },
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: () => {
      if (currentY < 210) {
        props.navigation.navigate('MatchesConfirm', {
          id1: props.route.params.id,
          firstName1: props.route.params.firstName,
          profilePicture1: props.route.params.profilePicture,
          id2: matchFriends[draggingIndex].id,
          firstName2: matchFriends[draggingIndex].first_name,
          profilePicture2: matchFriends[draggingIndex].profile_picture,
          matched_by: props.route.params.userInfo.id,
        });
      }
      reset();
    },
    onPanResponderTerminate: () => {
      reset();
    },
    onShouldBlockNativeResponder: () => {
      return true;
    },
  });

  const renderItem2 = ({ item }: any) => {
    return (
      <View>
        <Friend
          id={item.id}
          firstName={item.first_name}
          profilePicture={item.profile_picture}
          isDragging={true}
        />
      </View>
    );
  };

  const renderItem = ({ item, index }: any, noPanResponder = false) => {
    return (
      <View style={{ opacity: draggingIndex === index ? 0 : 1 }}>
        <View {...(noPanResponder ? {} : panResponder.panHandlers)}>
          <Friend
            id={item.id}
            firstName={item.first_name}
            profilePicture={item.profile_picture}
            isDragging={false}
          />
        </View>
      </View>
    );
  };

  const yToIndex = (y: number) => {
    const value = Math.floor(
      (scrollOffset + y - flatlistTopOffset) / rowHeight,
    );

    if (value < 0) {
      return 0;
    }
    return value;
  };

  const reset = () => {
    setIsDragging(false);
    setDraggingIndex(-1);
  };

  return (
    <View style={styles.view}>
      {isDragging && (
        <Animated.View
          style={{
            height: 20,
            position: 'absolute',
            width: '89%',
            zIndex: 2,
            top: point.getLayout().top,
          }}
        >
          {renderItem2({ item: draggingIndex, index: -1 })}
        </Animated.View>
      )}
      <Text style={styles.mainHeader}>Find a match for</Text>
      <Text style={styles.mainHeaderName}>{props.route.params.firstName}</Text>
      <View style={styles.matchBox}>
        <Image
          style={styles.image}
          source={require('../assets/images/QuestionMark.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../assets/images/User2.jpg')}
        />
      </View>
      <Text style={styles.subHeader}>Drag a friend to match</Text>
      <FlatList
        data={matchFriends}
        keyExtractor={match => match.id + ''}
        renderItem={renderItem}
        onScroll={e => {
          scrollOffset = e.nativeEvent.contentOffset.y;
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
  subHeader: {
    fontSize: 30,
    marginTop: 30,
  },
  mainHeader: {
    paddingTop: 20,
    paddingBottom: 0,
    fontSize: 60,
    backgroundColor: '#eaebed',
    fontFamily: 'MomcakeThin-9Y6aZ',
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
  mainHeaderName: {
    paddingTop: 20,
    paddingBottom: 30,
    fontSize: 60,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'MomcakeThin-9Y6aZ',
    backgroundColor: '#eaebed',
  },
});

export default MatchesPair;
