import React, {useEffect, useContext, useState} from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, ImageBackground, SafeAreaView } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import AnswerSelection from './AnswerSelection';
import UserInfo from './UserInfo';
import { CounterState, store, fetchNextForYouItem, performAsyncOperation } from '../store/data_store';
import { useSelector } from 'react-redux';
import Playlist from './Playlist';
import TopBar from './TopBar';
import FloatingActionButtons from './FloatingActionButtons';

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
    <SafeAreaView style={{ flex: 1 }}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        orientation={'vertical'}
        onPageSelected={handlePageSelected}
      >
        {content.map((item, index) => (
          <ImageBackground
            key={index.toString()}
            source={{ uri: item.image }}
            style={styles.backgroundImage}
          >
            <TopBar />
            <View style={styles.container}>
              <View style={styles.pageContainer}>
                <View style={[styles.questionContainer]}>
                  <Text style={styles.questionText}>{item.question}</Text>
                </View>
                <AnswerSelection item={item}></AnswerSelection>
                <View style={styles.userInfo}>
                  <UserInfo></UserInfo>
                </View>
              </View>
              <View style={styles.floatingActionButtons}>
                <FloatingActionButtons />
              </View>
            </View>
            <Playlist></Playlist>
          </ImageBackground>
        ))}
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 8
  },
  questionContainer: {
    flex: 1,
    height: '50%',
    justifyContent: 'center', // Center the content vertically
  },
  floatingActionButtons: {
    alignSelf: 'flex-end',
    marginLeft: 12,
    marginBottom: 16
  },
  pagerView: {
    flex: 1,
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
  userInfo: {
    marginBottom: 16
  },
});

export default Home