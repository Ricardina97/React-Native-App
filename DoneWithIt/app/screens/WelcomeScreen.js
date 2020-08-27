import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Image } from 'react-native';

const welcomeScreenImage = '../assets/background.jpg';
const logoImage = '../assets/logo-red.png';

const WelcomeScreen = () => (
    <ImageBackground
        source={require(welcomeScreenImage)}
        style={styles.background}
    >
        {/* Logo + Text */}
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require(logoImage)} />
            <Text>Sell what you don't need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
    </ImageBackground>
);
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
});
export default WelcomeScreen;
