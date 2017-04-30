import React, { Component } from 'react';
import { TouchableHighlight,StyleSheet,Navigator} from 'react-native';
import { Container, Content, Badge, Text, View } from 'native-base';
import * as firebase from 'firebase';

import welcome from './welcome.js' ;
import login from './login.js' ;
var t = require('tcomb-form-native');

var Form = t.form.Form;
var options = {};

// here we are: define your domain model
var Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default class report extends Component {
    

    render() {
        return (

            <View style={styles.container}>
            <Form
              ref="form"
              type={Person}
              options={options}
            />
              <TouchableHighlight style={styles.button} onPress={ () => this.props.Navigator.pop()} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
          </View>
        );
    }



}