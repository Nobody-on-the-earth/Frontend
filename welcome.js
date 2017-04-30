import React, { Component } from 'react';
import { View , Text, Container, Content, Grid } from 'native-base';
import {
  AppRegistry,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';


import login from './login.js' ;
import report from './report.js' ;


export default class welcome extends Component {

  toNext() {
  const { navigator } = this.props;
  if(navigator) {
  navigator.push({
  name: 'login',
  component: login
  })
  }
}

  
  render() {

        return (
            <Container>
                <Content contentContainerStyle={{flex: 1}} >
                    <Grid style={{alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight onPress={ () => this.toNext() }>
                          <Image
                            style={{width: 375, height: 667}}
                            source={require('./pic/IntroPages.png')}
                          />
                        </TouchableHighlight>
                    </Grid>
                </Content>
            </Container>
        );

    }


}