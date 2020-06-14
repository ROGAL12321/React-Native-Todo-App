import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ConfirmationModal from './ConfirmationModal';

import cat from '../images/cat.jpg';

const TodoList = ({
  todos,
  deleteTodo,
  isCatImageVisible,
  navigate,
  isModalVisible,
  setModalVisible,
}) => {
  const [todoId, setTodoId] = useState(null);

  useEffect(() => {
    return () => {
      setTodoId(null);
    };
  }, []);

  return (
    <ScrollView style={styles.scrollList}>
      <View style={styles.listContainer}>
        {todos.map((todo, index) => (
          <TouchableOpacity
            onPress={() => {
              navigate('Tododetails', {
                title: todo,
              });
            }}>
            <View key={index} style={styles.listItem}>
              {isCatImageVisible && (
                <Image style={styles.listItemImage} source={cat} />
              )}
              <View style={styles.listItemTextContainer}>
                <Text>{todo}</Text>
                <TouchableOpacity
                  style={styles.listItemDeleteButton}
                  onPress={() => {
                    setModalVisible(true);
                    setTodoId(todo);
                  }}>
                  <Text style={styles.listItemDeleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <ConfirmationModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        handleSubmit={() => deleteTodo(todoId)}
      />
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  scrollList: {
    flex: 1,
  },
  listContainer: {
    width: '$workableScreen',
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
    backgroundColor: '$mainAccent',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  listItemDeleteButtonText: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default TodoList;
