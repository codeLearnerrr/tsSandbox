/**
 * React native calculator using typescript
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ShowSomething } from './screens/first-screen';
import { ShowSomething2 } from './screens/second-screen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>      
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='Home'>
          <Stack.Screen name="Home" component={ShowSomething} />
          <Stack.Screen name="NotHome" component={ShowSomething2} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
