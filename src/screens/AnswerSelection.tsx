import React, { useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';
import AnswerOption from './AnswerOption';
import { store } from '../store/data_store';
import { McqData } from '../model/options_model';

const AnswerSelection = ({ item }: { item: McqData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={item.options}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item: option, index }) => (
          <AnswerOption
            index={index}
            option={option}
            isOptionPressed={item.isOptionPressed}
            isCorrectAnswer={item.correct_options.some(correctOption => correctOption.id === option.id)}
            wasThisOptionPressed={item.buttonTaps[index]}
          />
        )}
        keyExtractor={(option) => option.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  title: {
    fontSize: 32,
  },
});

export default AnswerSelection;