import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Notification=({navigation})=>{
    
const OrderCard=()=>{
    return(
        <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
            <Text>Order ID : GISo7OmXnp59 </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text><Text>Booking Time :</Text> 19:07</Text>
            <Text style={{color:'green'}}>(invoice received)</Text>
            </View>
          
            <Text><Text>Booking Date :</Text> April 15 2022</Text>
            
        </View>
    )
}
    const [oldOrders,setOldOrders]=useState([]);
    const getOrders=async()=>{
   
        try{
                let res = await AsyncStorage.getItem("user_info");
                let arr = JSON.parse(res);
                console.log("ARRRRR ------",arr,arr.user_id);
                if(arr!= null || arr === [] || arr == ""){
                    const viewAllOrders=await axios.post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/view_all_order',{
                            user_id:arr.user_id
                        },{
                            headers:{
                                'token':arr.token
                            }
                    });
                    console.log("View All Orders: ",viewAllOrders.data.order[0]);
                    if(viewAllOrders){
                        let filterOrders=viewAllOrders.data.order.map(order=>{
                           let bookingTimeAndDate= order.created_date.split(' ');
                           let bookingTime=bookingTimeAndDate[1];
                           let bookingDate=bookingTimeAndDate[0];
                          
                           return {orderId:order.req_id,bookingTime:bookingTime,bookingDate:bookingDate,orderStatus:order.admin_order_status}
                        });
                        console.log("FilteredOrders: ",filterOrders);
                        setOldOrders([...filterOrders]);
                    }
                    
                  
                }
                    
        }catch(err){
            console.log("Error: ",err);
        }
    }

    useEffect(()=>{
        getOrders()
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                Notifications
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('OrderDetails')}}>
            <OrderCard/>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Notification;