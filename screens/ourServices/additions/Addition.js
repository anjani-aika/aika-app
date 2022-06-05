import React,{useEffect,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Addition=({navigation})=>{
    const [loading,setIsLoading] = useState(false);
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
                  console.log("USER DAYA --",mainCategData[0].category_name);
                  
                }
               
              })
              .catch((error) => {
              
                console.log(error);
               
              });
        }
      }
      function mainCategoryListMap(){
          console.log("mainCategData -----MAP",mainCategData)
     
          return mainCategData.map((data, index) => {
               console.log("DATA --------",data)
                return (
                   
                    <View>
                         <TouchableOpacity onPress={()=>{data.category_name == "Addition" ? navigation.navigate('Addition2') : navigation.navigate(data.category_name)}}><PageButton buttonName={data.category_name}/></TouchableOpacity>
                    </View>
                )
            })
        
      }
    return(
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60}}>
   <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'70%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               Addition
            </Text>
         
            {mainCategData && mainCategData.length > 0 ? mainCategoryListMap() : null}
           
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
export default Addition;