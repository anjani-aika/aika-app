import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const Help=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:25}}>
         <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                Help
        </Text>
        <Text style={{paddingLeft:25,color:'#F55633',fontWeight:'bold',fontSize:18,fontFamily:'Poppins',marginTop:40}}>We're here to help</Text>
        <TouchableOpacity>
        <View style={{flexDirection:'row',borderWidth:1,width:121,height:36,justifyContent:'space-evenly',borderRadius:22,alignItems:'center',marginLeft:25,marginTop:30,borderColor:'#F55633'}}>
            <Image 
                style={{width:20}}
                source={require('../../static/phone.png')}
            />
            <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>Phone</Text>
        </View>
        </TouchableOpacity>
        <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins',marginTop:30,width:278,height:42}}>
        Call 022 4893 0234 to speak to a support representative now
        </Text>
        <View style={{width:'100%',paddingLeft:-50 ,height:11,backgroundColor:'#E7E7E7',marginTop:5}}></View>
        <TouchableOpacity>
        <View style={{flexDirection:'row',borderWidth:1,width:121,height:36,justifyContent:'space-evenly',borderRadius:22,alignItems:'center',marginLeft:25,marginTop:20,borderColor:'#F55633'}}>
            <Image 
                style={{width:20}}
                source={require('../../static/mail.png')}
            />
            <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>Email</Text>
        </View>
        </TouchableOpacity>
        <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins',marginTop:20,width:278,height:21}}>
        Send us an email to support@Phurti.in
        </Text>
        <View style={{width:'100%',paddingLeft:-50 ,height:11,backgroundColor:'#E7E7E7',marginTop:20}}></View>
        </View>
    )
}

export default Help;