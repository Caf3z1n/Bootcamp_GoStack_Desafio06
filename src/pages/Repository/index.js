import React from 'react';
import PropTypes from 'prop-types';

import {Browser} from './styles';

export default function Repository({route, navigation}) {
  const {repository} = route.params;

  navigation.setOptions({title: repository.name});

  return <Browser source={{uri: repository.html_url}} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
