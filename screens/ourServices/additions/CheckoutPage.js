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
const CheckoutPage=({navigation})=>{
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               Choose Address
            </Text>
            <SingleAddress src={require('../../../static/orders/Countertops.png')} material={'Countertops'}/>
      
     
            <View style={{marginBottom:20}}><Button title=" +  Add New Address" titleStyle={{color:'#F55633'}} onPress={()=>{navigation.navigate('AddAddress')}} buttonStyle={{backgroundColor:'white',width:190,height:41,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            <View ><Button title="Check out" onPress={()=>{navigation.navigate('Booking')}} buttonStyle={{backgroundColor:'#F55633',width:304,height:50,alignSelf:'center',borderRadius:8}}/></View>
          

        </ScrollView>
       
        </View>
    )
}
export default CheckoutPage;