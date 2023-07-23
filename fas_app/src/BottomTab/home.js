import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/global_style';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Text
            onPress={() => navigation.navigate('History')}
            >See history</Text>
        </View>
    )
}