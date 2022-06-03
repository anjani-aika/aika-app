import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';

const Remodel=({navigation})=>{
    return(
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60}}>
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               Remodel
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Kitchen')}}><PageButton buttonName={'Kitchen'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Bathroom')}}><PageButton buttonName={'Bathroom'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Flooring')}}><PageButton buttonName={'Flooring'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Painting')}}><PageButton buttonName={'Painting'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Plumbing')}}><PageButton buttonName={'Plumbing'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Electrical')}}><PageButton buttonName={'Electrical'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Window')}}><PageButton buttonName={'Window'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Doors')}}><PageButton buttonName={'Doors'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Roofings')}}><PageButton buttonName={'Roofings'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Addition2')}}><PageButton buttonName={'Additions'}/></TouchableOpacity>
        </ScrollView>
    )
}
export default Remodel;