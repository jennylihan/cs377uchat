import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Fire from '../Fire';
import * as Analytics from 'expo-firebase-analytics';

export default class UpdateProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    		name: 'no name',
    	  about: '',
        zoom: '',
        sunet: '',
        profile: ''
    };
  }

  onPressUpdate = async () => {
    console.log("in response")
      const user = {
        name: this.state.name,
        profile: this.state.about,
        zoom: this.state.zoom
      };
      const response = await Fire.shared.updateProfile(user);
      console.log("response!!!");
      console.log(response);
    };

  onChangeTextName = name => this.setState({ name });
  onChangeProfile = profile => this.setState({ profile });

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={styles.body}>
          <TextInput
            style={styles.nameInput}
            onChangeText={this.onChangeTextName}
            value={this.state.name}
          />
          <TextInput
            style={styles.description}
            onChangeText={this.onChangeProfile}
            value={this.state.profile}
          />
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                Analytics.logEvent('UserZoomButton', {
                  screen: 'UpdateProfile',
                  purpose: 'User clicks on "Zoom" button',
                });
              }}>
                <Text>Zoom</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                Analytics.logEvent('SaveProfileChangesButton', {
                  screen: 'UpdateProfile',
                  purpose: 'User clicks on "Save Profile Changes" button',
                });
                this.onPressUpdate();
              }}>
              <Text>Save Profile Changes</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    Fire.shared.getname(sunet_result =>
      Fire.shared.getname(name_result =>
        Fire.shared.getprofile(profile_result => {
          this.setState({sunet:sunet_result, name:name_result, profile:profile_result})
        })));
  }

  //   Fire.shared.on(message =>
  //     this.setState(previousState => ({
  //       messages: GiftedChat.append(previousState.messages, message),
  //     }))
  //   ,JSON.stringify(this.props.route.params.chatRoomName));
  // }
  // componentWillUnmount() {
  //   Fire.shared.off();
  // }

}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
    marginBottom: 20
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

    alignItems: 'center',
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
  nameInput:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
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
