import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const Profile = () => {

  const params = useLocalSearchParams();

  return (
    <View>
      <Text>Profile</Text>
      <Link href='/'>Go Back to Index.</Link>
      <Text></Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({

});
