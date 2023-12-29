import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import TikTokColors from '../theme/TikTokColors';
import TikTokStrings from '../theme/TikTokStrings';
import { useSelector } from 'react-redux';
import { RootState } from '../store/data_store';
import { getDuration } from '../utils/utils';
import TikTokImages from '../theme/TikTokImages';

const TopBar = () => {
    const elapsedTime = useSelector((state: RootState) => state.time.elapsedTime);

    return (
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Image source={TikTokImages.time} />
          <Text style={styles.timeText}>{getDuration(elapsedTime)}</Text>
        </View>
  
        <View style={styles.forYouContainer}>
          <Text style={styles.forYouTextStyle}>{TikTokStrings.forYou}</Text>
          <View style={styles.highlighterBar} />
        </View>
  
        <View style={styles.searchContainer}>
          <Image source={TikTokImages.search} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      marginTop: StatusBar.currentHeight,
      marginLeft: 16,
      marginRight: 16,
      paddingTop: 8,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    timeText: {
      marginLeft: 6,
      fontSize: 16,
      fontWeight: '400',
      color: TikTokColors.selectedText,
    },
    forYouContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 30,
    },
    forYouTextStyle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: TikTokColors.selectedText,
    },
    highlighterBar: {
      width: 30,
      height: 4,
      backgroundColor: TikTokColors.selectedText,
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchContainer: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
  
  export default TopBar;
