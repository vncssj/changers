import React, { component, Component } from 'react';
import { Button, Image, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FormInput from './../components/FormInput';
import FormButton from './../components/FormButton';

export default class Home extends Component {
        render() {
                const { navigation } = this.props;
                return (
                        <LinearGradient style={{ flex: 1 }} colors={["#0CB5CF", "#6D3DE5"]}>
                                <View style={styles.topo}>
                                        <Image source={require('./../../assets/icon.png')} style={styles.logo} />
                                </View>
                                <View style={styles.body}>
                                        <FormInput placeholder="Digite seu email..." label="Email:" type="email-address" />
                                        <FormInput placeholder="Digite sua senha..." label="Senha:" />
                                        <FormButton value="Entrar" />
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                                <Text>Cadastre-se</Text>
                                        </TouchableOpacity>
                                </View>
                        </LinearGradient >
                )
        }

}

function Ancora() {
        return (
                <View>
                        <Button title="Home" onPress={alert(this.navigation)} />
                </View>
        );
}
const styles = StyleSheet.create({
        topo: {
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
        },
        logo: {
                width: 150,
                height: 150,
                borderRadius: 10,
        },
        body: {
                flex: 3,
                alignItems: "center"
        }

        // rest of the styles
});