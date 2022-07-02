import React, { useEffect } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import PageButton from '../../components/PageButton';

const OurServices=({navigation})=>{
    useEffect(()=>{
        const willFocusSubscription = navigation.addListener('focus', () => {
            console.log("Our services")
        });
      
  
      return willFocusSubscription;
    },[navigation])
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Regular',fontWeight:'700',fontSize:18,paddingLeft:"10%",color:'black',paddingTop:25,marginBottom:15}}>
                Our Services
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('NewConstruction')}}><PageButton buttonName={'New Construction'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Remodel')}}><PageButton buttonName={'Remodel'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Addition')}}><PageButton buttonName={'Addition'}/></TouchableOpacity>
        </View>
    )
}
export default OurServices;