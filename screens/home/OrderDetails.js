import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
const Item=({src,material})=>{
    return(
        <View style={{flexDirection:'row',paddingLeft:25,marginTop:30}}>
            <Image 
                source={src} 
               style={{marginRight:20}}
            />
            <Text style={{textAlignVertical:'center',fontSize:18,fontWeight:'500',color:'black'}}>{material}</Text>
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
const Pricinglist=({material,rate})=>{
    return(
        <View style={{...styles.div,marginTop:15}}>
            <Text style={{flex:1.4,...styles.innerdiv,fontSize:18,textAlign:'left'}}>Countertops</Text>
            <View style={{flex:2}}>
                <Text style={{textAlign:'right',borderColor:'gray',justifyContent:'center',alignItems:'center',borderWidth:1,width:134,height:32,textAlign:'center', alignSelf:'flex-end',textAlignVertical:'center',borderRadius:10}}>{rate}$/Sqft</Text>
            </View>
        </View>
    )
}
const Pricing=()=>{
    return(
       <View style={{borderColor:'gray',borderWidth:1,width:'90%',alignSelf:'center',marginVertical:20,borderRadius:5}}>
           <Text style={{textAlign:'center',fontSize:20,fontWeight:'600'}}>Pricing</Text>
           <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10}}></View>
           <Pricinglist material={'Countertops'} rate={'5'}/>
           <Pricinglist material={'Countertops'} rate={'5'}/>
           <Pricinglist material={'Countertops'} rate={'5'}/>
           <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10,marginTop:20}}></View>
           <View>
               <View style={styles.div}>
                   <Text style={{flex:1,...styles.innerdiv}}>Subtotal</Text>
                   <Text style={{flex:2,...styles.innerdiv}}>15.00$</Text>
               </View>
               <View style={styles.div}>
                   <Text style={{flex:1,...styles.innerdiv}}>Taxable amount</Text>
                   <Text style={{flex:2,...styles.innerdiv}}>3.00$</Text>
               </View>
           </View>
             <View style={{borderBottomColor:'gray',borderWidth:1,width:310,alignSelf:'center',marginVertical:10}}></View>
           <View style={{...styles.div,marginBottom:10}}>
               <Text style={{flex:1.4,...styles.innerdiv}}>Total</Text>
               <Text style={{flex:2,...styles.innerdiv}}>18.00$</Text>
           </View>

       </View> 
    )
}
const OrderDetails=({navigation})=>{
    return(
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,paddingTop:25}}>
        <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
            My Orders
        </Text>
        <Text style={{paddingLeft:25,color:'black'}}>Order ID : GISo7OmXnp59</Text>
        <Text style={{paddingLeft:25}}><Text style={{color:'black'}}>Booking Time :</Text> 19:07</Text>
        <Text style={{alignSelf:'center',marginTop:10}}>April 15 2022</Text>
        <AllItems/>
        <Pricing/>
        <View style={{flexDirection:'row',marginVertical:30,paddingHorizontal:10}}>
            <View style={{flex:1}}><Button title="Edit" onPress={()=>{navigation.navigate('EditOrders')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>
            <View style={{flex:1}}><Button title="Accept" onPress={()=>{navigation.navigate('MyOrdersScreen')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

        </View>
        </ScrollView>
    )
}

export default OrderDetails;
const styles= StyleSheet.create({
    div:{alignItems:'center',
        height:30,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:30
    },
    innerdiv:{
        textAlign:'right',
  
    }
})