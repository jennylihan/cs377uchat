// Adapted from https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c

import Fire from '../Fire';

import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import { MonoText } from '../components/StyledText';

type Props = {
  name?: string,
};

function Welcome(props){
  return <Text style={styles.getStartedText}>Hello, {props.name}</Text>;
}

class ChatScreen extends React.Component<Props>{

  state = {
    messages: [],
  };

  get user() {
    return {
      name: Fire.shared.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Welcome style={styles.getStartedText} name={this.user.name}/>
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
      </View>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
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
