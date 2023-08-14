import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>Home Screen</Text>
            <Text
            onPress={() => navigation.navigate('History')}
            >See history</Text>
        </View>
    );
}