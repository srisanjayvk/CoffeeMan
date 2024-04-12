import {LogBox, View, Dimensions} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from 'react-native-heroicons/solid';
import {themeColors} from '../constants/theme';
import ProductScreen from '../screen/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('window');

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{headerShown: false}}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 10,
          height: 60,
          alignItems: 'center',

          borderRadius: 100,
          marginHorizontal: 30,
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: 0,
        },
      })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === 'home') {
    icon = focused ? (
      <HomeSolid size="25" color={themeColors.bgLight} />
    ) : (
      <HomeOutline size="25" strokeWidth={2} color="white" />
    );
  } else if (route.name === 'favourite') {
    icon = focused ? (
      <HeartSolid size="25" color={themeColors.bgLight} />
    ) : (
      <HeartOutline size="25" strokeWidth={2} color="white" />
    );
  } else if (route.name === 'cart') {
    icon = focused ? (
      <BagSolid size="25" color={themeColors.bgLight} />
    ) : (
      <BagOutline size="25" strokeWidth={2} color="white" />
    );
  }

  let buttonClass = focused ? 'bg-white' : '';
  return (
    <View className={'flex items-center rounded-full p-3 ' + buttonClass}>
      {icon}
    </View>
  );
};
