import React from 'react';
import { View, StyleSheet } from 'react-native';
import NetworkImageActionButton from './NetworkImageActionButton';
import ActionButton from './ActionButton';
import TikTokStrings from '../theme/TikTokStrings';
import TikTokImages from '../theme/TikTokImages';

const FloatingActionButtons = () => {
  return (
    <View style={styles.container}>
      <View>
        <NetworkImageActionButton />
        <ActionButton image={TikTokImages.like} height={26} width={28} text={TikTokStrings.likeCount}/>
        <ActionButton image={TikTokImages.comments} height={26} width={27} text={TikTokStrings.commentsCount}/>
        <ActionButton image={TikTokImages.bookmark} height={28} width={27} text={TikTokStrings.shareCount}/>
        <ActionButton image={TikTokImages.share} height={24} width={22} text={TikTokStrings.bookmarkCount}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 45,
  },
  buttonContainer: {
    backgroundColor: 'red'
  },
});

export default FloatingActionButtons;
