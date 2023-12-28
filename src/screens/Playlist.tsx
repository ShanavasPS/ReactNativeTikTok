import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TikTokColors from '../theme/TikTokColors';
import { CounterState } from '../store/data_store';
import { useSelector } from 'react-redux';

const Playlist = () => {
  const currentMcq = useSelector((state: CounterState) => state.currentMcq);
  
  return (
    <View style={[styles.container, { backgroundColor: TikTokColors.playlistBackgroundColor }]}>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/play.png')} style={styles.playIcon} />
        <Text style={[styles.playlistText, { color: TikTokColors.selectedText }]}>
        Playlist • {currentMcq.playlist}
        </Text>
        <View style={styles.spacer} />
        <Image source={require('../assets/arrow.png')} style={styles.arrowIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  playIcon: {
    marginRight: 4,
  },
  playlistText: {
    fontSize: 13,
    fontWeight: '600',
  },
  spacer: {
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 16,
  },
});

export default Playlist;
