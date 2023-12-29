import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TikTokColors from '../theme/TikTokColors';
import TikTokStrings from '../theme/TikTokStrings';
import TikTokImages from '../theme/TikTokImages';
import { OptionContext } from '../contexts/option_context';

const Playlist = () => {
  const currentMcq = useContext(OptionContext);  
  return (
    <View style={[styles.container, { backgroundColor: TikTokColors.playlistBackgroundColor }]}>
      <View style={styles.contentContainer}>
        <Image source={TikTokImages.play} style={styles.playIcon} />
        <Text style={[styles.playlistText, { color: TikTokColors.selectedText }]}>
          {TikTokStrings.playlist}{currentMcq.playlist}
        </Text>
        <View style={styles.spacer} />
        <Image source={TikTokImages.arrow} style={styles.arrowIcon} />
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
