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
      <View style={{ width: 45, height: 55 }}>
        <Image
          source={{ uri: '../assets/bookmarks.png' }}
          style={styles.avatarImage}
          defaultSource={require('../assets/ellipse21.png')} // Replace with the correct path
        />
          <Image
            source={require('../assets/tickmark.png')} // Replace with the correct path
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
    position: 'absolute',
    bottom: 36,
    right: 16,
  },
  avatarImage: {
    width: 45,
    height: 45,
  },
  followImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 0,
  },
});

export default NetworkImageActionButton;
