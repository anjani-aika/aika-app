import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { Button, Icon, CheckBox } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CheckoutScreen=({navigation,route})=>{
    const [allItems,setAllItems]=useState([]);
    const getCheckedItems=async()=>{
        const toBeBookedItems=await AsyncStorage.getItem("checkedItems");
        if(toBeBookedItems!=null && toBeBookedItems!=undefined){
            const alreadyCheckedItems= JSON.parse(toBeBookedItems);
            setAllItems([...alreadyCheckedItems]);
        }else{
            console.log("No Items selected");
        }
       
    }
    async function removeItem(index){
        let arr2=[];
        for(let i=0;i<allItems.length;i++){
            if(i!=index){
                arr2.push(allItems[i]);
            }
        }
        console.log(arr2);
        setAllItems([...arr2]);
    }
    function checkedListMap(){
        console.log("checkedList -----MAP",allItems)
   
        return allItems.map((data, index) => {
             console.log("DATA --------",data)
              return (
                 
                      
                <View style={{flexDirection:'column',marginTop:30}} key={index}>
                <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image
                    source={{
                        uri: data.image_path,
                      }}
                    style={{marginRight:20,    width: 70,
                        height: 50,borderRadius:5
                    }}
                />
                <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Poppins',width:180}}>{data.subcategory_name}</Text>
                </View>

                <CheckBox
                    key={index}
                    title=''
                    onIconPress={()=>removeItem(index)}
                    checked={true}
                    checkedColor='#F55633'
                    uncheckedColor='gray'
                />
                </View>
               
                
            </View>
              )
          })
      
    }
    useEffect(()=>{
        console.log("Route: ",route.params.checkedItems);
        getCheckedItems();
    },[])
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               Checkout
            </Text>
           
            {/* <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Handles'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Checkout Facuet'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Kitchen sink'}/> */}
            {allItems && allItems.length>0?checkedListMap():null}

            <View style={{flexDirection:'row',marginVertical:30,paddingHorizontal:10}}>
            <View style={{flex:1}}><Button title="Add More +" onPress={()=>{navigation.navigate('Remodel')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>
            <View style={{flex:1}}><Button title="Check out" onPress={()=>{navigation.navigate('CheckoutPage',{checkedItems:allItems})}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

        </View>
        </ScrollView>
       
        </View>
    )
}
export default CheckoutScreen;