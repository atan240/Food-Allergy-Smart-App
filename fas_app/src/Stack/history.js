import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_style';

export default function History() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>History</Text>
        </View>
    )
}