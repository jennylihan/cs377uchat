//https://www.bootdey.com/react-native-snippet/56/Craigslist-Mobile-App
//https://www.bootdey.com/react-native-snippet/37/Cards-with-overlay

import React, { Component } from 'react';
import * as Analytics from 'expo-firebase-analytics';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  TouchableHighlight
} from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:"0", title: "Welcome to Code2Gether",  time:"It's Week 8!", image:"https://lorempixel.com/400/200/nature/5/"} ,
        {id:"1", title: "Assignment #6: 'Dictionaries and Baby Names' is out ",    image:"https://lorempixel.com/400/200/nature/4/"},
      ],
      data2: [
        {id:"0",  name: "Link to Assignment 6",   image:"https://img.icons8.com/ios/50/000000/city-square.png"},
        {id:"1",  name: "Chat about homework",   image:"https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png"},
      ]
    };
  }


  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.filterContainer}>
          <Image
            style={styles.img}
            source={require('../assets/images/Background.png')}
          />
        </View>

        <View style={styles.rows}>
          <TouchableOpacity
            onPress={() => {
              Analytics.logEvent('AskQuestionButton', {
                screen: 'home',
                purpose: 'User clicks on "Ask a question in the Chat Rooms"',
              });
              navigation.navigate('Chat')}}
            >
            <Image source={require('../assets/images/Chatrooms.png')}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bubble}
            onPress={() => {
              Analytics.logEvent('AssignmentLink', {
                screen: 'home',
                purpose: 'User clicks on external assignment link',
              });
              WebBrowser.openBrowserAsync('https://web.stanford.edu/class/cs106a/assn/babynames')
            }}
          >
            <Image source={require('../assets/images/Assignments.png')}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    justifyContent: 'space-evenly'
  },
  img: {
    top: 40
  },
  list: {
    backgroundColor:"#000000",
  },
  rows: {
    left: -5,
    top: -200,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bubble: {
    alignItems: 'center',
    top: -5
  },

  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#ebf0f7",
  },
  cardHeader: {
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
},
loginButton: {
  backgroundColor: "#3498db",
},
buttonText: {
  color: "#FFFFFF",
  fontSize:20,
},

cardContent2: {
    marginLeft:20,
    marginTop:10
  },
  image2:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },
  card2:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },
  name2:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count2:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton2: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText2:{
    color: "#dcdcdc",
    fontSize:12,
  },
});
