import 'react-native';
import React from 'react';
import LoginScreen from '../../../src/screen/LoginScreen';
import renderer from 'react-test-renderer';

// eslint-disable-next-line no-undef
test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen></LoginScreen>).toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});
