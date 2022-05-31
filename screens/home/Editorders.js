import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const EditOrders=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
        <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
            Edit Orders
        </Text>
        </View>
    )
}

export default EditOrders;