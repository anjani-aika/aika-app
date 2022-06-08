import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const Start = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        },2000)   
    })
    
    return (
        <View style={styles.container}>
            <Image source={require('../../static/landingPage2.png')} style={{width:'100%',height:'100%'}}/>
            <Text style={{ fontSize:32, fontWeight:'bold',color:'black',textAlign:'center',position:'absolute',top:20}}>PACIFIC RED DOOR DEVELOPMENT</Text>
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