import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TikTokColors from '../theme/TikTokColors';
import { CounterState, store, updateButtonPress } from '../store/data_store';
import { useSelector } from 'react-redux';

type ItemProps = {
  title: string;
  isOptionPressed: boolean; 
};

const AnswerOption = ({title, isOptionPressed}: ItemProps) => {
  const currentMcq = useSelector((state: CounterState) => state.currentMcq);
  
  const onPress = () => {
    console.log("pressed an options")
    console.log(currentMcq)
    store.dispatch(updateButtonPress(true));
    console.log(currentMcq)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
        <View style={styles.innerContainer}>
          <Text style={styles.optionText}>{title}</Text>
          {isOptionPressed && <Image style={styles.iconImage} source={require('../assets/right.gif')} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  touchableOpacity: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 2,
  },
  iconImage: {
    width: 56,
    height: 56,
  },
});


export default AnswerOption
