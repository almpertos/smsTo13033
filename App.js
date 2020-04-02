import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'

import UserDataScreen from './Screens/UserDataScreen';
import ReasonsScreen from './Screens/ReasonsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  UserStackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="SMS Μετακίνησης"
        component={UserDataScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#33bbff', fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )

  ReasonsStackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="SMS Μετακίνησης"
        component={ReasonsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'skyblue', fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              size = 30;
              if (route.name === 'Στοιχεία χρήστη') {
                iconName = focused ? 'user' : 'user';
              } else if (route.name === 'Λόγοι εξόδου') {
                iconName = focused ? 'bars' : 'bars';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#33bbff',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Στοιχεία χρήστη" component={this.UserStackScreen} />
          <Tab.Screen name="Λόγοι εξόδου" component={this.ReasonsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
