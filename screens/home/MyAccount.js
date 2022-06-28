import React,{useEffect,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {Button, Input,Icon} from 'react-native-elements';
import Toast from 'react-native-toast-message';


const MyAccount=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const [isName,setIsName] = useState(false);
    const [isEmail,setIsEmail] = useState(false);
    const [isAddress,setIsAddress] = useState(false);
    const [userData,setUserData] = useState([]);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
      useEffect(() => {
        getUserInfo();
      },[]);
}
const updateHandle = async () => {
  let res = await AsyncStorage.getItem("user_info");
        let arr = JSON.parse(res);
        console.log("ARRRRR ------",arr);
  let data ={
    "fullname":name ? name : '',
    "email":email ? email : '',
    "mobile":mobile ? mobile : '',
    "address":address ? address :''
}
let headers={
  'token':arr.token
}
axios
  .post('https://reddoordevelopment.com/index.php/api/Users/update_profile',data,{headers:headers})
  .then((responseData) => {
    // let user_info={token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsbmFtZSI6InRlc3QxMiIsIm1vYmlsZSI6Ijk3MTIzMTIzMjIiLCJlbWFpbCI6InRlc3Q2NUBnbWFpbC5jb20iLCJhZGRyZXNzMSI6InZhZG9kYXJhIiwiY3JlYXRlZF9hdCI6IjIwMjItMDYtMTEiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE2NTQ4Nzc3Mjd9.JgQTheptD4lc1tw2VxYx_x2gd8WNwBsOs3Lz7DZxX-k',
    //  user_id:89};
    console.log('POST Response: ' + JSON.stringify(responseData.data));
    if(responseData.data.status === 200){
      console.log('POST Response: ' + JSON.stringify(responseData.data));
    }
    else{
     // setIsLoading(false)
    }
   
  })
  .catch((error) => {
  
    console.log(error);
   
  });
};

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
          
          <TouchableOpacity onPress={()=>{setIsName(!isName)}}>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </TouchableOpacity>
            </View>
            <ActivityIndicator style={{position:'absolute'}} size="large" color="#F55633" animating={true}/>
            {isName === true ?
            <TextInput 
            value={name}
            onChangeText={(text)=>{setName(text)}}
 style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}
            />
            :
            <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['full_name']}</Text>
}
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Email</Text>
            <TouchableOpacity onPress={()=>{setIsEmail(!isEmail)}}>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </TouchableOpacity>
            </View>
            {isEmail === true ?
            <TextInput 
            value={email}
            onChangeText={(text)=>{setEmail(text)}}
 style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}
            />
            :
            <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['email']}</Text>
}
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Address</Text>
            <TouchableOpacity onPress={()=>{setIsAddress(!isAddress)}}>
            <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            />
            </TouchableOpacity>
            </View>
            {isAddress === true ?
            <TextInput 
            value={address}
            onChangeText={(text)=>{setAddress(text)}}
 style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}
            />
            :
            <Text style={{paddingLeft:25,fontSize:16,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['address']}</Text>
}
            {/* <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins',marginTop:10}}>toit indiranagar ,100 feet road, binnamangala,
indiranagar , begaluru,karnataka, india , 256778</Text> */}
<View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
{isName === true || isEmail === true || isAddress === true ?
<Button title="Update" onPress={()=>{updateHandle()}} buttonStyle={{marginTop:10,justifyContent:'center',alignSelf:'center',width:100,height:50,backgroundColor:'#F55633',borderRadius:10}}/>
: null}
        </View>
    )
}
export default MyAccount;