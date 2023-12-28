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
        {ActionButton(TikTokImages.like, 26, 28, TikTokStrings.likeCount)}
        {ActionButton(TikTokImages.comments, 26, 27, TikTokStrings.commentsCount)}
        {ActionButton(TikTokImages.bookmark, 28, 27, TikTokStrings.shareCount)}
        {ActionButton(TikTokImages.share, 24, 22, TikTokStrings.bookmarkCount)}
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
