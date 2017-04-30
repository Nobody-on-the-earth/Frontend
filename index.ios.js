import React, { Component } from 'react';
import { AppRegistry, Navigator,TouchableHighlight,Text,StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import welcome from './welcome.js' ;
import login from './login.js' ;
import report from './report.js' ;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


const firebaseConfig = {
  apiKey: "1234",
  authDomain: "http://asdasd.com/",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class Frontend extends Component {

  render() {
    var defaultName = "welcome";
    var defaultComp = welcome;

    return (
      <Navigator
      initialRoute={{
      name: defaultName,
      component: defaultComp
      }}
      configureScene={(route) => {
      return Navigator.SceneConfigs.PushFromRight;
      }}
      renderScene={(route, navigator) => {
        var Component = route.component;
        return (
        <Component {...route.params} navigator={navigator} />
        );
      }}
      />
      )
    } 
      
}


AppRegistry.registerComponent('Frontend', () => Frontend);

