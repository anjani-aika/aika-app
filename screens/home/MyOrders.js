import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const OrderCard=()=>{
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
const MyOrders=({navigation})=>{
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                My Orders
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('OrderDetails')}}>
            <OrderCard/>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default MyOrders;