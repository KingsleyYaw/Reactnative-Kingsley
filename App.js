import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import * as Font from 'expo-font';
import AppNavigator from './src/navigations/Navigator';
import AppLoading from 'expo-app-loading';

export default class App extends React.Component {
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Bold' : require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
   (this.state.isFontLoaded === true )? (<AppNavigator/>):(<AppLoading/>)
      );
  }

}
=======

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> cc38bf88ea2ffa9674e2624c248a158cf6299834
