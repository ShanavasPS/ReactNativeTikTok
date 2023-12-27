import React from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import TikTokStrings from '../theme/TikTokStrings';

const NetworkImageActionButton = () => {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        // Handle button press
      }}
    >
      <View style={{ width: 45, height: 55, alignItems: 'center' }}>
        <Image
          source={{ uri: '../assets/bookmarks.png' }}
          style={styles.avatarImage}
          defaultSource={require('../assets/ellipse21.png')} // Replace with the correct path
        />
          <Image
            source={require('../assets/follow.png')} // Replace with the correct path
            style={styles.followImage}
          />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: 'transparent',
    elevation: 0,
    bottom: 36,
  },
  avatarImage: {
    width: 45,
    height: 45,
  },
  followImage: {
    width: 24,
    height: 24,
    bottom: 0,
  },
});

export default NetworkImageActionButton;
