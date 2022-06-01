import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import PageButton from '../../components/PageButton';

const NewConstruction=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               New Construction
            </Text>
            <PageButton buttonName={'New Construction'}/>
            <PageButton buttonName={'Remodel'}/>
            <PageButton buttonName={'Addition'}/>
        </View>
    )
}
export default NewConstruction;