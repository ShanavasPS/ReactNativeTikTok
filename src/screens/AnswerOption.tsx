import {
  Image,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutChangeEvent,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {store} from '../store/data_store';
import {updateButtonPress} from '../store/data_slicer';
import TikTokImages from '../theme/TikTokImages';
import TikTokColors from '../theme/TikTokColors';
import {DataContext, OptionContext} from '../contexts/data_context';

const AnswerOption = () => {
  const item = useContext(DataContext);
  const {index, option} = useContext(OptionContext);
  const isOptionPressed = item.isOptionPressed;
  const isCorrectAnswer = item.correct_options.some(
    correctOption => correctOption.id === option.id,
  );
  const wasThisOptionPressed = item.buttonTaps[index];

  const [slideAnimation] = useState(new Animated.Value(0));

  const onInnerContainerLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    if (!isOptionPressed) {
      slideAnimation.setValue(width);
    }
  };

  const animateRightToLeft = useCallback(() => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [slideAnimation]);

  const onPress = () => {
    if (!isOptionPressed) {
      store.dispatch(updateButtonPress({index: index, didPress: true}));
    }
  };

  const getBackgroundColor = () => {
    if (isOptionPressed) {
      return isCorrectAnswer
        ? TikTokColors.correctAnswerBackground
        : wasThisOptionPressed
        ? TikTokColors.wrongAnswerBackground
        : TikTokColors.transparentBackground;
    } else {
      return TikTokColors.transparentBackground;
    }
  };

  const getImageSource = () => {
    return isCorrectAnswer ? TikTokImages.correct : TikTokImages.wrong;
  };

  const getIconImageStyle = () => {
    return isOptionPressed && !isCorrectAnswer
      ? {transform: [{rotate: '180deg'}]}
      : {};
  };

  useEffect(() => {
    animateRightToLeft();
  }, [isOptionPressed, animateRightToLeft]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
        <View
          style={styles.animatedViewContainer}
          onLayout={onInnerContainerLayout}>
          <Animated.View
            style={[
              styles.innerContainer,
              {
                transform: [
                  {
                    translateX: slideAnimation,
                  },
                ],
                backgroundColor: getBackgroundColor(),
              },
            ]}
          />
          <Text style={styles.optionText}>{option.answer}</Text>
          {isOptionPressed && wasThisOptionPressed && (
            <Animated.View
              style={[
                styles.iconImage,
                {
                  transform: [
                    {
                      translateX: slideAnimation,
                    },
                  ],
                },
              ]}>
              <Image
                style={[styles.iconImage, getIconImageStyle()]}
                source={getImageSource()}
              />
            </Animated.View>
          )}
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
    backgroundColor: TikTokColors.optionBackground,
  },
  touchableOpacity: {
    flex: 1,
  },
  animatedViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  optionText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1.5},
    textShadowRadius: 2,
    zIndex: 2,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  iconImage: {
    width: 56,
    height: 56,
    alignSelf: 'center',
  },
});

export default AnswerOption;
