import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {

  return (
    <View>
      <Text>Home</Text>
      <Link href='/'>Go Back to Index.</Link>
      <Link
        href={{
          pathname: '/profile',
          params: { name: 'Shoki'}
        }}
      >
        Go to the Profile.
      </Link>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  
});
