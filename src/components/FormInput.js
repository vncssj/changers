import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Font } from 'expo';

export default function FormInput({ placeholder, label, type }) {
        return (
                <View style={styles.formGroup}>
                        <Text style={styles.label}>{label}</Text>
                        <TextInput
                                style={styles.input}
                                placeholder={placeholder ? placeholder : ''}
                                keyboardType={type != undefined ? type : 'default'}
                        />
                </View>
        );
}
const styles = StyleSheet.create({
        formGroup: {
                margin: 10,
        },
        input: {
                width: 350,
                borderBottomWidth: 2,
                borderBottomColor: "#6D3DE5",
                borderWidth: 0,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                fontSize: 22,
                paddingLeft: 15,
                paddingTop: 10,
        },

        label: {
                paddingLeft: 1,
                color: "#0CB5CF",
                fontSize: 18
        }
});
