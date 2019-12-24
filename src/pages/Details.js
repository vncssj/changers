import React, { component, Component } from 'react';
import { View, Text } from 'react-native';
export default class Details extends Component {

        render() {
                const { navigation } = this.props;
                const dado1 = navigation.getParam('dado1', 'Sem Dado')
                return (
                        <View>
                                <Text>Dado1 = {JSON.stringify(dado1)}</Text>
                        </View>
                )
        }
} 