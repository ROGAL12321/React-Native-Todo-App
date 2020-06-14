import React from 'react';

import {Text} from 'react-native';
import MainLayout from '../../layouts/Main';

const Details = ({
  route: {
    params: {title},
  },
}) => (
  <MainLayout title="Todo list">
    <Text>{title}</Text>
  </MainLayout>
);

export default Details;
