import React,{useEffect, useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';

import { Button, Icon } from 'react-native-elements';
import DocumentPicker, { types } from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
const NewConstruction=({navigation})=>{
  const[userInfo,setUserInfo]=useState([]);
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    getUserInfo()
},[])

const getUserInfo=async()=>{
  let res = await AsyncStorage.getItem("user_info");
            
  
  let arr = JSON.parse(res);
  console.log("ARRRRR ------11111",arr);
  setUserInfo(arr);
  console.log("USER INFO ------",userInfo)
}
    const handledocument=async()=>{
        try{
            // const res = await DocumentPicker.pick({
            //     type: [types.pdf],
            //     allowMultiSelection:false
            //     //There can me more options as well
            //     // DocumentPicker.types.allFiles
            //     // DocumentPicker.types.images
            //     // DocumentPicker.types.plainText
            //     // DocumentPicker.types.audio
            //     // DocumentPicker.types.pdf
            //   });
           

            const results = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.allFiles],
            });
            var formdata = new FormData();
            formdata.append("user_id", userInfo.user_id);

            // let image=[];
            results.forEach((res, index) => {
              let document = {
                uri: res.uri,
                type: res.type,
                name: res.name,
                size: res.size,
              };
              console.log("DOCUMENT ---IND",document)
              formdata.append("image["+index+"]", document);
            })
            // let tempArray = this.state.attachments;
            // let regexAll = /[^\\]*\.(\w+)$/;
            console.log("RES -----111111", formdata)
            
            // for (const res of results) {
              // let document = {
              //   uri: res.uri,
              //   type: res.type,
              //   name: res.name,
              //   size: res.size,
              // };
            //   console.log("RES ---------22222",document);
            
            // }
            // let document = {
            //   uri: res[0].uri,
            //   type: res[0].type,
            //   name: res[0].name,
            //   size: res[0].size,
            // };
          //   console.log("DOCUMENT ------",document)
          //   let headers={
          //     'token':userInfo.token,
              
          // }
         

          var myHeaders = new Headers();
          myHeaders.append("token", userInfo.token);




          var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
          };
          console.log("REQUEST PTION ------",requestOptions)
          setLoading(true)
          fetch("https://reddoordevelopment.com/index.php/api/Users/app_upload_multiple_image", requestOptions)
          .then(response => response.json())
          .then(result =>{
              console.log(result.message,"--------------",result['Order ID']);
              setLoading(false)
              Toast.show({
              type: 'success',
              text1:result.message ,
              
              });
              navigation.navigate('CheckoutNewConstruction',{order_id:result['Order ID']});
            

         
            
            })
          .catch(error => console.log('error', error));
                    
                }catch(err){
                    
                    if (DocumentPicker.isCancel(err)) {
                        //If user canceled the document selection
                        alert("Didn't select any file.");
                      } else {
                        //For Unknown Error
                        alert('Unknown Error: ' + JSON.stringify(err));
                        throw err;
                      }
                    console.log("Error: ",err);
                }
                
              }
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60}}>
             <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'100%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               New Construction
            </Text>
           <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',marginVertical:20}}>
               <Text style={{fontSize:18,fontWeight:'500',width:173,textAlignVertical:'center'}}>Upload Building Plan</Text>
               <Button title="Browse File" onPress={()=>handledocument()} buttonStyle={{width:123,height:40,backgroundColor:'#F55633'}}/>
           </View>
           <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',marginVertical:20}}>
               <Text style={{fontSize:18,fontWeight:'500',width:173,textAlignVertical:'center'}}>Finish With Builder Grade/Custom Finish</Text>
               <Button title="Browse File" onPress={()=>handledocument()} buttonStyle={{width:123,height:40,backgroundColor:'#F55633'}}/>
           </View>
           <Toast position='bottom' ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}
export default NewConstruction;