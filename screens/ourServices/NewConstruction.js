import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
import PageButton from '../../components/PageButton';

const NewConstruction=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60}}>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               New Construction
            </Text>
           <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',marginVertical:20}}>
               <Text style={{fontSize:18,fontWeight:'500',width:173,textAlignVertical:'center'}}>Upload Building Plan</Text>
               <Button title="Browse File" buttonStyle={{width:123,height:40,backgroundColor:'#F55633'}}/>
           </View>
           <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',marginVertical:20}}>
               <Text style={{fontSize:18,fontWeight:'500',width:173,textAlignVertical:'center'}}>Finish With Builder Grade/Custom Finish</Text>
               <Button title="Browse File" buttonStyle={{width:123,height:40,backgroundColor:'#F55633'}}/>
           </View>
        </View>
    )
}
export default NewConstruction;