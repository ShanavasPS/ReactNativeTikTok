import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import AnswerOption from './AnswerOption';
import {DataContext, OptionContext} from '../contexts/data_context';

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const AnswerSelection = () => {
  const item = useContext(DataContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={item.options}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item: option, index}) => (
          <OptionContext.Provider value={{index, option}}>
            <AnswerOption />
          </OptionContext.Provider>
        )}
        keyExtractor={option => option.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  separator: {
    height: 8,
  },
  title: {
    fontSize: 32,
  },
});

export default AnswerSelection;
