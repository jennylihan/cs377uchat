import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import LinksScreen from './screens/LinksScreen';
import SignUpScreen from './screens/SignUpScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import ChatScreen from './screens/ChatScreen';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="Chat Screen" component={ChatScreen} />
            <Stack.Screen name="Update Profile" component={UpdateProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
