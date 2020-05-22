import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Fire from '../Fire';

export default class LinksScreen extends Component {
  state = {
    email: '',
    sunet: '',
    name: '',
    profile: '',
  }

  get user() {
    return {
      name: Fire.shared.name,
      _id: Fire.shared.uid,
    };
  }


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={styles.body}>

          <Text style={styles.name} >Name: {this.state.name} </Text>

          <Text style={styles.description}>Profile: {this.state.profile} </Text>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>SUNet ID: {this.state.sunet}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('UpdateProfileScreen')}>
              <Text>Update Profile</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
  componentDidMount() {
    //Pings firebase to get the sunet (stored in result)
    //and in the callback, we set the sunet in the state!
    Fire.shared.getsunet(sunet_result =>
      this.setState({sunet:sunet_result}));
      Fire.shared.getname(name_result =>
        this.setState({name:name_result}));
        Fire.shared.getprofile(profile_result =>
          this.setState({profile:profile_result}));
  }
}



const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:18,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
