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

const AnswerSelection = ({item}: {item: McqData}) => {

  const { content } = store.getState() as { content: McqData[] };
  const { currentPageIndex } = store.getState() as { currentPageIndex: number };

  return (
    <View style={styles.answerSelectionContainer}>
        <FlatList
            data={item.options}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            renderItem={({item}) => <AnswerOption title={item.answer} />}
            keyExtractor={item => item.id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  answerSelectionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default AnswerSelection;