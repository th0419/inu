import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {

  return (
    <LinearGradient
    colors={['#444444', '#222222', '#444444']}
    style={styles.container}
    >
      <ScrollView>
        <View style={[styles.profileImageContainer]}>
          <View style={[styles.profileImage]}>
            <MaterialCommunityIcons name="account" size={160} color="#FFFFFF" />
          </View>
        </View>
        <View style={[styles.profileNameContainer]}>
          <Text style={[styles.profileName]}>キノシタカズヤ</Text>
          <Text style={[styles.profileNameUser]}>@KazuyaKinoshita</Text>
        </View>
        <View style={[styles.myList]}>
          <Text style={[styles.myListText]}>マイリスト</Text>
          <View style={[styles.myListContents]}>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
            <View style={[styles.myListContentsContents]}></View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  profileImageContainer: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    alignItems: 'center'
  },
  profileImage: {
    width: 200,
    height: 200,
    borderWidth: .5,
    borderColor: 'rgba(255, 255, 255, .5)',
    borderRadius: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  profileNameContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  profileName: {
    marginTop: 10,
    fontSize: 28,
    color: '#FFFFFF'
  },
  profileNameUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  myList: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#444444',
    marginTop: 30,
    paddingBottom: 30
  },
  myListText: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  myListContents: {
    width: '100%',
    marginTop: 15,
    marginLeft: 3.75,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  myListContentsContents: {
    width: 117.5,
    height: 88.125,
    borderRadius: 2.5,
    backgroundColor: 'lightgrey',
    marginTop: 5,
    marginLeft: 2.5,
    marginRight: 2.5
  }
});
