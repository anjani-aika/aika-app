import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { Button, Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';
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
const BookingConfirmed=({navigation,route})=>{
    const [loading,setIsLoading] = useState(true);
    const bookItems=async()=>{
        try{

            let res = await AsyncStorage.getItem("user_info");
            
            let items = await AsyncStorage.getItem("checkedItems");
            let arr = JSON.parse(res);
            console.log("ARRRRR ------",arr);
            
            // let items=route.params.checkedItems;
            console.log("ITEMS ------",items)
            let orderIds=[];
            for(let i=0;i<items.length;i++){
               let data={
                    user_id:arr.user_id,
                    category_id:items[i].cate_id,
                    subcategory_id:items[i].subcategory_id,
                    category_name:items[i].category_name,
                    subcategory_name:items[i].subcategory_name,
                    description:items[i].description,
                    location:route.params.address, //
                    service_id:items[i].service_id,
                }
                const result=await axios.post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/booking',data,
                              {headers:{'token':res.token}} );
                let date=new Date();
                
                if(result.status=='200'){
                    orderIds.push({orderId:result.data.order_id,status:'pending',bookingTime:`${date.getHours} : ${date.getMinutes}`,bookingDate:`${date.getDate} : ${date.getMonth+1} : ${date.getFullYear}`});
                    await AsyncStorage.removeItem("checkedItems");
                    
                }


            }
            const prevOrders=await AsyncStorage.getItem('Orders');
            console.log("OrderIds: ",orderIds);
            if(prevOrders!=undefined && prevOrders!=null){
                const {Orders}=JSON.parse(prevOrders);
                console.log(Orders);
                await AsyncStorage.removeItem('Orders');
                let accumulatedOrders=[...Orders,...orderIds];
                await AsyncStorage.setItem('Orders',JSON.stringify({Orders:accumulatedOrders}))
            }else{
                await AsyncStorage.setItem('Orders',JOSN.stringify({Orders:orderIds}));
            }
            setIsLoading(false);
            
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
               <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'70%'}} size="large" color="#F55633" animating={loading}/>
        <View style={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Image source={require('../../../static/bookingConfirmed.png')} style={{resizeMode:'stretch',borderWidth:0,borderColor:'gray',width:300,height:250,alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',fontSize:28,fontWeight:'500'}}>Booking Confirmed</Text>
            <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',width:310,marginVertical:25,textAlign:'center'}}>We Have Received Your Booking and Will Update your Service  Soon !!!</Text>
            {/* <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',marginBottom:25}}>Order ID : {route.params.orderId}</Text> */}
      
     
            <View style={{marginBottom:20}}><Button title="Back To Home" titleStyle={{color:'#F55633'}} onPress={()=>{navigation.navigate('OurServicesNavigation')}} buttonStyle={{backgroundColor:'white',width:313,height:56,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            <View ><Button title="Booking Details" onPress={()=>{navigation.navigate('CheckoutScreen')}} buttonStyle={{backgroundColor:'#F55633',width:313,height:56,alignSelf:'center',borderRadius:8}}/></View>
          

        </View>
       
        </View>
    )
}
export default BookingConfirmed;