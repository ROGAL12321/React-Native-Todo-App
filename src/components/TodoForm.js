import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {screenWidth} from '../helpers';

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

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 80,
    width: screenWidth - 40,
  },
  formLabel: {
    fontFamily: 'Lato-Bold',
    color: '#BEBEBE',
    marginVertical: 20,
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
    width: screenWidth - 40,
    borderRadius: 2,
  },
  formButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default TodoForm;
