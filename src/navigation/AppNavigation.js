import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { DetailedScreen, HomeScreen, TopListScreen} from '../screens'


export default function AppNavigation () {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detailed" component={DetailedScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TopList" component={TopListScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}