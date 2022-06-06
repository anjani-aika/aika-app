import React,{useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { Button, Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';

const SingleItem=({src,material})=>{
    const [value,setValue]=useState(false);
    return(
        <View style={{flexDirection:'column',marginTop:30}}>
            <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image
                source={src}
                style={{marginRight:20}}
            />
            <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Poppins-Light'}}>{material}</Text>
            </View>
            
            <CheckBox
                value={value}
                onValueChange={()=>{setValue(!value)}}
                 style={{justifyContent:'flex-end'}}
            />
            </View>
            {value===true?<View style={{marginHorizontal:25,marginTop:20}}>
                <TextInput
                    style={{width:'100%',height:62,borderWidth:1,borderRadius:4,borderColor:'gray', color: 'black'}}
                    multiline={true}
                    editable={true}
                    placeholderTextColor = "gray"
                    placeholder=" Enter Description"
                ></TextInput>
            </View>:null}
            
        </View>
    )
}
const CheckoutPage=({navigation})=>{
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               Checkout
            </Text>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Countertops'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Handles'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Checkout Facuet'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Kitchen sink'}/>

            <View style={{flexDirection:'row',marginVertical:30,paddingHorizontal:10}}>
            <View style={{flex:1}}><Button title="Add More +" onPress={()=>{navigation.navigate('Kitchen')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>
            <View style={{flex:1}}><Button title="Check out" onPress={()=>{navigation.navigate('CheckoutPage')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

        </View>
        </ScrollView>
       
        </View>
    )
}
export default CheckoutPage;