import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';

const Electrical=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
              Electrical
            </Text>
            <PageButton buttonName={'New Construction'}/>
            <PageButton buttonName={'Remodel'}/>
            <PageButton buttonName={'Addition'}/>
        </View>
    )
}
export default Electrical;