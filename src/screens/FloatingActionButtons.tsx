import React from 'react';
import { View, StyleSheet } from 'react-native';
import NetworkImageActionButton from './NetworkImageActionButton';
import ActionButton from './ActionButton';
import TikTokStrings from '../theme/TikTokStrings';

const FloatingActionButtons = () => {
  return (
    <View style={styles.container}>
      <NetworkImageActionButton />
      <View style={styles.buttonContainer}>
        {ActionButton(TikTokStrings.likeImagePath, 26, 28, TikTokStrings.likeCount)}
        {ActionButton(TikTokStrings.commentsImagePath, 26, 27, TikTokStrings.commentsCount)}
        {ActionButton(TikTokStrings.shareImagePath, 28, 27, TikTokStrings.shareCount)}
        {ActionButton(TikTokStrings.bookmarkImagePath, 24, 22, TikTokStrings.bookmarkCount)}
        {ActionButton(TikTokStrings.refreshImagePath, 38, 38, TikTokStrings.flip)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 66,
    right: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});

export default FloatingActionButtons;
