import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TikTokColors from '../theme/TikTokColors';

const ActionButton = (imageName: string, height: number, width: number, text: string) => {
  const showLabel = text.length > 0;

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        // Handle button press
      }}
    >
      <View style={styles.buttonContainer}>
        <Image
          source={require('../assets/bookmarks.png')} // Replace with the correct path
          style={styles.buttonImage}
        />
        {showLabel && (
          <Text style={styles.buttonText}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginTop: 15
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    height: 26,
    width: 28,
  },
  buttonText: {
    color: TikTokColors.selectedText,
  },
});

export default ActionButton;
