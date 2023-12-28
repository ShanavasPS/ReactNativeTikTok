import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TikTokColors from '../theme/TikTokColors';

const UserInfo = () => {
  let username = 'AP US History';
  let description = '5.4 The compromise of 1850';

  return (
    <View style={styles.container}>
        <Text style={styles.apUsHistoryContainer}>{username}</Text>
        <Text style={styles.additionalContainer}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    alignItems: 'flex-start',
  },
  username: {
    color: TikTokColors.statusBar,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 6,
  },
  apUsHistoryContainer: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  additionalContainer: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '400',
    flexWrap: 'wrap',
  },
  description: {
    color: TikTokColors.statusBar,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default UserInfo;
