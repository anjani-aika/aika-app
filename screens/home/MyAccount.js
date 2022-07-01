import React,{useEffect,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

const MyAccount=({navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const [userData,setUserData] = useState({});
    const [editN,setN]=useState(false);
    const [editE,setE]=useState(false);
    const [editA,setA]=useState(false);

      useEffect(() => {
        getUserInfo();
      },[]);
      const updateAccount=async()=>{
        try{
          let res = await AsyncStorage.getItem("user_info");
          let arr = JSON.parse(res);
          console.log("ARRRRR ------",arr);
          const updated=await axios.post('https://reddoordevelopment.com/index.php/api/Users/update_profile',{
            fullname:userData.full_name,
            email:userData.email,
            mobile:userData.mobile,
            address:userData.address
          },{
            headers:{
              'token':arr.token,
              'Content-Type':'multipart/form-data',
            }
          });
          console.log("Data: ",updated.data);
          if(updated.data.status==200){
            setA(false);setE(false);setN(false);
          }
        }catch(e){
          console.log("error in updating acccount",e);
        }
      }
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
                    setUserData({...userArr});
                    console.log("USER DAYA --",userData['full_name'],userArr);
                }
               
              })
              .catch((error) => {
              
                console.log(error);
               
              });
        }
      }
    return(
      <KeyboardAwareScrollView contentContainerStyle={{height:730}}>


        <View style={{backgroundColor:'white',flex:1,paddingTop:60,paddingTop:25}}>
             
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,color:'black',paddingTop:25,paddingLeft:25}}>
                My Account
            </Text>
            <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'10%',top:'10%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{paddingLeft:25,color:'#F55633',fontWeight:'bold',fontSize:24,fontFamily:'Poppins',marginTop:40}}>Hey {userData['full_name']} !</Text>
            <View style={{width:'100%',paddingLeft:-100 ,height:14,backgroundColor:'#E7E7E7',marginTop:30}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
             
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Name</Text>
            {editN==false?(
            <TouchableOpacity onPress={()=>setN(true)}>
              <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
              />
            </TouchableOpacity>
            ):null}
           
            </View>
            <ActivityIndicator style={{position:'absolute'}} size="large" color="#F55633" animating={true}/>
            {editN==false?(
                  <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['full_name']}</Text>
                ):(
                  <TextInput
                  style={{width:'60%',borderBottomColor:'gray',borderBottomWidth:1,fontSize:13,  color: 'black',marginLeft:25,textAlign:'left'}}
                  editable={true}
                  placeholderTextColor = "gray"
                  onChangeText={(text)=>{setUserData({...userData,full_name:text})}}
                  value={userData.full_name}
                  ></TextInput> 
                )}
          
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Email</Text>
            {editE==false?(
            <TouchableOpacity onPress={()=>setE(true)}>
              <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
              />
             </TouchableOpacity>
             ):null}
            </View>
            {editE==false?(
                  <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['email']}</Text>
                ):(
                  <TextInput
                  style={{width:'60%',borderBottomColor:'gray',borderBottomWidth:1,fontSize:13,  color: 'black',marginLeft:25,textAlign:'left'}}
                  editable={true}
                  placeholderTextColor = "gray"
                  onChangeText={(text)=>{setUserData({...userData,email:text})}}
                  value={userData.email}
                  ></TextInput> 
                )}
           
            <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:25}}>
            <Text style={{paddingLeft:25,fontSize:13,color:'#F55633',fontFamily:'Poppins-Light',marginTop:10,fontWeight:'500'}}>Address</Text>
            {editA==false?(
            <TouchableOpacity onPress={()=>setA(true)}>
             <Image 
                style={{height:13,width:13,resizeMode:'stretch',marginTop:10}} 
                source={require('../../static/edit.png')}
            /></TouchableOpacity>
            ):null}
            </View>
            {editA==false?(
                 <Text style={{paddingLeft:25,fontSize:13,color:'#000000',fontFamily:'Poppins',marginTop:10,fontWeight:'500'}}>{userData['address']}</Text>
                ):(
                  <TextInput
                  style={{width:'60%',borderBottomColor:'gray',borderBottomWidth:1,fontSize:13,  color: 'black',marginLeft:25,textAlign:'left'}}
                  editable={true}
                  placeholderTextColor = "gray"
                  onChangeText={(text)=>{setUserData({...userData,address:text})}}
                  value={userData.address}
                  ></TextInput> 
                )}
            {/* <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins',marginTop:10}}>toit indiranagar ,100 feet road, binnamangala,
indiranagar , begaluru,karnataka, india , 256778</Text> */}
      <View style={{width:'100%',paddingLeft:-50 ,height:6,backgroundColor:'#E7E7E7',marginTop:20}}></View>
      {editA==true || editE==true ||editN==true?(
                <>
                <View style={{marginTop:20, alignSelf:'center',width:'100%'}}>
                    <Button title="Update" onPress={()=>updateAccount()} buttonStyle={{width:'70%',borderRadius:15,height:46,alignSelf:'center',backgroundColor:'#F55633'}}/>
                </View>
               
                </>
            ):null}
      </View>
      </KeyboardAwareScrollView>
    )
}

export default MyAccount;