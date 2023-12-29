import React, { useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import AnswerOption from './AnswerOption';
import { OptionContext, SelectedOptionContext } from '../contexts/option_context';

const AnswerSelection = () => {
  const item = useContext(OptionContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={item.options}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item: option, index }) => (
          <SelectedOptionContext.Provider value={{index, option}}>
            <AnswerOption/>
          </SelectedOptionContext.Provider>          
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