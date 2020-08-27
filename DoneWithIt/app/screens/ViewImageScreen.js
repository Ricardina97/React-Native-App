import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/color';
const chair = '../assets/chair.jpg';

const ViewImageScreen = () => (
    <View style={styles.container}>
        <View style={styles.close}></View>
        <View style={styles.delete}></View>
        <Image
            resizeMode='contain'
            style={styles.image}
            source={require(chair)}
        ></Image>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        height: '100%',
        width: '100%'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
        flex: 1,
        resizeMode: 'contain'
    },
    close: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        position: 'absolute',
        top: 40,
        left: 30
    },
    delete: {
        backgroundColor: colors.secondary,
        height: 50,
        width: 50,
        position: 'absolute',
        top: 40,
        right: 30
    }
});
export default ViewImageScreen;
