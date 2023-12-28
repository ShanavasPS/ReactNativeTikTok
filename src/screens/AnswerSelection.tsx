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
        renderItem={({ item: option }) => (
          <AnswerOption
            option={option}
            isOptionPressed={item.isOptionPressed}
            isCorrectAnswer={item.correct_options.some(correctOption => correctOption.id === option.id)}
          />
        )}
        keyExtractor={(option) => option.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    alignItems: 'stretch',
    margin: 12,
    marginRight: 65,
    marginBottom: 0
  },
  answerSelectionContainer: {
    flex: 1,
    alignItems: 'flex-start',

  },
  title: {
    fontSize: 32,
  },
});

export default AnswerSelection;