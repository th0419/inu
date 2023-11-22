import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from "expo-router";

const Select = () => {

  return (
    <View style={styles.container}>
      <Link href='/relaxation'>
        <Image
          source={require('../img/select/relaxationIcon.webp')}
          style={[styles.relaxationIcon]}
        />
      </Link>
      <Link href='/relaxation'>
        <Image
          source={require('../img/select/excitingIcon.webp')}
          style={[styles.excitingIcon]}
        />
      </Link>
    <Text style={[styles.text]}>どちらを体験しますか？</Text>
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
  relaxationIcon: {
    width: 200,
    height: 150,
    borderWidth: .25,
    borderRadius: 5,
    borderColor: 'rgba(255, 255, 255, .5)',
    backgroundColor: '#F5F5F5',
    transform: [{ translateX: -50 }, { translateY: 0 }]
  },
  excitingIcon: {
    width: 200,
    height: 150,
    borderWidth: .25,
    borderRadius: 5,
    borderColor: 'rgba(255, 255, 255, .5)',
    backgroundColor: '#F5F5F5',
    transform: [{ translateX: 50 }, { translateY: 12.5 }]
  },
  text: {
    fontSize: 21,
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 175,
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: 0 }]
  }
});

export default Select;
