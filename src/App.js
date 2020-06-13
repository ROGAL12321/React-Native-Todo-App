import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Text, Keyboard} from 'react-native';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {screenWidth} from './helpers';

const App = () => {
  const [todos, changeTodos] = useState([]);
  const [todoText, changeTodoText] = useState('');
  const addTodo = () => {
    changeTodos(todos.concat(todoText));
    changeTodoText('');
    Keyboard.dismiss();
  };

  const deleteTodo = todo => {
    const fitleredTodos = todos.filter(t => t !== todo);
    changeTodos(fitleredTodos);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" />
      <Text style={styles.heading}>Todo list</Text>
      <TodoForm
        todoText={todoText}
        changeTodoText={changeTodoText}
        addTodo={addTodo}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    marginBottom: 20,
  },
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
  scrollList: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 10,
    width: screenWidth - 40,
  },
  listItem: {
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    position: 'relative',
    borderColor: '#BEBEBE',
    borderWidth: 1,
    padding: 10,
  },
  listItemImage: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  listItemTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemDeleteButton: {
    backgroundColor: '#FFA1A1',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  listItemDeleteButtonText: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default App;
