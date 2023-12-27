import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TikTokColors from '../theme/TikTokColors';
import { store } from '../store/data_store';

type ItemProps = {title: string};

const AnswerOption = ({title}: ItemProps) => {
  const onPress = () => {
  };

  return (
    <View>
        <TouchableOpacity onPress={onPress} style={[styles.container]}>
          <View style={styles.innerContainer}>
            <Text style={styles.optionText}>{title}</Text>
            <Image source={require('../assets/cross.png')} />
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 12,
        marginVertical: 8,
        margin: 12,
        backgroundColor: TikTokColors.correctAnswerColor,
      },
      iconContainer: {
        marginLeft: 8,
      },
      innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      optionText: {
        color: TikTokColors.selectedText,
        fontSize: 17,
        fontWeight: '400',
      },
})

export default AnswerOption
