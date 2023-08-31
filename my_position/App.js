import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screen/Home.js';
import Rules from './screen/Rules.js';
import i18n from './i18n.js';

export default function App() {
  //define variables
  const Tabs = createBottomTabNavigator();
  const home = i18n('home');
  const rules = i18n('rulesTitle');

  return (
            <NavigationContainer>
              <Tabs.Navigator
                initialRouteName={home}
                screenOptions={({route}) => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;
                    //define if icon is filled or outline
                    if(routeName === home) {
                      iconName = focused ? iconName = 'md-home' : iconName = 'md-home-outline';
                    } else if (routeName === rules) {
                      iconName = focused ? 'md-receipt' : 'md-receipt-outline';
                    }

                    return (
                      <Ionicons name={iconName} color={color} size={size}/>
                    )
                  }
                })}
              >
                <Tabs.Screen name={home} component={Home}/>
                <Tabs.Screen name={rules} component={Rules}/>
              </Tabs.Navigator>
            </NavigationContainer>
         )
};



