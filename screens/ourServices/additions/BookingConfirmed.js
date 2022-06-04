import React,{useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { Button, Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';

const SingleAddress=({src,material})=>{
    const [value,setValue]=useState(false);
    return(
        <TouchableOpacity>
            <View style={{flexDirection:'column',marginTop:30}}>
            
            
            </View>
        </TouchableOpacity>
        
    )
}
const BookingConfirmed=({navigation,route})=>{
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Image source={require('../../../static/bookingConfirmed.png')} style={{resizeMode:'stretch',borderWidth:0,borderColor:'gray',width:300,height:250,alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',fontSize:28,fontWeight:'500'}}>Booking Confirmed</Text>
            <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',width:330,marginVertical:25}}>We Have Received Your Booking and Will Update your Service  Soon !!!</Text>
            <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',marginBottom:25}}>Order ID : {route.params.orderId}</Text>
      
     
            <View style={{marginBottom:20}}><Button title="Back To Home" titleStyle={{color:'#F55633'}} onPress={()=>{navigation.navigate('OurServicesNavigation')}} buttonStyle={{backgroundColor:'white',width:313,height:56,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            <View ><Button title="Booking Details" onPress={()=>{navigation.navigate('CheckoutPage')}} buttonStyle={{backgroundColor:'#F55633',width:313,height:56,alignSelf:'center',borderRadius:8}}/></View>
          

        </View>
       
        </View>
    )
}
export default BookingConfirmed;