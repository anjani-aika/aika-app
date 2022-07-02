import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import { Button, Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkout from './CheckoutScreen';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleAddress=({setAddress,add1,add2,landmark,state,pincode,city})=>{
    const [value,setValue]=useState(false);
    
    return(
     
            <View style={{flexDirection:'row',marginVertical:20,width:340,height:87,alignSelf:'center',borderRadius:8,borderColor:(value==true?'#FFBB9E':'gray'),borderWidth:(value==true?2:1)}}>
            <View style={{width:'13%',justifyContent:'center',}}>
            <CheckBox
                center
                title=''
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={value}
                size={24}
                checkedColor='#F55633'
                containerStyle={{alignSelf:'center',justifyContent:'center',alignContent:'center'}}
                onIconPress={()=>{setAddress(add1,add2,landmark,state,pincode,city);setValue(!value)}}
                />
            </View>
            <View style={{width:'87%',padding:5,justifyContent:'center',}}>
                <Text style={{fontSize:16,fontWeight:'500',textTransform:'capitalize',color:'black'}}>{state}</Text>
                <Text style={{fontSize:14,fontWeight:'500',color:'black'}}>{state=='Home'?`${add1}`:(`${add1},${add2},${landmark},${city},${state},${pincode}`)}</Text>
            </View>
            </View>

        
    )
}
const CheckoutPage=({navigation,route})=>{
    const [oldAddresses,setOldAddresses]=useState([]);
    const [deliveryAdd,setDeliveryAdd]=useState(null);
    const getAddresses=async()=>{
        const addresses=await AsyncStorage.getItem('Addresses');
        //await AsyncStorage.removeItem('Addresses');
        if(addresses){
            const {Address}=JSON.parse(addresses);
            console.log("adrrss",Address);
            setOldAddresses([...Address]);
            console.log(oldAddresses)

        }
    }
    const setAddress=async(add1,add2,landmark,state,pincode,city)=>{
        setDeliveryAdd({
            location:{
                add1:add1,
                add2:add2,
                landmark:landmark,
                state:state,
                pincode:pincode,
                city:city
            }
        });
    }
    const goToBookingConfirm=async()=>{
        if(deliveryAdd){
            navigation.navigate('BookingConfirmed',{address:deliveryAdd})
        }
        
    }
    useEffect(()=>{
        getAddresses();
        const willFocusSubscription = navigation.addListener('focus', () => {
            getAddresses();
        });
      
  
      return willFocusSubscription;
    },[navigation])
    useEffect(()=>{console.log('Route: ',route.params)},[oldAddresses])
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               Choose Address
            </Text>
            {/* <SingleAddress add1={'add1'} add2={'add2'} pincode={'pincode'} landmark={'landmark'} state={'state'}/> */}
            {oldAddresses==null?null: oldAddresses.map((address,index)=>(<SingleAddress   setAddress={setAddress} key={index} add1={address.add1} add2={address.add2} pincode={address.pincode} landmark={address.landmark} city={address.city} state={address.state}/> ))}
            
     
            <View style={{marginBottom:20}}><Button title=" +  Add New Address" titleStyle={{color:'#F55633'}} onPress={()=>{navigation.navigate('AddAddress')}} buttonStyle={{backgroundColor:'white',width:190,height:41,alignSelf:'center',borderRadius:8,borderWidth:1,borderColor:'#F55633'}} c/></View>
            <View style={{marginBottom:25}}><Button title="Check out" onPress={()=>{goToBookingConfirm()}} buttonStyle={{backgroundColor:'#F55633',width:304,height:50,alignSelf:'center',borderRadius:8}}/></View>
          

        </ScrollView>
       
        </View>
    )
}
export default CheckoutPage;