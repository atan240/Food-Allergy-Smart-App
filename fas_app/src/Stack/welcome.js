import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_style';

export default function Welcome() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Welcome Screen</Text>
        </View>
    )
}