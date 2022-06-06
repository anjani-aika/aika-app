import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const MyAccount=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                My Account
            </Text>
            <Text style={{paddingLeft:25,color:'#F55633',fontWeight:'bold',fontSize:24,fontFamily:'Poppins-Light',marginTop:40}}>Hey Kaif !</Text>
            <View style={{width:'100%',paddingLeft:-100 ,height:14,backgroundColor:'#E7E7E7',marginTop:30}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Name</Text>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </View>
           
            <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>KAiful Haque</Text>
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Email</Text>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </View>
            <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Kaifulhaque07@gmail.com</Text>
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Address</Text>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </View>
            <Text style={{paddingLeft:25,fontSize:16,color:'#000000',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Bangalore</Text>
            <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins-Light',marginTop:10}}>toit indiranagar ,100 feet road, binnamangala,
indiranagar , begaluru,karnataka, india , 256778</Text>
<View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
        </View>
    )
}

export default MyAccount;