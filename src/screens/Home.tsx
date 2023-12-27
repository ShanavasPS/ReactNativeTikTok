import React, {useEffect, useContext, useState} from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, ImageBackground } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import AnswerSelection from './AnswerSelection';
import UserInfo from './UserInfo';
import { CounterState, store, fetchNextForYouItem, performAsyncOperation } from '../store/data_store';
import { useSelector } from 'react-redux';
import Playlist from './Playlist';

const Home = () => {
  const content = useSelector((state: CounterState) => state.content);
  const currentPageIndex = useSelector((state: CounterState) => state.currentPageIndex);
  const imageUrl = 
  useEffect(() => {
    console.log("Inside useeffect")
    store.dispatch(fetchNextForYouItem());
  }, []);

  useEffect(() => {
    console.log("currentPageIndex is", currentPageIndex)
  }, [currentPageIndex]);

  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    const { position } = e.nativeEvent;
    console.log('Current Card Index', position);
    store.dispatch(performAsyncOperation(position));
  };

  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (
    <PagerView
      style={styles.pagerView}
      initialPage={0}
      orientation={'vertical'}
      onPageSelected={handlePageSelected}
    >
      {content.map((item, index) => (
        <ImageBackground
          key={index.toString()}
          source={{uri: item.image}}
          style={styles.backgroundImage}
        >
          <View style={styles.pageContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>{item.question}</Text>
            </View>
            <AnswerSelection item={item}></AnswerSelection>
            <UserInfo></UserInfo>
            <Playlist></Playlist>
          </View>
        </ImageBackground>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  questionContainer: {
    height: '50%', // Set the height to 30% of the screen height
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    margin: 16,
  },
  questionText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your needs
    justifyContent: 'center',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align items vertically at the bottom
  },
});

export default Home