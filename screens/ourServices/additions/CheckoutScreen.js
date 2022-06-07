import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { Button, Icon, CheckBox } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';

const SingleItem=({src,material})=>{
    useEffect(()=>{console.log(src)},[])
    return(
        <View style={{flexDirection:'column',marginTop:30}}>
            <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image
                source={{uri:' https://pushpdiamonds.com/Door_Devp/upload/1652530497.png'}}
                style={{marginRight:20}}
            />
            <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Poppins-Light',width:180}}>{material}</Text>
            </View>
            <CheckBox
                title=''
                checked={true}
                checkedColor='#F55633'
                uncheckedColor='gray'
            />
            {/* <CheckBox
                value={true}
                // onValueChange={()=>{setValue(!value)}}
                boxType='circle'
                tintColors={{ true: '#F55633', false: 'gray' }}
                style={{justifyContent:'flex-end'}}
            /> */}
            </View>
            {/* {value===true?<View style={{marginHorizontal:25,marginTop:20}}>
                <TextInput
                    style={{width:'100%',height:62,borderWidth:1,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Enter Description"
                ></TextInput>
            </View>:null} */}
            
        </View>
    )
}
const CheckoutScreen=({navigation,route})=>{
    const [allItems,setAllItems]=useState([]);
    const getCheckedItems=async()=>{
        setAllItems([...route.params.checkedItems]);
    }
    function checkedListMap(){
        console.log("checkedList -----MAP",allItems)
   
        return allItems.map((data, index) => {
             console.log("DATA --------",data)
              return (
                 
                      
                <View style={{flexDirection:'column',marginTop:30}}>
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
            <View style={{flex:1}}><Button title="Add More +" onPress={()=>{navigation.navigate('Kitchen')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>
            <View style={{flex:1}}><Button title="Check out" onPress={()=>{navigation.navigate('CheckoutPage',{checkedItems:route.params.checkedItems})}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

        </View>
        </ScrollView>
       
        </View>
    )
}
export default CheckoutScreen;