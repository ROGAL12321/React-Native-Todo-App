import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from './List';
import Details from './Details';

const Stack = createStackNavigator();

const ListRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todolist" component={List} />
      <Stack.Screen name="Tododetails" component={Details} />
    </Stack.Navigator>
  );
};

export default ListRouter;
