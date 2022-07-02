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
            
            const items = JSON.parse(await AsyncStorage.getItem("checkedItems"));
            let arr = JSON.parse(res);
            console.log("ITEM FINAL --------",items);
            console.log("ARRRRR ------11111",arr);
            let item2=[];
            const ids=await axios.post('https://reddoordevelopment.com/index.php/api/Users/send_request',{
                user_id:arr.user_id ,service_id:items[0].service_id
            });
            let add=route.params.address.location;
            // const addressF=`${add.add1},${add.add2},${add.landmark},${add.state},${add.pincode}`;
            // 
            const addAddress=await axios.post('https://reddoordevelopment.com/index.php/api/Users/addlocation',{
                address:`${add.add1},${add.add2}`,
                pincode:add.pincode,
                landmark:add.landmark,
                state:add.state,
                city:add.city,
                userid:arr.user_id,
                req_id:ids.data.req_id
            },{
                headers:{
                    'token':arr.token,
                    'Content-Type':'multipart/form-data'

                }
            });
            console.log("Address: ",addAddress.data);
            if(addAddress.data.status==200 ||addAddress.data.status==201){
                for(let i=0;i<items.length;i++){
                    console.log("Ids: ",ids.data);
                    if(ids.data.status==200){
                        const result=await axios.post('https://reddoordevelopment.com/index.php/api/Users/booking',
                        {
                            
                            user_id:parseInt(arr.user_id),
                            category_id:items[i].cate_id,
                            subcategory_id:parseInt(items[i].subcategory_id),
                            category_name:items[i].category_name,
                            subcategory_name:items[i].subcategory_name,
                            description:items[i].description,
                            orderid:ids.data.order_id,
                            req_id:ids.data.req_id,
                            
                        },
                        {
                            headers:{
                                'token':arr.token,
                                'Content-Type':'multipart/form-data'
                            }
                        } );
                        if(result.status=='200' && i==(items.length-1)){
                             console.log(result.data);
                            // let date=new Date();
                            // let newOrder={req_id:result.data.req_id,status:'pending',bookingTime:`${date.getHours()} : ${date.getMinutes()}`,bookingDate:`${date.getDate()} : ${date.getMonth()+1} : ${date.getFullYear()}`};
                            // const prevOrders=await AsyncStorage.getItem('Orders');
                            // console.log("newOrder: ",newOrder);
                            // if(prevOrders!==undefined && prevOrders){
                            //     console.log("PrevOrders: ",prevOrders,typeof(prevOrders));
                            //     const {Orders}=JSON.parse(prevOrders);
                            //     console.log(Orders);
                            //     await AsyncStorage.removeItem('Orders');
                            //     let accumulatedOrders=[...Orders,newOrder];
                            //     await AsyncStorage.setItem('Orders',JSON.stringify({Orders:accumulatedOrders}))
                            // }else{
                            //     await AsyncStorage.setItem('Orders',JSON.stringify({Orders:[newOrder]}));
                            // }
                            await AsyncStorage.removeItem("checkedItems");
                        
                        }
                    }
    
                }
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
               <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:100,top:'20%'}} size="large" color="#F55633" animating={loading}/>
        {loading!=true?<View style={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Image source={require('../../../static/bookingConfirmed.png')} style={{resizeMode:'stretch',borderWidth:0,borderColor:'gray',width:300,height:250,alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',fontSize:28,fontWeight:'500',marginVertical:30}}>Booking Confirmed</Text>
            <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',width:310,textAlign:'center',marginVertical:40}}>We Have Received Your Booking and Will Update your Service  Soon  !!!</Text>
            {/* <Text style={{alignSelf:'center',fontSize:18,fontWeight:'400',marginBottom:25}}>Order ID : {route.params.orderId}</Text> */}
      
     
            <View style={{marginBottom:20}}><Button title="Back To Home" titleStyle={{color:'#F55633'}} onPress={()=>{ navigation.reset({
                        index: 0,
                        routes: [{name: 'OurServicesNavigation'}],
                      });}} buttonStyle={{backgroundColor:'white',width:313,height:56,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            {/* <View ><Button title="Booking Details" onPress={()=>{navigation.navigate('CheckoutScreen')}} buttonStyle={{backgroundColor:'#F55633',width:313,height:56,alignSelf:'center',borderRadius:8}}/></View> */}
          

        </View>:null}
       
        </View>
    )
}
export default BookingConfirmed;