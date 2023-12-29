import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TikTokColors from '../theme/TikTokColors';
import { DataContext } from '../contexts/data_context';

const UserInfo = () => {
  const item = useContext(DataContext);
  const normalText = item.description.split(/#[^ ]+/);
  const matches = item.description.match(/#[^ ]+/g);

  return (
    <View style={styles.container}>
        <Text style={styles.apUsHistoryContainer}>{item.user.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.description}>{normalText}</Text>
          {matches && matches.map((match, index) => (
            <Text key={index} style={styles.descriptionBold}>{match}</Text>
          ))}
        </View>
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
  description: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '400',
    flexWrap: 'wrap',
  },
  descriptionBold: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'SF Pro Rounded',
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
});

export default UserInfo;
