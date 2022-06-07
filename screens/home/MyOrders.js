import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderCardUnClickable=({orderId,bookingTime,bookingDate})=>{
    return(
        <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
            <Text>Order ID : GISo7OmXnp59 </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text><Text>Booking Time :</Text> 19:07</Text>
            <Icon 
             name="arrow-forward-ios"
             />
            </View>
          
            <Text><Text>Booking Date :</Text> April 15 2022</Text>
            
        </View>
    )
}
const OrderCardClickable=({orderId,bookingTime,bookingDate,navigation})=>{
    return(
        <TouchableOpacity  onPress={()=>{navigation.navigate('OrderDetails')}}>
        <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
            <Text>Order ID : GISo7OmXnp59 </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text><Text>Booking Time :</Text> 19:07</Text>
            <Icon 
             name="arrow-forward-ios"
             />
            </View>
          
            <Text><Text>Booking Date :</Text> April 15 2022</Text>
            
        </View>
        </TouchableOpacity>
    )
}
const MyOrders=({navigation})=>{
    const [oldOrders,setOldOrders]=useState([]);
    const getOrders=async()=>{
        const prevOrders=await AsyncStorage.getItem('Orders');
        if(prevOrders){
            const Orders=JSON.parse(prevOrders);
            setOldOrders([...Orders]);

        }
    }
    useEffect(()=>{
        getOrders()
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                My Orders
            </Text>
           
            {oldOrders.length!=0?oldOrders.map(order=>(
                    order.status!='pending'? 
                        (<OrderCardClickable  navigation={navigation} orderId={order.orderId} bookingTime={order.bookingTime} bookingDate={order.bookingDate}/>):
                        (<OrderCardUnClickable   orderId={order.orderId} bookingTime={order.bookingTime} bookingDate={order.bookingDate} />)
            )):null}
             <TouchableOpacity onPress={()=>{navigation.navigate('OrderDetails')}}>
                 <OrderCardUnClickable/>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default MyOrders;