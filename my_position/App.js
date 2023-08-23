import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Home from './screen/Home.js';
import * as Rules from './screen/Rules.js';
import { translations } from './Localization/Localization.js';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

export default function App() {
  //define variables
  let [locale, setLocale] = useState(Localization.locale);
  const i18n = new I18n(translations);
  i18n.locale = locale;
  i18n.enableFallback = true;
  i18n.defaultLocale = "en";
  const Tabs = createBottomTabNavigator();
  const home = i18n.t('home');
  const rules = i18n.t('rulesTitle');

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



