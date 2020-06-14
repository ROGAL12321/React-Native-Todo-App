import React from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TodoForm = ({todoText, changeTodoText, addTodo}) => (
  <View style={styles.formContainer}>
    <Text style={styles.formLabel}>What you want to do?</Text>
    <TextInput
      style={styles.formInput}
      placeholder="Type here"
      value={todoText}
      type="text"
      onChangeText={changeTodoText}
    />
    <TouchableOpacity style={styles.formButton} onPress={addTodo}>
      <Text style={styles.formButtonText}>submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = EStyleSheet.create({
  formContainer: {
    marginBottom: 40,
    width: '$workableScreen',
  },
  formLabel: {
    fontFamily: 'Lato-Bold',
    color: '#BEBEBE',
    marginBottom: 20,
  },
  formInput: {
    borderBottomWidth: 1,
    borderColor: '#BEBEBE',
    paddingBottom: 10,
    borderStyle: 'solid',
  },
  formButton: {
    backgroundColor: '#5786FF',
    paddingVertical: 10,
    marginTop: 20,
    width: '$workableScreen',
    borderRadius: 2,
  },
  formButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default TodoForm;
