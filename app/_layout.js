import React from "react";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Svg, G, Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {

  const fadeIn = ({ current }) => ({
    cardStyle: {
      opacity: current.progress
    }
  });

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#444444'
        }
      }}
    >
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='loading' options={{headerShown: false}} />
      <Stack.Screen
        name='select'
        options={{
          animation: fadeIn,
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <Stack.Screen name='relaxation' options={{headerShown: false}} />
      <Stack.Screen
        name='homeLoading'
        options={{
          animation: fadeIn,
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name='(tabs)'
        options={{
          animation: fadeIn,
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </Stack>
  );
}
