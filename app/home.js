import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const home = () => {

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

export default home;

const styles = StyleSheet.create({
  
});
