import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
const Items=({src,material})=>{
    return(
        <View style={{flexDirection:'row'}}>
            <Image 
                source={src} 
                style={{}}
            />
            <Text>{material}</Text>
        </View>
    )
}
const Pricing=()=>{
    return(
       <View>
           <Text>Price</Text>
       </View> 
    )
}
const EditOrders=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
        <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
            My Orders
        </Text>
        <Text>Order ID : GISo7OmXnp59</Text>
        <Text><Text>Booking Time :</Text> 19:07</Text>
        <Text>April 15 2022</Text>
        <Items src={require('../../static/orders/Countertops.png')} material={'Countertops'}/>
        <Items src={require('../../static/orders/Wall.png')} material={'Tile for wall'}/>
        <Items src={require('../../static/orders/Nich.png')} material={'Tile for nich'}/>
        <Pricing/>
        <View>
            <Button title="Edit" buttonStyle={{backgroundColor:'#F55633'}}/>
            <Button title="Accept" buttonStyle={{backgroundColor:'#F55633'}}/>

        </View>
        </View>
    )
}

export default EditOrders;