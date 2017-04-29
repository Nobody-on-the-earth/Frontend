import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import {
  AppRegistry
} from 'react-native';

export default class Frontend extends Component {
    render() {
        return (
            <Container>
                <Button>
                    <Text>
                        Button
                    </Text>
                </Button>
            </Container>
        );
    }
}
AppRegistry.registerComponent('Frontend', () => Frontend);