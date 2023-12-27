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
          <View style={styles.container}>
            <Text style={styles.optionText}>{title}</Text>
            <Image source={require('../assets/cross.png')} />
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 17,
    padding: 12,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
      iconContainer: {
        marginLeft: 8,
      },
      innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
})

export default AnswerOption
