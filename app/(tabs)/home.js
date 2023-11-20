import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {

  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      delay: 500,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [anim]);
  const animStyle = {
    opacity: anim
  };

  return (
    <LinearGradient
      colors={['#444444', '#222222', '#000000']}
      style={styles.container}
    >
      <Animated.ScrollView style={[animStyle]}>
        <View style={[styles.mainvisual]}>
          <Image
            source={require('../../img/home/mainvisualDemo.webp')}
            style={[styles.mainvisualImg]}
          />
          <Text style={[styles.mainvisualTitle]}>"音と熱の世界"</Text>
          <Text style={[styles.mainvisualUser]}>@KazuyaKinoshita</Text>
          <Text style={[styles.mainvisualDeadline]}>17日後有料コンテンツ</Text>
        </View>
      </Animated.ScrollView>
    </LinearGradient>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  mainvisual: {
    width: '100%',
    borderRadius: 15,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center'
  },
  mainvisualImg: {
    width: 300,
    height: 400,
    borderRadius: 15
  },
  mainvisualTitle: {
    marginTop: 15,
    fontSize: 21,
    color: '#FFFFFF'
  },
  mainvisualUser: {
    marginTop: 2.5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  mainvisualDeadline: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF0000'
  }
});
