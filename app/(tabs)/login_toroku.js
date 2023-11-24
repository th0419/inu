import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet, Dimensions, Text, Linking } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const imageHeight = 300; // 调整为你的图片高度

const Marquee = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(scrollY, {
        toValue: -imageHeight * 2, // 从上往下移动
        duration: 5000,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [scrollY]);

  return (
    <View style={styles.marqueeContainer}>
      {/* 当前组的图片 */}
      <Animated.View
        style={[
          styles.marquee,
          {
            transform: [{ translateY: scrollY }],
          },
        ]}
      >
        <Image style={styles.image} source={require('../img/home/mainvisualDemo.webp')} />
        <Image style={styles.image} source={require('../img/home/mainvisualDemo.webp')} />
        <Image style={styles.image} source={require('../img/home/mainvisualDemo.webp')} />
      </Animated.View>

      {/* 下一组的图片，初始时处于上方不可见状态 */}
      <Animated.View
        style={[
          styles.marquee,
          {
            transform: [{ translateY: scrollY.interpolate({ inputRange: [-imageHeight * 2, -imageHeight], outputRange: [0, windowHeight] }) }],
            opacity: scrollY.interpolate({ inputRange: [-imageHeight * 2, -imageHeight, 0], outputRange: [0, 0, 1] }),
          },
        ]}
      >
        <Image style={styles.image} source={require('../img/home/mainvisualDemo.webp')} />
        <Image style={styles.image} source={require('../img/home/mainvisualDemo.webp')} />
        <Image style={styles.image} source={require('../img/home/mainvisualDemo.webp')} />
      </Animated.View>

      <View style={styles.loginContainer}>
        <Login />
      </View>
    </View>
  );
};

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomButtonContainer}>
        <Text style={styles.buttonText} onPress={() => Linking.openURL("/screen1")}>
          会員登録
        </Text>
        <Text style={styles.buttonText} onPress={() => Linking.openURL("/screen2")}>
          ログイン
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marqueeContainer: {
    flex: 1,
    position: 'relative',
  },
  marquee: {
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: windowWidth,
    height: imageHeight,
  },
  loginContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    width: windowWidth,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  bottomButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: "60%",
  },
});

export default Marquee;




