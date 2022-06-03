import React, {useState, useLayoutEffect, useEffect} from 'react'
import { StyleSheet,View,TouchableOpacity,Modal,Text ,TextInput} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const AddAddress = ({ navigation }) => {



    useEffect(()=>{console.log("register")});
    return (

       <KeyboardAwareScrollView contentContainerStyle={{height:650,paddingTop:65,backgroundColor:'white'}}>

            
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               Add Address
            </Text>
           
           <View style={{flex:4,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={styles.input}>
                
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Address Line 1"
                ></TextInput>
            </View>
            <View style={styles.input}>
             
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Address Line 2"
                ></TextInput>
            </View>
            <View style={styles.input}>
               
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Pincode"
                ></TextInput>
            </View>
            <View style={styles.input}>
           
            <TextInput
                style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                multiline={true}
                editable={true}
                placeholderTextColor = "gray"
                placeholder=" Landmark"
                ></TextInput>
            </View>
            <View style={styles.input}>
                
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" State"
                ></TextInput>
            </View>
           </View>
           <View style={{flex:1.5,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
                <Button title="Confirm" buttonStyle={{width:300,height:56,backgroundColor:'#F55633',marginTop:20,borderRadius:8,marginBottom:10}}/>
           </View>
       </KeyboardAwareScrollView>
    )
}

export default AddAddress;

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
        borderRadius:6,
        backgroundColor:'#F6F6F6'
      },

})
