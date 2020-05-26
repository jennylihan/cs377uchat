//Adapted from  https://github.com/JscramblerBlog/RNfirebase-chat/blob/master/components/Signup.js


import Fire from '../Fire';
import * as React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ImageEditor } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';

export default class Signup extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		avatar: '',
		sunet: '',
		profile: ''
	};

	onPressCreate = async () => {
		try {
			const user = {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				sunet: this.state.sunet,
				profile: this.state.profile,
				number: this.state.number
				//add more props & match this in Fire.js
			};
			await Fire.shared.createAccount(user);
		} catch ({ message }) {
			console.log('create account failed. catch error:' + message);
		}
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
	onChangeTextName = name => this.setState({ name });
	onChangeTextSunet = sunet => this.setState({ sunet });
	onChangeTextProfile = profile => this.setState({ profile });
	onChangeTextNumber = number => this.setState({ number });



	onImageUpload = async () => {
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);
		try {
			// only if user allows permission to camera roll
			if (cameraRollPerm === 'granted') {
				let pickerResult = await ImagePicker.launchImageLibraryAsync({
					allowsEditing: true,
					aspect: [4, 3]
				});
				console.log(
					'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
				);

				var wantedMaxSize = 150;
				var rawheight = pickerResult.height;
				var rawwidth = pickerResult.width;
				var ratio = rawwidth / rawheight;
				var wantedwidth = wantedMaxSize;
				var wantedheight = wantedMaxSize / ratio;
				// check vertical or horizontal
				if (rawheight > rawwidth) {
					wantedwidth = wantedMaxSize * ratio;
					wantedheight = wantedMaxSize;
				}
				let resizedUri = await new Promise((resolve, reject) => {
					ImageEditor.cropImage(
						pickerResult.uri,
						{
							offset: { x: 0, y: 0 },
							size: { width: pickerResult.width, height: pickerResult.height },
							displaySize: { width: wantedwidth, height: wantedheight },
							resizeMode: 'contain'
						},
						uri => resolve(uri),
						() => reject()
					);
				});
				let uploadUrl = await Fire.shared.uploadImage(resizedUri);
				this.setState({ avatar: uploadUrl });
				await Fire.shared.updateAvatar(uploadUrl);
			}
		} catch (err) {
			console.log('onImageUpload error:' + err.message);
			alert('Upload image error:' + err.message);
		}
	};

	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextName}
					value={this.state.name}
				/>
				<Text style={styles.title}>Zoom link (SUNet ID before the @ sign):</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextSunet}
					value={this.state.zoom}
				/>
				<Text style={styles.title}>Introduce yourself (working style, prior courses, etc):</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextProfile}
					value={this.state.profile}
				/>
				<Text style={styles.title}>Provide your phone number:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextNumber}
					value={this.state.number}
				/>
				<Button
					title="Signup"
					style={styles.buttonText}
					onPress={
						Analytics.logEvent('SignupButton', {
							screen: 'SignUp',
							purpose: 'User clicks on "Signup" text',
						}),
						this.onPressCreate}
				/>
				<Button
					title="Upload Avatar"
					style={styles.buttonText}
					onPress={this.onImageUpload}
				/>
        <Button
          title="Back to Log In"
          style={styles.buttonText}
          onPress={() => {
						Analytics.logEvent('BackToLoginButton', {
							screen: 'SignUp',
							purpose: 'User clicks on "Back to Log In" text',
						});
						this.props.navigation.navigate('Login')}}
        />
			</View>
		);
	}
}

const offset = 16;
const styles = StyleSheet.create({
	title: {
		marginTop: offset,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: offset
	},
	buttonText: {
		marginLeft: offset,
		fontSize: 42
	}
});
