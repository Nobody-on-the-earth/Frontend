import React, { Component, } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Grid} from 'native-base';
import {
  AppRegistry,
  Image, 
  View
} from 'react-native';

export default class Welcome extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{flex: 1}} >
                    <Grid style={{alignItems: 'center', justifyContent: 'center' }}>
                      <View>
                        <Image
                          style={{width: 375, height: 667}}
                          source={require('./pic/IntroPages.png')}
                        />
                      </View>
                    </Grid>
                </Content>
            </Container>
        );
    }
}


AppRegistry.registerComponent('Frontend', () => Welcome);
