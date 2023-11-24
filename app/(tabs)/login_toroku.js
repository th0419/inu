import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Image, Animated, Dimensions, FlatList, Text } from "react-native";
import { Link } from "expo-router";

const Login = () => {
  const screenHeight = Dimensions.get("window").height;
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 3500,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const data = [
    { id: '1', image: require('../img/home/mainvisualDemo.webp'), height: 500 },
    { id: '2', image: require('../img/home/mainvisualDemo.webp'), height: 500 },
  ];

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screenHeight * (data.length - 1)],
  });

  const animatedStyle = {
    transform: [{ translateY }],
  };

  const renderItem = ({ item }) => (
    <Image source={item.image} style={[styles.gridImage, { height: item.height }]} />
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.marqueeContainer, animatedStyle]}>
        {/* 使用FlatList呈现网格布局 */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 0 }}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 0, position: 'absolute', top: -screenHeight * (data.length - 1) }}
        />
      </Animated.View>
      {/* 画面的底部按钮 */}
      <View style={styles.bottomButtonContainer}>
        {/* 按钮1 */}
        <Link to="/screen1" style={styles.button} href={"#"}>
          <Text style={styles.buttonText}>会員登録</Text>
        </Link>

        {/* 按钮2 */}
        <Link to="/screen2" style={styles.button} href={"#"}>
          <Text style={styles.buttonText}>ログイン</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 50,
  },
  button: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  gridImage: {
    width: Dimensions.get("window").width / 2 - 16,
    margin: 8,
    borderRadius: 8,
  },
  marqueeContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
});

export default Login;


