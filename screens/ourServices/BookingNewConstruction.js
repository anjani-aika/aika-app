import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { Button, Icon } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleAddress=({src,material})=>{
    const [value,setValue]=useState(false);
    return(
        <TouchableOpacity>
            <View style={{flexDirection:'column',marginTop:30}}>
            
            
            </View>
        </TouchableOpacity>
        
    )
}
const BookingNewConstruction=({navigation,route})=>{
    const [loading,setIsLoading] = useState(true);
    const bookItems=async()=>{
        try{
            
            let res = await AsyncStorage.getItem("user_info");
            let arr = JSON.parse(res);
            console.log("ARRRRR ------11111",arr,typeof(JSON.stringify(route.params.address.location)));
            console.log("orderid",route.params.order_id);
            console.log("state",route.params.address.location.state);
            console.log("add",JSON.stringify(route.params.address.location));
            const address=await axios.post('https://reddoordevelopment.com/index.php/api/Users/booking_address',{
              order_id:route.params.order_id,
              city:route.params.address.location.state,
              address:route.params.address.location.toString()
            },{
              headers:{
                'token':arr.token,
                'Content-Type':'multipart/form-data',
              }
            });
            console.log(address.data);
            if(address.data.status=200){
                setIsLoading(false);
            }else{
                console.log("Error",address.data)
            }
     

           
            
        }catch(err){
            // await AsyncStorage.removeItem("checkedItems");
            console.log("Error: ",err);
        }

    }

    useEffect(()=>{
       
        bookItems();
       
    },[])
   
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
               <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:100,top:'20%'}} size="large" color="#F55633" animating={loading}/>
        {loading!=true?<View style={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Image source={require('../../static/bookingConfirmed.png')} style={{resizeMode:'stretch',borderWidth:0,borderColor:'gray',width:300,height:250,alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',fontSize:28,fontWeight:'500',marginVertical:30}}>Booking Confirmed</Text>
            <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',width:310,textAlign:'center',marginVertical:40}}>We Have Received Your Booking and Will Update your Service  Soon  !!!</Text>
            {/* <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',marginBottom:25}}>Order ID : {route.params.orderId}</Text> */}
      
     
            <View style={{marginBottom:20}}><Button title="Back To Home" titleStyle={{color:'#F55633'}} onPress={()=>{navigation.navigate('OurServices')}} buttonStyle={{backgroundColor:'white',width:313,height:56,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            {/* <View ><Button title="Booking Details" onPress={()=>{navigation.navigate('CheckoutScreen')}} buttonStyle={{backgroundColor:'#F55633',width:313,height:56,alignSelf:'center',borderRadius:8}}/></View> */}
          

        </View>:null}
       
        </View>
    )
}
export default BookingNewConstruction;