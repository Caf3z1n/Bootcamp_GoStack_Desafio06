import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#7159c1'},
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Usuários'}}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Repository" component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
