import React from "react";
import { Stack, Link } from "expo-router";
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Layout() {

  const fadeIn = ({ current }) => ({
    cardStyle: {
      opacity: current.progress
    }
  });

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#444444' }
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
      <Stack.Screen
        name='contents'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='usersContents'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='creater'
        options={{
          headerShown: true,
          headerTitle: () => false,
          headerLeft: () => (
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 15}}>@KanatoEndo</Text>
          ),
          headerRight: () => (
            <View style={[styles.headerRight]}>
              <Feather name="plus-square" size={27.5} color="#FFFFFF" style={[styles.upload]} />
              <Link href='/profile'>
                <Octicons name="three-bars" size={27.5} color="#FFFFFF" />
              </Link>
            </View>
          )
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  upload: {
    marginRight: 12.5
  }
});
