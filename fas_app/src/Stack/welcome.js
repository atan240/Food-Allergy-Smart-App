import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import Images from '../images';
import Swiper from 'react-native-swiper'

export default function Welcome({navigation}) {
    const walkthroughList = [
        { id: 1, title: "Scan Your Food", text: "Use the camera function to scan the barcodes of your food products Our app will instantly let you know what allergens it contains" },
        { id: 2, title: "Customize Your Experience", text: "Set your food allergies on the home page. We'll keep track of them for you to alert you if a product contains your allergens when scanning."},
        { id: 3, title: "Explore for more", text: "Explore" },
    ];
    return (
        <View style={styles.slide}>
            <Text style={styles.headerStyle}>Welcome to Food Allergy Smart Scanner! Here are a few things you need to know to set started:</Text>
            <Swiper
                paginationStyle={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 10,
                }}
                activeDotColor="#52796f"
                activeDotStyle={{ width: 20, height: 8 }}
            >
                {walkthroughList.map((i) => {
                    return (
                        <View style={{ justifyContent: "center", alignItems: 'center', height: '100%' }}>
                            <Text style={styles.titleStyle}>{i.title}</Text>
                            <Text></Text>
                            <Text style={styles.textStyle}>{i.text}</Text>
                            {/* <Image source={i.image} /> */}
                        </View>
                    );
                })}
            </Swiper>
            <View style={styles.btmTextStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textStartedStyle}>Get started</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Text>Skip</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18,
        width: "80%",
        textAlign: "center",
        marginTop: 30,
    },
    btmTextStyle: {
        position: 'absolute',
        bottom: '5%',
        left: 0,
        right: 0,
        justiftContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonStyle: {
        backgroundColor: "#DDE5B6",
        paddingHorizontal: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStartedStyle: {
        fontWeight: "bold",
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        width: "60%",
        textAlign: "center",
    },
    textStyle: {
        fontSize: 18,
        width: "70%",
        textAlign: "center",
    },
})