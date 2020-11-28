import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

//screens
import Welcome from './screens/Welcome';
import ItemDetail from './screens/ItemDetail';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent",
  }
};

const Stack = createStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Welcome'}
            >
                 {/* Screens */}
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return <App/>;
}