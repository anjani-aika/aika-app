import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const Start = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        },1000)   
    })
    
    return (
        <View style={styles.container}>
            <Image source={require('../../static/landingPage.jpg')} style={{width:'100%',height:'100%'}}/>
        </View>
    )
}

export default Start;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})