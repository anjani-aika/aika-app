import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const PageButton=({buttonName})=>{
    return(
        <View style={{alignSelf:'center',width:'80%',marginBottom:30}}>
        <View style={styles.pagebuttonStyle}>
        <Text style={{fontSize:18,fontWeight:'600',color:'white'}}>{buttonName}</Text>
          <Icon 
             name="arrow-forward-ios"
             color={'white'}
             />
        </View>
         
        </View>
    )
}

export default PageButton;
const styles=StyleSheet.create({
    pagebuttonStyle:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#F55633',
        width:'100%',
        height:68,
        justifyContent:'space-between',
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#F55633'
    }
  
})