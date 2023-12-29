import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TikTokImages from '../theme/TikTokImages';
import { DataContext } from '../contexts/data_context';

const NetworkImageActionButton = () => {
  const currentMcq = useContext(DataContext);  

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        // Handle button press
      }}
    >
      <View style={styles.avatarContainer}>
        {currentMcq.user.avatar && (
          <Image
            source={{ uri: currentMcq.user.avatar }}
            style={styles.avatarImage}
            defaultSource={TikTokImages.like}
          />
        )}
      </View>
      {currentMcq.user.avatar && (
        <Image
          source={TikTokImages.follow}
          style={styles.followImage}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContainer: {
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white', // Add white border color
    borderWidth: 1, // Add border width
    borderRadius: 23.5,
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  followImage: {
    width: 24,
    height: 24,
    bottom: 15,
  },
});

export default NetworkImageActionButton;
