import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TikTokColors from '../theme/TikTokColors';
import { CounterState } from '../store/data_store';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const currentMcq = useSelector((state: CounterState) => state.currentMcq);

  return (
    <View style={styles.container}>
        <Text style={styles.apUsHistoryContainer}>{currentMcq.user.name}</Text>
        <Text style={styles.additionalContainer}>{currentMcq.description}</Text>
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
