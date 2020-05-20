import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class HomeScrenProfile extends React.Component {
  state = {
		pname: '',
		zoom: ''
	};

  // onPressUpdate = async () => {
	// 	try {
	// 		const user = {
	// 			name: this.state.name,
	// 			email: this.state.email,
	// 			password: this.state.password
	// 			//add more props & match this in Fire.js
	// 		};
	// 		await Fire.shared.createAccount(user);
	// 	} catch ({ message }) {
	// 		console.log('create account failed. catch error:' + message);
	// 	}
	// };

  onChangeTextName = pname => this.setState({ pname });
  onChangeTextZoom = zoom => this.setState({ zoom });

//do we need a render?
render(){
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.getStartedText}> Welcome to Code2Gether </Text>
      <Text style={styles.getStartedText}> Please Complete your Profile </Text>

      <Text style={styles.title}> Preferred Name:</Text>
      <TextInput
        style={styles.nameInput}
        placeholder="Name to be displayed"
        onChangeText={this.onChangeTextName}
        value={this.state.pname}
      />
      <Text style={styles.title}>Zoom Link:</Text>
      <TextInput
        style={styles.nameInput}
        onChangeText={this.onChangeTextZoom}
        value={this.state.zoom}
      />
      <Button
        title="Update"
        style={styles.buttonText}
        pname={this.state.pname}
        zoom={this.state.zoom}
        onPress={Fire.shared.updateProfile}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
    </ScrollView>
  );
}
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  getStartedText: {
    paddingLeft: 15,
  },
});
