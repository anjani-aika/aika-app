import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
const Item=({src,material})=>{
    return(
        <View style={{flexDirection:'row',paddingHorizontal:25,marginTop:30}}>
            <View style={{flex:1}}>
            <Image 
                source={src} 
               style={{marginRight:20}}
            />
            </View>
            <View style={{flex:2,justifyContent:'center'}}>
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:'500',color:'black'}}>{material}</Text>
            </View>
            <View style={{flex:1.3,justifyContent:'center'}}>
            <Button  buttonStyle={{backgroundColor:'#F55633',width:102,height:40}} title="Remove"></Button>
            </View>
        </View>
    )
}

const AllItems=({})=>{
    return(
        <>
        <Item src={require('../../static/orders/Countertops.png')} material={'Countertops'}/>
        <Item src={require('../../static/orders/Wall.png')} material={'Tile for wall'}/>
        <Item src={require('../../static/orders/Nich.png')} material={'Tile for nich'}/>
        </>
    )
}
const EditOrders=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
        <View style={{flex:9}}>
        <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
            Edit Orders
        </Text>
        <AllItems/>
        </View>
        <View style={{flex:1,marginBottom:20}}><Button onPress={()=>{navigation.navigate('OrderDetails')}} buttonStyle={{width:304,height:54,alignSelf:'center',backgroundColor:'#F55633'}} title="Update"/></View>
        </View>
    )
}

export default EditOrders;