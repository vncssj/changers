import React, { component, Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormInput from './../components/FormInput';
import FormButton from './../components/FormButton';
export default class Register extends Component {

        render() {
                return (
                        <LinearGradient style={{ flex: 1 }} colors={["#0CB5CF", "#6D3DE5"]}>
                                <View style={styles.container}>
                                        <FormInput placeholder="Nome" label="Nome" />
                                        <FormInput placeholder="Sobrenome" label="Sobrenome" />
                                        <FormInput placeholder="Email" label="Email" />
                                        <FormInput placeholder="Senha" label="Senha" />
                                        <FormButton value='Concluir' />
                                </View>
                        </LinearGradient>
                )
        }
}

const styles = StyleSheet.create({
        container: {
                margin: 20,
                padding: 10,
                backgroundColor: "#FFF",
                borderRadius: 5,
                alignItems: 'center'
        }
});