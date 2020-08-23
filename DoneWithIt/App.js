import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    Dimensions
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
    //console.log(Dimensions.get('screen'));
    return (
        <SafeAreaView style={[styles.container]}>
            {/* <Button
                color='blue'
                title='Boas mano'
                onPress={
                    () => console.log('texts')
                    // Alert.prompt('My symbol of love is', 'You', text =>
                    //     console.log('Message')
                    // )
                    //     Alert.alert('Ola boas', 'queres passear o cao', [
                    //         {
                    //             text: 'Yes',
                    //             onPress: () => console.log('Ayeee')
                    //         },
                    //         { text: 'Need to play more plains' },
                    //         { text: 'Yes' }
                    //     ])
                    // // native alert: alert('Ta tudo?');
                }
            /> */}
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    width: '50%',
                    height: 70
                }}
            ></View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});
