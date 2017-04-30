import React, { Component } from 'react';
import { AppRegistry, Image, TouchableHighlight , Navigator, StyleSheet } from 'react-native';
import { DeckSwiper, View, Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import * as firebase from 'firebase';

import welcome from './welcome.js' ;
import report from './report.js' ;

var button_text = "Login First" ;
var Logined = false ;

const cards = [
    {
        image: require('./pic/IntroPages.png'),
    },
    {
        image: require('./pic/IntroPages.png'),
    }
];

var styles = StyleSheet.create({
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


export default class login extends Component {
  


    toNext() {
      const { navigator } = this.props;
      if(navigator) {
      navigator.push({
      name: 'report',
      component: report
      })
      }
    }

    render() {
        return (

            <Container>
            	<Content>
                  <View >
	                    <DeckSwiper

                        style = {{ flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}
                        dataSource={cards}
                        renderItem={item =>
                            
                            <Card style={{ elevation: 2 }}>
                                
                                <CardItem>
                                    <Image style={{ resizeMode: 'cover', width: 345, height: 345}} source={item.image} />
                                </CardItem>
                                
                            </Card>
                        }
                    />

                  <View style={{ }}>
	                <TouchableHighlight>
                    <Button  onPress={ () => this.toNext() } >
			                	<Text >{button_text}</Text>
			              </Button>
                  </TouchableHighlight>
                  </View>
                </View>

	                </Content>
            </Container>
        );
    }
}