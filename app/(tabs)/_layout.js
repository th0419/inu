import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout () {

  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#444444' }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={30} color="#FFFFFF" style={{marginTop: 7.5}} />
          ),
          tabBarLabel: 'Home',
          title: 'home',
          activeTintColor: '#FFFFFF',
          inactiveTintColor: 'rgba(255, 255, 255, .25)'
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={36} color="#FFFFFF" style={{marginTop: 5}} />
          ),
          tabBarLabel: 'Account',
          title: 'profile'
        }}
      />
    </Tabs>
  );
}
