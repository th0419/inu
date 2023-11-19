import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from "expo-router";

const Relaxation = () => {

  const anim_1 = useRef(new Animated.Value(0)).current;
  const anim_2 = useRef(new Animated.Value(0)).current;
  const anim_3 = useRef(new Animated.Value(0)).current;
  const anim_4 = useRef(new Animated.Value(0)).current;
  const anim_5 = useRef(new Animated.Value(0)).current;
  const anim_6 = useRef(new Animated.Value(0)).current;
  const anim_7 = useRef(new Animated.Value(0)).current;
  const anim_8 = useRef(new Animated.Value(0)).current;
  const anim_9 = useRef(new Animated.Value(0)).current;
  const anim_10 = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(anim_1, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_2, {
      toValue: 1,
      delay: 100,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_3, {
      toValue: 1,
      delay: 200,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_4, {
      toValue: 1,
      delay: 300,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_5, {
      toValue: 1,
      delay: 400,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_6, {
      toValue: 1,
      delay: 500,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_7, {
      toValue: 1,
      delay: 600,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_8, {
      toValue: 1,
      delay: 700,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_9, {
      toValue: 1,
      delay: 800,
      duration: 500,
      useNativeDriver: false
    }).start();
    Animated.timing(anim_10, {
      toValue: 1,
      delay: 900,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [anim_1, anim_2, anim_3, anim_4, anim_5, anim_6, anim_7, anim_8, anim_9, anim_10]);

  const anim_1Style = {
    opacity: anim_1
  };
  const anim_2Style = {
    opacity: anim_2
  };
  const anim_3Style = {
    opacity: anim_3
  };
  const anim_4Style = {
    opacity: anim_4
  };
  const anim_5Style = {
    opacity: anim_5
  };
  const anim_6Style = {
    opacity: anim_6
  };
  const anim_7Style = {
    opacity: anim_7
  };
  const anim_8Style = {
    opacity: anim_8
  };
  const anim_9Style = {
    opacity: anim_9
  };
  const anim_10Style = {
    opacity: anim_10
  };

  return (
    <View style={[styles.container]}>
      <TextInput style={[styles.search]}> serach...</TextInput>
      <Animated.View style={[styles.tag, styles.tag_1, anim_1Style]}>
        <Text style={[styles.tagText]}>#歴史的な場所</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_2, anim_2Style]}>
        <Text style={[styles.tagText]}>#瞑想</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_3, anim_3Style]}>
        <Text style={[styles.tagText]}>#冒険とアウトドア</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_4, anim_4Style]}>
        <Text style={[styles.tagText]}>#文化と芸術</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_5, anim_5Style]}>
        <Text style={[styles.tagText]}>#自然の奇跡</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_6, anim_6Style]}>
        <Text style={[styles.tagText]}>#スピリチュアル</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_7, anim_7Style]}>
        <Text style={[styles.tagText]}>#動物</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_8, anim_8Style]}>
        <Text style={[styles.tagText]}>#フェスティバル</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_9, anim_9Style]}>
        <Text style={[styles.tagText]}>#ロマンティック</Text>
      </Animated.View>
      <Animated.View style={[styles.tag, styles.tag_10, anim_10Style]}>
        <Text style={[styles.tagText]}>#自然を満喫</Text>
      </Animated.View>
      <Text style={[styles.text]}>0/5</Text>
      <Link href='/home' asChild>
        <Button
          mode="text"
          textColor="#FFFFFF"
          buttonColor="transparent"
          contentStyle={{height: 'auto'}} // ボタン内のコンテンツのスタイル
          labelStyle={{fontSize: 28, fontWeight: '400', lineHeight: 28}} // ボタンのテキストスタイル
          style={styles.button}
        >
          inuを始める。
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  search: {
    width: 250,
    height: 48,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 28,
    color: 'rgba(000, 000, 000, .25)',
    position: 'absolute',
    top: 100,
    left: '50%',
    transform: [{ translateX: -125 }, { translateY: 0 }]
  },
  tag: {
    height: 28,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, .5)',
    paddingLeft: 28,
    paddingRight: 28,
    marginTop: 12.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tag_1: {
    marginTop: 0,
    transform: [{ translateX: -100 }, { translateY: 0 }]
  },
  tag_2: {
    transform: [{ translateX: 50 }, { translateY: 0 }]
  },
  tag_3: {
    transform: [{ translateX: -75 }, { translateY: 0 }]
  },
  tag_4: {
    transform: [{ translateX: 50 }, { translateY: 0 }]
  },
  tag_5: {
    transform: [{ translateX: -50 }, { translateY: 0 }]
  },
  tag_6: {
    transform: [{ translateX: 55 }, { translateY: 0 }]
  },
  tag_7: {
    transform: [{ translateX: -75 }, { translateY: 0 }]
  },
  tag_8: {
    transform: [{ translateX: 50 }, { translateY: 0 }]
  },
  tag_9: {
    transform: [{ translateX: -50 }, { translateY: 0 }]
  },
  tag_10: {
    transform: [{ translateX: 100 }, { translateY: 0 }]
  },
  tagText: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  text: {
    fontSize: 28,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 100,
    left: 75
  },
  button: {
    position: 'absolute',
    bottom: 100,
    right: 25,
    transform: [{ translateX: 0 }, { translateY: 8 }]
  }
});

export default Relaxation;
