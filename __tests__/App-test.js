/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';



import { ShowSomething } from '../screens/first-screen';
import { ShowSomething2 } from '../screens/second-screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders correctly ShowSomething', () => {
  const tree = renderer.create(<ShowSomething />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly ShowSomething2', () => {
  const tree = renderer.create(<ShowSomething2 />).toJSON();
  expect(tree).toMatchSnapshot();
});

