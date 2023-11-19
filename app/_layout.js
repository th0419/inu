import { Stack } from "expo-router";

export default function Layout() {

  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: 'orange'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name='index' options={{headerShown: false}} />
      <Stack.Screen name='loading' options={{headerShown: false}} />
      <Stack.Screen name='select' options={{headerShown: false}} />
      <Stack.Screen name='relaxation' options={{headerShown: false}} />
      <Stack.Screen name='home' options={{headerShown: false}} />
      <Stack.Screen name='profile' />
    </Stack>
  );
}
