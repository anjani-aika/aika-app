import React,{useEffect,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const Remodel=({props,navigation})=>{
    const [loading,setIsLoading] = useState(true);
    const [mainCategData,setMainCategData] = useState([]);

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
              .get('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/user_category',{headers:headers})
              .then((responseData) => {
                console.log('POST Response: ' + JSON.stringify(responseData.data.data));
                if(responseData.data.status === 200){
                  setIsLoading(false)
                       
                  let categArr =  responseData.data.data;
                  console.log("CATEGORY DATA -----",categArr)
                  setMainCategData(categArr);
                  //console.log("USER DAYA --",mainCategData[0].category_name);
                  
                }
               
              })
              .catch((error) => {
                if(error.response.data!=undefined){
                  console.log(error.response.data);
                }else{
                  console.log(error);
                }
                
               
              });
        }
      }
      function mainCategoryListMap(){
          console.log("mainCategData -----MAP",mainCategData)
     
          return mainCategData.map((data, index) => {
               console.log("DATA --------",data)
                return (
                   
                    <View key={index}>
                         <TouchableOpacity onPress={()=>{ navigation.navigate('Kitchen',{categ_id:data.cate_id,categ_name:data.category_name})}}><PageButton buttonName={data.category_name}/></TouchableOpacity>
                    </View>
                )
            })
        
      }

    return(
    <ScrollView style={{backgroundColor:'white',paddingTop:60,flex:1}}>
     <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:100,top:'20%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               Remodel
            </Text>
            <View style={{paddingBottom:35}}>
            {mainCategData && mainCategData.length > 0 ? mainCategoryListMap() : null}
            </View>
            {/* <TouchableOpacity onPress={()=>{navigation.navigate('Kitchen')}}><PageButton buttonName={'Kitchen'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Bathroom')}}><PageButton buttonName={'Bathroom'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Flooring')}}><PageButton buttonName={'Flooring'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Painting')}}><PageButton buttonName={'Painting'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Plumbing')}}><PageButton buttonName={'Plumbing'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Electrical')}}><PageButton buttonName={'Electrical'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Window')}}><PageButton buttonName={'Window'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Doors')}}><PageButton buttonName={'Doors'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Roofings')}}><PageButton buttonName={'Roofings'}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Addition2')}}><PageButton buttonName={'Additions'}/></TouchableOpacity> */}
        </ScrollView>
    )
}
export default Remodel;