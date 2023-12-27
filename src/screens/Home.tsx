import React, {useEffect, useContext, useState} from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import AnswerSelection from './AnswerSelection';
import UserInfo from './UserInfo';
import { CounterState, store, fetchNextForYouItem, performAsyncOperation } from '../store/data_store';
import { useSelector } from 'react-redux';

const Home = () => {
  const content = useSelector((state: CounterState) => state.content);
  const currentPageIndex = useSelector((state: CounterState) => state.currentPageIndex);

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

  return (
    <PagerView 
      style={styles.pagerView} 
      initialPage={0} 
      orientation={'vertical'}
      onPageSelected={handlePageSelected}
    >
      {content.map((item, index) => (
        <View key={index.toString()} style={styles.pageContainer}>
          <Text>{item.question}</Text>
          <AnswerSelection item={item}></AnswerSelection>
          <UserInfo></UserInfo>
        </View>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align items vertically at the bottom
  },
});

export default Home