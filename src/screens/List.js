import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {useSelector} from 'react-redux';

import MainLayout from '../layouts/Main';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const Main = ({navigation}) => {
  const isCatImageVisible = useSelector(state => state.isCatImageVisible);
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
    <MainLayout title="Todo list">
      <TodoForm
        todoText={todoText}
        changeTodoText={changeTodoText}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        isCatImageVisible={isCatImageVisible}
      />
    </MainLayout>
  );
};

export default Main;
