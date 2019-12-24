import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function components({ value }) {
        return (
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.value}>{value}</Text>
                </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
        button: {
                width: 300,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: "#0CB5CF",
                marginTop: 15,
                marginBottom: 15,
        },
        value: {
                fontSize: 20,
                color: "#FFF"
        }
});
