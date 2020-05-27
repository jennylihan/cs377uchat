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
          label="General/Conceptual Questions"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Question 1 Chat Room"',
            });
            this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_general'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Milestone 1: Add a single name"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Milestone 1 Chat Room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_milestone1'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Milestone 2: Processing a whole file"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Milestone 2 Chat Room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_milestone2'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Milestone 3: Processing files and enabling search"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Milestone 3 Chat Room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_milestone3'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Milestone 4: Run the provided graphics code"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Milestone 4 Chat Room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_milestone4'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Milestone 5: Draw the background grid"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Milestone 5 Chat Room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_milestone5'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Milestone 6: Plot the baby name data"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Milestone 6 Chat Room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_milestone6'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Extension features"
          onPress={() => {
            Analytics.logEvent('JoinChat', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Extensions"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'a6_extensions'})}}
        />
        <OptionButton
          icon="ios-chatboxes"
          label="Use this chat room for testing features"
          onPress={() => {
            Analytics.logEvent('TestChatRoom', {
              screen: 'QuestionRooms',
              purpose: 'User clicks on "Testing chat room"',
            });
          this.props.navigation.navigate('Chat Room', {chatRoomName: 'messages6'})}}
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
