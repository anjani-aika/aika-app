import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Item=({src,material,index,removeItem})=>{
    return(
        <View style={{flexDirection:'row',paddingHorizontal:25,marginTop:30}}>
            <View style={{flex:1}}>
            <Image 
                source={src} 
                style={{marginRight:20,    width: 70,
                    height: 50,borderRadius:5
                }}
            />
            </View>
            <View style={{flex:2,justifyContent:'center'}}>
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:'500',color:'black'}}>{material}</Text>
            </View>
            <View style={{flex:1.3,justifyContent:'center'}}>
            <Button  buttonStyle={{backgroundColor:'#F55633',width:102,height:40}} onPress={()=>removeItem(index)} title="Remove"></Button>
            </View>
        </View>
    )
}


const EditOrders=({navigation,route})=>{
    const [prevProducts,setPrevProducts]=useState([...route.params.products]);
    const [isDisabled,setIsdisabled]=useState(false);
    const [isCancelled,setIsCancelled]=useState(false);
    const [isAccepted,setIsAccepted]=useState(false);
    const updateOrder=async()=>{
        try{  

            setIsdisabled(true);
            let res = await AsyncStorage.getItem("user_info");
            let arr = JSON.parse(res);
            console.log("ARRRRR ------",arr);
            
            for(let i=0;i<prevProducts.length;i++){
                console.log("Prev product ",prevProducts[i]);
                // const userEdit=await axios.post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/user_edit_product',{
                //     product_id:prevProducts[i].order_id,
                //     user_id:prevProducts[i].user_id,
                //     reqid:prevProducts[i].request_id,
                //     order_id:prevProducts[i].order_id,
                // },{
                //     headers:{
                //         'token':arr.token,

                //     }
                // });
                
                // console.log("User Edit: ",userEdit.data);
                const confirmBookEdit=await axios.post('https://reddoordevelopment.com/index.php/api/Users/conformEditBooking',{

                        catID:prevProducts[i].cate_id,
                        subcategory_id:prevProducts[i].subcategory_id,
                        cat_name:prevProducts[i].subcategory_name,
                        change_order_id:`${prevProducts[i].order_id}_${prevProducts[i].request_id}`,
                        desc:prevProducts[i].descriptions,
                        reqid:prevProducts[i].request_id

                },{
                    headers:{
                        'token':arr.token,
                        'Content-Type':'multipart/form-data',
                    }
                });
                console.log(confirmBookEdit.data)
                if(confirmBookEdit.data.status==200){
                    console.log("Done!!!!!",confirmBookEdit.data);
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Our Services'}],
                      });
                }
            }

          
           
            
        }catch(err){
            console.log("Error: ",err.response.data)
        }
    }
    const removeItem=async(index)=>{
        let newArray=[];
        for(let i=0;i<prevProducts.length;i++){
            if(i!=index){
                newArray.push(prevProducts[i]);
            }
        }
        setPrevProducts([...newArray]);

    }
    useEffect(()=>{
        console.log("PREV Orders: ",route.params.products)
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
        <View style={{flex:9,marginBottom:20}}>
        <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
            Edit Orders
        </Text>
        {prevProducts.length>0?prevProducts.map((product,index)=><Item key={product.img_path} src={{uri:product.img_path}} removeItem={removeItem} material={product.subcategory_name} index={index}/>):null}
        {/* <AllItems/> */}
        </View>
        <View style={{flex:1,marginBottom:20,marginTop:20}}><Button onPress={()=>{updateOrder()}} disabled={isDisabled} buttonStyle={{width:304,height:54,alignSelf:'center',backgroundColor:'#F55633'}} title="Update"/></View>
        </ScrollView>
    )
}

export default EditOrders;