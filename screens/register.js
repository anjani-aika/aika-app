import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet,View,TouchableOpacity,Modal,Text ,TextInput,Button} from 'react-native';
import { AuthContext } from '../components/context';

const RegisterScreen = ({ navigation }) => {


    const {signUp} = React.useContext(AuthContext)

    const register =() => {
       
       
    }
    
    return (

        <View style={styles.container}>

        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

})
