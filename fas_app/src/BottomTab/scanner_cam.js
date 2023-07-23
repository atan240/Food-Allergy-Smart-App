import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_style';

export default function Scanner_Cam() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Scanner Camera</Text>
        </View>
    )
}