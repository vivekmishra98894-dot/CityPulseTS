import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import EventDetailsScreen from '../screens/EventDetails/EventDetailsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import AuthScreen from '../screens/Auth/AuthScreen';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Details: { id: string } | undefined;
  Profile: undefined;
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown:false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={EventDetailsScreen} options={{ title: 'Event Details' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Login' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
