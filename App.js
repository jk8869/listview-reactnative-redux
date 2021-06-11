/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { Provider } from 'react-redux';
  import { store } from './redux/store';
  import UserDetail from './screens/UserDetail';
  import UserList from './screens/UserList';


  const Stack = createStackNavigator();

  const App = () => {    
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList">
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserDetail" component={UserDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }

export default App;
