import React from 'react';

import {StatusBar, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Main = ({children, title}) => (
  <View style={styles.container}>
    <StatusBar translucent barStyle="dark-content" />
    <Text style={styles.heading}>{title}</Text>
    {children}
  </View>
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  heading: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    marginBottom: 40,
  },
});

export default Main;
