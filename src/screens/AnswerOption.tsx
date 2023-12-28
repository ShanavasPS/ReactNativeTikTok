import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TikTokColors from '../theme/TikTokColors';
import { CounterState, store, updateButtonPress } from '../store/data_store';
import { useSelector } from 'react-redux';
import { Option } from '../model/options_model';

type ItemProps = {
  option: Option;
  isOptionPressed: boolean;
  isCorrectAnswer: boolean; 
};

const AnswerOption = ({option, isOptionPressed, isCorrectAnswer}: ItemProps) => {
  const currentMcq = useSelector((state: CounterState) => state.currentMcq);
  const index = currentMcq.options.findIndex(element => element.id === option.id);
  const wasThisOptionPressed = currentMcq.buttonTaps[index];
  const onPress = () => {
    if(!currentMcq.isOptionPressed) {
      console.log("pressed an options")
      const index = currentMcq.options.findIndex(element => element.id === option.id);
      console.log("selected index ", index);
      console.log(currentMcq)
      store.dispatch(updateButtonPress({index: index, didPress: true}));
      console.log(currentMcq)
    }
  };

  const getBackgroundColor = () => {
    if (isOptionPressed) {
      return isCorrectAnswer ? 'rgba(40, 177, 143, 0.70)' : wasThisOptionPressed ? 'rgba(220, 95, 95, 0.70)' : 'rgba(255, 255, 255, 0.5)';
    } else {
      return 'rgba(255, 255, 255, 0.5)';
    }
  };

  const getImageSource = () => {
    if (isOptionPressed && wasThisOptionPressed) {
      return isCorrectAnswer
        ? require('../assets/correct.gif')
        : require('../assets/wrong.gif');
    } else {
      return null;
    }
  };

  const getIconImageStyle = () => {
    return isOptionPressed && !isCorrectAnswer ? { transform: [{ rotate: '180deg' }] } : {};
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
        <View style={styles.innerContainer}>
          <Text style={styles.optionText}>{option.answer}</Text>
          {isOptionPressed && <Image style={[styles.iconImage, getIconImageStyle()]} source={getImageSource()} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
