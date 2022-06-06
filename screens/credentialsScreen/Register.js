import React, {useState, useLayoutEffect, useEffect} from 'react'
import { StyleSheet,View,TouchableOpacity,Modal,Text ,TextInput} from 'react-native';
import { AuthContext } from '../../components/context';
import { Button,Icon } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Register = ({ navigation }) => {


    const {signUp} = React.useContext(AuthContext);
    const register =() => {
        
    }
    useEffect(()=>{console.log("register")});
    return (

       <KeyboardAwareScrollView contentContainerStyle={{height:650,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}}>
           <View  style={{flex:1,borderWidth:0,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:24,fontFamily:'Poppins-Bold', color:'black'}}>Register New User</Text>
           </View>
           <View style={{flex:4,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={styles.input}>
                <Icon name='person-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your full name"
                ></TextInput>
            </View>
            <View style={styles.input}>
                <Icon name='call' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your phone number"
                ></TextInput>
            </View>
            <View style={styles.input}>
                <Icon name='mail-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your Email Address"
                ></TextInput>
            </View>
            <View style={styles.input}>
            <Icon name='lock-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
            <TextInput
                style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                multiline={true}
                editable={true}
                placeholderTextColor = "gray"
                placeholder=" Enter your password"
                ></TextInput>
            </View>
            <View style={styles.input}>
                <Icon name='place' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Location"
                ></TextInput>
            </View>
           </View>
           <View style={{flex:1.5,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
                <Text style={{textAlign:'center',width:'80%',fontFamily:'Poppins-Light',color:'black',paddingTop:40}}>
                By singing up you accept the <Text style={{color:'#748AF9'}}>Team</Text> of <Text style={{color:'#748AF9'}}>Service</Text> and <Text style={{color:'#748AF9'}}>Privacy Policy</Text>
                </Text>
                <Button title="REGISTER" buttonStyle={{width:300,height:56,backgroundColor:'#F55633',marginTop:20,borderRadius:10}}/>
           </View>
       </KeyboardAwareScrollView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    input:{
        marginTop:10,
        width:'88%',
        height:50,
        borderColor:'gray',
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:8,
        backgroundColor:'#F6F6F6'
      },

})
