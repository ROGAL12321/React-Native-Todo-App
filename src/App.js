import React from 'react';
import './styles/global';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './store';

import ListRouter from './screens/List';
import SettingsScreen from './screens/Settings';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Todolist') {
                return (
                  <Ionicons name="md-done-all" size={size} color={color} />
                );
              } else if (route.name === 'Settings') {
                return <Ionicons name="ios-list" size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            tabStyle: {
              paddingVertical: 5,
              borderWidth: 0.5,
              borderColor: '#BEBEBE',
              borderStyle: 'solid',
            },
          }}>
          <Tab.Screen
            name="Todolist"
            component={ListRouter}
            options={{title: 'Things to do'}}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
