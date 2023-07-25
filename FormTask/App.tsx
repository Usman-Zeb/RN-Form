import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GuestScreen from './screens/GuestScreen';
import {COLOR_OUTER, COLOR_TABS, MARGINS_GLOBAL, RADIUS_MAIN} from './constants/globals';
import WrapperScreen from './screens/WrapperScreen';
const Tab = createMaterialTopTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR_OUTER,
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.outerContainer}>
        <Tab.Navigator
          initialRouteName="Guest"
          screenOptions={{
            tabBarBounces:false,
            lazy:false,
            swipeEnabled: false,
            tabBarActiveTintColor: COLOR_TABS,
            tabBarStyle: {
              backgroundColor: '#f4f4f4',
              marginTop: MARGINS_GLOBAL,
              marginHorizontal: MARGINS_GLOBAL,
              elevation: 0,
              borderTopLeftRadius: RADIUS_MAIN,
              borderTopRightRadius: RADIUS_MAIN,
            },
            tabBarInactiveTintColor: COLOR_TABS,
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarIndicatorStyle: {
              backgroundColor: 'white',
                height: '100%',
                borderTopLeftRadius: RADIUS_MAIN,
                borderTopRightRadius: RADIUS_MAIN,
            },
          }}>
          <Tab.Screen
            name="Guest"
            component={GuestScreen}
            options={{
              title: 'Guest',
            }}
          />
          <Tab.Screen
            name="Login"
            component={WrapperScreen}
            options={{
              title: 'Log in',
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: '50%',
    backgroundColor: COLOR_OUTER,
  },
});
