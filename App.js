import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'

import UserDataScreen from './Screens/UserDataScreen';
import ReasonsScreen from './Screens/ReasonsScreen';
import AppInfoScreen from './Screens/AppInfoScreen';
import colors from './colors/colors';

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
          headerTitleStyle: { color: colors.primary, fontWeight: 'bold' }
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
          headerTitleStyle: { color: colors.primary, fontWeight: 'bold' }
        }}
      />
    </Stack.Navigator>
  )

  AppInfoScreen = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="SMS Μετακίνησης"
        component={AppInfoScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { color: colors.primary, fontWeight: 'bold' }
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
              } else if (route.name === 'Λόγοι μετακίνησης') {
                iconName = focused ? 'bars' : 'bars';
              }
              else if (route.name === 'Πληροφορίες') {
                iconName = focused ? 'info-circle' : 'info-circle';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Στοιχεία χρήστη" component={this.UserStackScreen} />
          <Tab.Screen name="Λόγοι μετακίνησης" component={this.ReasonsStackScreen} />
          <Tab.Screen name="Πληροφορίες" component={this.AppInfoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
