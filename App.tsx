/**
 * React native calculator using typescript
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ShowSomething } from './screens/first-screen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ShowSomething} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
