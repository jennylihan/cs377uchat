import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import * as Analytics from 'expo-firebase-analytics';

type Props = {
  name?: string,
};

class QuestionRooms extends React.Component {
  render(props) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <OptionButton
          icon="ios-chatboxes"
          label="Question 1 Chat Room"
          onPress={() => {
            Analytics.logEvent('QuestionOne', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 1 Chat Room"',
            });
            this.props.navigation.navigate('ChatScreen', {chatRoomName: 'messages1'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Question 2 Chat Room"
          onPress={() => {
            Analytics.logEvent('QuestionTwo', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 2 Chat Room"',
            });
          this.props.navigation.navigate('ChatScreen', {chatRoomName: 'messages2'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Question 3 Chat Room"
          onPress={() => {
            Analytics.logEvent('QuestionThree', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 3 Chat Room"',
            });
          this.props.navigation.navigate('ChatScreen', {chatRoomName: 'messages3'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Question 4 Chat Room"
          onPress={() => {
            Analytics.logEvent('QuestionFour', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 4 Chat Room"',
            });
          this.props.navigation.navigate('ChatScreen', {chatRoomName: 'messages4'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Question 5 Chat Room"
          onPress={() => {
            Analytics.logEvent('QuestionFive', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 5 Chat Room"',
            });
          this.props.navigation.navigate('ChatScreen', {chatRoomName: 'messages5'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Question 6 Chat Room"
          onPress={() => {
            Analytics.logEvent('QuestionSix', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 5 Chat Room"',
            });
          this.props.navigation.navigate('ChatScreen', {chatRoomName: 'messages6'})}}
          isLastOption
        />

      </ScrollView>
    );
  }
}

export default QuestionRooms;

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
});
