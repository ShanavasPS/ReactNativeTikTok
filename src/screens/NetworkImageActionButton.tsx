import React from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import { RootState } from '../store/data_store';

const NetworkImageActionButton = () => {
  const currentMcq = useSelector((state: RootState) => state.data.currentMcq);

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        // Handle button press
      }}
    >
      <View style={{ width: 45, height: 55, alignItems: 'center' }}>
        <Image
          source={{ uri: currentMcq.user.avatar }}
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
  },
  avatarImage: {
    width: 45,
    height: 45,
  },
  followImage: {
    width: 24,
    height: 24,
    bottom: 15
  },
});

export default NetworkImageActionButton;
