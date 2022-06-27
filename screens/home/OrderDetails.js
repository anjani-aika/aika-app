import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
// import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item=({src,material})=>{
    console.log(src)
    return(
        <View style={{flexDirection:'row',paddingLeft:25,marginTop:30}}>
            <Image 
                source={{uri:src}}
                style={{marginRight:20,    width: 70,
                    height: 50,borderRadius:5
                }}
            />
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:'500',color:'black',width:180}}>{material}</Text>
        </View>
    )
}

const Pricinglist=({material,rate})=>{
    return(
        <View style={{...styles.div,marginTop:15}}>
            <Text style={{flex:1.4,...styles.innerdiv,fontSize:15,textAlign:'left',height:55}}>{material}</Text>
            <View style={{flex:2}}>
                <Text style={{textAlign:'right',borderColor:'gray',justifyContent:'center',alignItems:'center',borderWidth:1,width:134,height:32,textAlign:'center', alignSelf:'flex-end',textAlignVertical:'center',borderRadius:10,color:'black'}}>{rate}$/Sqft</Text>
            </View>
        </View>
    )
}
const PricingApproved=({priceDetails})=>{
    // const [itemWithPrice,setItemWithPrice]=useState([]);

    useEffect(()=>{

    },[])
    return(
       <View style={{borderColor:'gray',borderWidth:1,width:'90%',alignSelf:'center',marginVertical:20,borderRadius:5}}>
           <Text style={{textAlign:'center',fontSize:20,fontWeight:'600'}}>Pricing</Text>
           <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10}}></View>
           {priceDetails.map((item,index)=><Pricinglist key={index} material={item.subcategory_name} rate={item.product_amount}/>)}
           {/* <Pricinglist material={'Countertops'} rate={'5'}/>
           <Pricinglist material={'Countertops'} rate={'5'}/> */}
           <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10,marginTop:20}}></View>
           <View>
               <View style={styles.div}>
                   <Text style={{flex:1,...styles.innerdiv}}>Subtotal</Text>
                   <Text style={{flex:2,...styles.innerdiv}}>{priceDetails[0].Subtotal}$</Text>
               </View>
               <View style={styles.div}>
                   <Text style={{flex:1,...styles.innerdiv}}>Taxable amount</Text>
                   <Text style={{flex:2,...styles.innerdiv}}>{priceDetails[0].taxable_amount}$</Text>
               </View>
           </View>
             <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10}}></View>
           <View style={{...styles.div,marginBottom:10}}>
               <Text style={{flex:1.4,...styles.innerdiv}}>Total</Text>
               <Text style={{flex:2,...styles.innerdiv}}>{priceDetails[0].total}$</Text>
           </View>

       </View> 
    )
}
const PricingToBeReviwed=()=>{
    return(
       <View style={{borderColor:'gray',borderWidth:1,width:'90%',alignSelf:'center',marginVertical:20,borderRadius:5}}>
           <Text style={{textAlign:'center',fontSize:20,fontWeight:'600'}}>Pricing</Text>
           <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10}}></View>
          <Text style={{alignSelf:'center'}}>To Be Reviewd </Text>
           <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10,marginTop:20}}></View>
           <View>
               <View style={styles.div}>
                   <Text style={{flex:1,...styles.innerdiv}}>Subtotal</Text>
                   <Text style={{flex:2,...styles.innerdiv}}>-</Text>
               </View>
               <View style={{...styles.div}}>
                   <Text style={{flex:1,...styles.innerdiv}}>Taxable amount</Text>
                   <Text style={{flex:2,...styles.innerdiv}}>-</Text>
               </View>
           </View>
             <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10}}></View>
           <View style={{...styles.div,marginBottom:10}}>
               <Text style={{flex:1.4,...styles.innerdiv}}>Total</Text>
               <Text style={{flex:2,...styles.innerdiv}}>-</Text>
           </View>

       </View> 
    )
}
const OrderDetails=({navigation,route})=>{
   const [productList,setProductList]=useState([]);
   const [secondInvoice,setSecondInvoice]=useState(false);
   const [productsPrice,setProductsPrice]=useState([]);
   const [loading,setIsLoading]=useState(true);
   const [isCancelled,setIsCancelled]=useState(false);
   const [isAccepted,setIsAccepted]=useState(false);
    
    const acceptingTheOrder=async()=>{
        try{
            if(productList[0].admin_order_status=="approve"){
                let res = await AsyncStorage.getItem("user_info");
                let arr = JSON.parse(res);
                console.log("ARRRRR ------",arr);
                const orderAcceptResult=await axios.post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/Order_accept',{
                                                req_id:route.params.request_id,
                                                invoice_id:productList[0].order_id
                                            },{
                                                headers:{
                                                    'token':arr.token,
                                                    'Content-Type':'multipart/form-data'
                                                }
                                        });
                                        console.log("Result: ",orderAcceptResult.data);
                if(orderAcceptResult.data.status=='200'){
                    console.log("Result: ",orderAcceptResult.data);
                    setIsAccepted(true);
                    navigation.navigate('Our Services');
                }else{
                    console.log("Error in accepting the order.");
                }
            }else{
                console.log("Admin yet to review it, ADMIN_ORDER_STATUS: ",productList[0].admin_order_status)
            }
            
        }catch(err){
            console.log("Error: ",err);
        }

     
    }
    const onCancelBooking=async()=>{
        console.log("Ids",route.params.request_id,productList[0].order_id);
        let res = await AsyncStorage.getItem("user_info");
        let arr = JSON.parse(res);
        console.log("ARRRRR ------",arr,arr.user_id);
        const cancelled=await axios.post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/Order_rejected',{
            req_id:route.params.request_id,
            invoice_id:productList[0].order_id
        },{
            headers:{
                'token':arr.token,
                'Content-Type':'multipart/form-data',

            }
        });
        console.log("cancelled: ",cancelled.data);
        if(cancelled.data.status==200){
            console.log("cancelled: ",cancelled.data);
            // setIsCancelled(true);
            setIsAccepted(true);
            navigation.navigate('Our Services');

        }
        
    }
    const getOrderDetails=async(request_id)=>{
       
        try{
            console.log(request_id);
            let res = await AsyncStorage.getItem("user_info");
            let arr = JSON.parse(res);
            console.log("ARRRRR ------",arr,arr.user_id);
            const viewOrder=await axios.post('https://reddoordevelopment.com/index.php/api/Users/view_order',{
                request_id:request_id
            }
            ,{
                headers:{
                    'token':arr.token,
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log("View Order: ",viewOrder.data,);
            console.log("AMOUNT",viewOrder.data.data.fast_rsponse_amount);
            console.log("INVOICE",viewOrder.data.data.fastinvoice);
            console.log("SECOND",viewOrder.data.data.secondinvoice);
            console.log("SECOND AMOUNT",viewOrder.data.data.second_rsponse_amount);
            if(viewOrder.data.status==200){
                console.log('hi');
                if(viewOrder.data.data.secondinvoice.length>0){
                    setProductList([...viewOrder.data.data.secondinvoice]);
                    setSecondInvoice(true);
                    if(viewOrder.data.data.second_rsponse_amount.length>0){
                        setProductsPrice([...viewOrder.data.data.second_rsponse_amount])
                    }
                }else{
                    setProductList([...viewOrder.data.data.fastinvoice]);
                    if(viewOrder.data.data.fast_rsponse_amount.length>0){
                        setProductsPrice([...viewOrder.data.data.fast_rsponse_amount])
                    }
                }
                
                setIsLoading(false);
            }
        }catch(err){
            console.log('Error: ',err)
        }
    }

    useEffect(()=>{
        console.log("Request_id: ",route.params.request_id);
        getOrderDetails(route.params.request_id);
    },[])
    return(
 
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:25,Bottom:15}}>
        <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'10%',top:'40%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:60,paddingLeft:25}}>
                My Orders
            </Text>
           {loading==false?(<>
           
            <Text style={{paddingLeft:25,color:'black'}}>Order ID : {route.params.request_id}</Text>
            <Text style={{paddingLeft:25}}><Text style={{color:'black'}}>Booking Time :</Text>{route.params.bookingTime}</Text>
            <Text style={{alignSelf:'center',marginTop:10}}>{route.params.bookingDate}</Text>
            {productList.length>0?(
            productList.map(product=>(<Item key={product.img_path} src={product.img_path} material={product.subcategory_name}/>))
            ):null}
            {productsPrice.length==0?<PricingToBeReviwed/>:<PricingApproved priceDetails={productsPrice}/>}
            <View style={{flexDirection:'row',marginVertical:30,paddingHorizontal:10,paddingBottom:35}}>
                <View style={{flex:1}}>{productsPrice.length>0 && secondInvoice!=true?
                (<Button title="Edit" onPress={()=>{navigation.navigate('EditOrders',{products:productList})}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/>)
                :<Button title="Cancel" disabled={isAccepted} onPress={()=>{onCancelBooking()}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/>
                    }</View>
                <View style={{flex:1}}><Button title="Accept" disabled={isAccepted} onPress={()=>{acceptingTheOrder()}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

            </View>
            {/* disabled={isCancelled} */}
           </>):null} 
        </ScrollView>
   
    )
}

export default OrderDetails;
const styles= StyleSheet.create({
    div:{alignItems:'center',
        height:54,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:30
    },
    innerdiv:{
        textAlign:'right',
        color:'black'
  
    }
})