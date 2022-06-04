import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { Button, Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleAddress=({add1,add2,landmark,state,pincode})=>{
    const [value,setValue]=useState(false);

    return(
        <TouchableOpacity>
            <View style={{flexDirection:'row',marginVertical:20,width:340,height:87,alignSelf:'center',borderColor:'gray',borderWidth:1,backgroundColor:(value==true?'#FFBB9E':'white')}}>
            <View style={{width:'13%',justifyContent:'center',}}>
            <CheckBox
                center
                title=''
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={value}
                size={24}
                checkedColor='#F55633'
                containerStyle={{alignSelf:'center',justifyContent:'center',alignContent:'center'}}
                onIconPress={()=>setValue(!value)}
                />
            </View>
            <View style={{width:'87%',padding:5,justifyContent:'center',}}>
                <Text style={{fontSize:16,fontWeight:'500',textTransform:'capitalize'}}>{state}</Text>
                <Text style={{fontSize:14,fontWeight:'500'}}>{add1},{add2},{landmark},{state},{pincode}</Text>
            </View>
            </View>
        </TouchableOpacity>
        
    )
}
const CheckoutPage=({navigation})=>{
    const [oldAddresses,setOldAddresses]=useState([]);
    const getAddresses=async()=>{
        const addresses=await AsyncStorage.getItem('Addresses');
        console.log("adrrss",addresses);
        if(addresses){
            const {Addresses}=JSON.parse(addresses);
            setOldAddresses((oldAddresses)=>{
                oldAddresses=[...addresses]
            });
            console.log(oldAddresses)

        }
    }
    useEffect(()=>{
        getAddresses();
    },[])
    useEffect(()=>{console.log('hi')},[oldAddresses])
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               Choose Address
            </Text>
            <SingleAddress add1={'add1'} add2={'add2'} pincode={'pincode'} landmark={'landmark'} state={'state'}/>
            {oldAddresses==null?null: oldAddresses.map(address=>(<SingleAddress add1={address.add1} add2={address.add2} pincode={address.pincode} landmark={address.landmark} state={address.state}/> ))}
            
     
            <View style={{marginBottom:20}}><Button title=" +  Add New Address" titleStyle={{color:'#F55633'}} onPress={()=>{navigation.navigate('AddAddress')}} buttonStyle={{backgroundColor:'white',width:190,height:41,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            <View ><Button title="Check out" onPress={()=>{navigation.navigate('BookingConfirmed',{orderId:'GISo7OmXnp59'})}} buttonStyle={{backgroundColor:'#F55633',width:304,height:50,alignSelf:'center',borderRadius:8}}/></View>
          

        </ScrollView>
       
        </View>
    )
}
export default CheckoutPage;