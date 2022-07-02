import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, ScrollView , ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const OrderCardClickable=({orderId,bookingTime,bookingDate,navigation})=>{
    return(
        <TouchableOpacity  onPress={()=>{navigation.navigate('OrderDetails',{request_id:orderId,bookingDate:bookingDate,bookingTime:bookingTime})}}>
        <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
            <Text style={{color:'black'}}>Order ID : {orderId} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Time :</Text>{bookingTime}</Text>
            <Icon 
             name="arrow-forward-ios"
             />
            </View>
          
            <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Date :</Text>{bookingDate}</Text>
            
        </View>
        </TouchableOpacity>
    )
}
const MyOrders=({navigation})=>{
    const [oldOrders,setOldOrders]=useState([]);
    const [loading,setIsLoading]=useState(true);
    const reloadOrders=async()=>{
        await getOrders();
        
    }
    const getOrders=async()=>{
   
        try{
                let res = await AsyncStorage.getItem("user_info");
                let arr = JSON.parse(res);
                console.log("ARRRRR ------",arr,arr.user_id);
                if(arr!= null || arr === [] || arr == ""){
                    const viewAllOrders=await axios.post('https://reddoordevelopment.com/index.php/api/Users/view_all_order',{
                            user_id:arr.user_id
                        },{
                            headers:{
                                'token':arr.token,
                                'Content-Type':'multipart/form-data',
                            }
                    });
                    console.log("View All Orders: ",viewAllOrders.data);
                    if(viewAllOrders){
                        let filterOrders=viewAllOrders.data.order.map(order=>{
                           let bookingTimeAndDate= order.created_date.split(' ');
                           let bookingTime=bookingTimeAndDate[1];
                           let bookingDate=bookingTimeAndDate[0]
                           return {orderId:order.req_id,bookingTime:bookingTime,bookingDate:bookingDate}
                        });
                       // console.log("FilteredOrders: ",filterOrders);
                        setOldOrders([...filterOrders]);
                        setIsLoading(false);
                    }
                    
                  
                }
                    
        }catch(err){
            console.log("Error: ",err);
        }
    }
    useEffect(()=>{
        getOrders();
        const willFocusSubscription = navigation.addListener('focus', () => {
            getOrders();
        });
      
  
      return willFocusSubscription;
    },[navigation])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'50%',top:'50%'}} size="large" color="#F55633" animating={loading}/>
            <View style={{paddingTop:25,flexDirection:'row'}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingLeft:25,flex:1}}>
                My Orders
            </Text>
            <Text onPress={()=>reloadOrders()} style={{color:'#F55633',flex:1,textAlign:'right',paddingRight:25}}>Refresh</Text>
            </View>
           
           <View style={{marginBottom:100}}>
                 {oldOrders.length!=0?oldOrders.map((order,index)=>(
                        
                    (<OrderCardClickable key={`${index}_${order.bookingDate}_${order.bookingTime}`} navigation={navigation} orderId={order.orderId} bookingTime={order.bookingTime} bookingDate={order.bookingDate}/>)
                        // (<OrderCardUnClickable   orderId={order.orderId} bookingTime={order.bookingTime} bookingDate={order.bookingDate} />)
                )):null}
           </View>
            
             
        </ScrollView>
    )
}

export default MyOrders;