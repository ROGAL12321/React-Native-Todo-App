import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Switch, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {TOGGLE_CAT_VISIBILITY} from '../helpers/actionTypes';

import MainLayout from '../layouts/Main';

const Settings = () => {
  const isCatImageVisible = useSelector(state => state.isCatImageVisible);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch({
      type: TOGGLE_CAT_VISIBILITY,
      isCatImageVisible: !isCatImageVisible,
    });
  };

  return (
    <MainLayout title="Settings">
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{false: '#BEBEBE', true: '#BEBEBE'}}
          thumbColor={isCatImageVisible ? 'tomato' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isCatImageVisible}
        />
        <Text style={styles.switchText}>Show cat icon</Text>
      </View>
    </MainLayout>
  );
};

const styles = EStyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginLeft: 20,
  },
});

export default Settings;
