import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import PagerView, {PagerViewOnPageSelectedEvent} from 'react-native-pager-view';
import AnswerSelection from './AnswerSelection';
import UserInfo from './UserInfo';
import {RootState, store} from '../store/data_store';
import {fetchNextForYouItem, fetchPage} from '../store/data_slicer';
import {useSelector} from 'react-redux';
import Playlist from './Playlist';
import TopBar from './TopBar';
import FloatingActionButtons from './FloatingActionButtons';
import {incrementElapsedTime} from '../store/timer_slicer';
import {DataContext} from '../contexts/data_context';
import TikTokStrings from '../theme/TikTokStrings';

const Home = () => {
  const content = useSelector((state: RootState) => state.data.content);

  useEffect(() => {
    store.dispatch(fetchNextForYouItem());

    const timerId = setInterval(() => {
      store.dispatch(incrementElapsedTime());
    }, 1000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    const {position} = e.nativeEvent;
    store.dispatch(fetchPage(position));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {content.length === 0 ? (
        // Show loading screen
        <View style={styles.loadingContainer}>
          <View style={styles.loadingContent}>
            <Text style={styles.loadingText}>{TikTokStrings.loading}</Text>
          </View>
        </View>
      ) : (
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          orientation={'vertical'}
          onPageSelected={handlePageSelected}>
          {content.map((item, index) => (
            <ImageBackground
              key={index.toString()}
              source={{uri: item.image}}
              style={styles.backgroundImage}>
              <DataContext.Provider value={item}>
                <TopBar />
                <View style={styles.container}>
                  <View style={styles.pageContainer}>
                    <Text style={styles.questionContainer}>
                      <Text style={styles.roundedBackground}>
                        <Text style={styles.questionText}>{item.question}</Text>
                      </Text>
                    </Text>
                    <AnswerSelection />
                    <View style={styles.userInfo}>
                      <UserInfo />
                    </View>
                  </View>
                  <View style={styles.floatingActionButtons}>
                    <FloatingActionButtons />
                  </View>
                </View>
                <Playlist />
              </DataContext.Provider>
            </ImageBackground>
          ))}
        </PagerView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    borderRadius: 10,
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 8,
  },
  questionContainer: {
    flex: 1,
    height: '50%',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingBottom: 40,
  },
  floatingActionButtons: {
    alignSelf: 'flex-end',
    marginLeft: 12,
    marginRight: 8,
    marginBottom: 16,
  },
  pagerView: {
    flex: 1,
  },
  roundedBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
  },
  questionText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 38,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  userInfo: {
    marginBottom: 16,
  },
});

export default Home;
