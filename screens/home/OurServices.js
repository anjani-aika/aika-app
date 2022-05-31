import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const OurServices=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,padding:25}}>

            <Text>Our Services</Text>
        </View>
    )
}

export default OurServices;