//Adapted from https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c
//and  https://github.com/JscramblerBlog/RNfirebase-chat/blob/master/components/Signup.js

import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import Fire from '../Fire';
import {Component, useState} from 'react';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component{

	state = {
		name: 'Alice',
		email: 'test@gmail.com',
		password: '123456',
		avatar: ''
	};

	onPressLogin = async () => {
		const user = {
			email: this.state.email,
			password: this.state.password,
			avatar: this.state.avatar
		};

		const response = Fire.shared.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

	loginSuccess = () => {
		this.props.navigation.navigate('Chat', {
			email: this.state.email,
			avatar: this.state.avatar
		});
	};

	loginFailed = () => {
		alert('Login failure. Please try again.');
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });

	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeholder="test3@gmail.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Button
					title="Login"
					style={styles.buttonText}
					onPress={this.onPressLogin}
				/>

				<Button
					title="Signup"
					style={styles.buttonText}
					onPress={() => this.props.navigation.navigate('SignUp')}
				/>
			</View>
		);
	}
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  header: "Log In",
};

const offset = 24;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: offset,
    marginHorizontal: offset,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
