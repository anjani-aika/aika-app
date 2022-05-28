import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const Start = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        },3000)   
    })
    
    return (
        <View style={styles.container}>
            {/* <View > */}
            {/* <Image source={require('')} style={styles.leave}/>
            <Image source={require('')} style={styles.logo}/> */}
            {/* </View> */}
        </View>
    )
}

export default Start;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#738BF3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})