import React, {useState, useLayoutEffect, useEffect} from 'react'
import { StyleSheet,View,TouchableOpacity,Modal,Text ,TextInput} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddAddress = ({ navigation }) => {
    const [newAdd,setNewAdd]=useState({add1:'',add2:'',landmark:'',state:'',pincode:''});

    const onConfirm=async()=>{
        await updateAddresses();
    }
    const updateAddresses=async()=>{
        const before= await AsyncStorage.getItem('Addresses');
        console.log(before);
        await AsyncStorage.removeItem('Addresses');
        if(before){
            console.log(before);
            const {Address}=JSON.parse(before);
            const after=[...Address,newAdd];
            await AsyncStorage.setItem('Addresses',JSON.stringify({Address:[...after]}));
        }else{
            await AsyncStorage.setItem('Addresses',JSON.stringify({Address:[newAdd]}));
        }
        navigation.navigate('CheckoutPage');
       
    }



    useEffect(()=>{
        
    });
    return (

       <KeyboardAwareScrollView contentContainerStyle={{height:750,paddingTop:65,backgroundColor:'white'}}>

            
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
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
                    onChangeText={(text)=>{setNewAdd({...newAdd,add1:text})}}
                    value={newAdd.add1}
                ></TextInput>
            </View>
            <View style={styles.input}>
             
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Address Line 2"
                    onChangeText={(text)=>{setNewAdd({...newAdd,add2:text})}}
                    value={newAdd.add2}
                ></TextInput>
            </View>
            <View style={styles.input}>
               
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Pincode"
                    onChangeText={(text)=>{setNewAdd({...newAdd,pincode:text})}}
                    value={newAdd.pincode}
                ></TextInput>
            </View>
            <View style={styles.input}>
           
            <TextInput
                style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                multiline={true}
                editable={true}
                placeholderTextColor = "gray"
                placeholder=" Landmark"
                onChangeText={(text)=>{setNewAdd({...newAdd,landmark:text})}}
                value={newAdd.landmark}
                ></TextInput>
            </View>
            <View style={styles.input}>
                
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" State"
                    onChangeText={(text)=>{setNewAdd({...newAdd,state:text})}}
                    value={newAdd.state}
                ></TextInput>
            </View>
           </View>
           <View style={{flex:1.5,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
                <Button title="Confirm" onPress={()=>onConfirm()} buttonStyle={{width:300,height:56,backgroundColor:'#F55633',marginTop:0,borderRadius:8,marginBottom:10}}/>
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
