import React,{useEffect,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import Toast from 'react-native-toast-message';

const MyAccount=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const [userData,setUserData] = useState([]);

      useEffect(() => {
        getUserInfo();
      },[]);
      const getUserInfo = async () =>{

        let res = await AsyncStorage.getItem("user_info");
        let arr = JSON.parse(res);
        console.log("ARRRRR ------",arr);
        if(arr!= null || arr === [] || arr == ""){
            setIsLoading(true);
            let headers={
                'token':arr.token
            }
            axios
              .get('https://reddoordevelopment.com/index.php/api/Users/user_detail?user_id='+arr.user_id,{headers:headers})
              .then((responseData) => {
                console.log('POST Response: ' + JSON.stringify(responseData.data.data));
                if(responseData.data.status === 200){
                  setIsLoading(false)
                   
                    let userArr =  responseData.data.data[0];
                    setUserData(userArr);
                    console.log("USER DAYA --",userData['full_name']);
                }
               
              })
              .catch((error) => {
              
                console.log(error);
               
              });
        }
      }
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
             
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                My Account
            </Text>
            <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'10%',top:'10%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{paddingLeft:25,color:'#F55633',fontWeight:'bold',fontSize:24,fontFamily:'Poppins',marginTop:40}}>Hey {userData['full_name']} !</Text>
            <View style={{width:'100%',paddingLeft:-100 ,height:14,backgroundColor:'#E7E7E7',marginTop:30}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Name</Text>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </View>
            <ActivityIndicator style={{position:'absolute'}} size="large" color="#F55633" animating={true}/>
            <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['full_name']}</Text>
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Email</Text>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </View>
            <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['email']}</Text>
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Address</Text>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </View>
            <Text style={{paddingLeft:25,fontSize:16,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['address']}</Text>
            {/* <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins',marginTop:10}}>toit indiranagar ,100 feet road, binnamangala,
indiranagar , begaluru,karnataka, india , 256778</Text> */}
<View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
        </View>
    )
}

export default MyAccount;