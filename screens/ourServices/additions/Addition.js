import React,{useEffect,useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ActivityIndicator,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const Addition=({navigation})=>{
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
              .get('https://reddoordevelopment.com/index.php/api/Users/user_category',{headers:headers})
              .then((responseData) => {
                console.log('POST Response: ' + JSON.stringify(responseData.data.data));
                if(responseData.data.status === 200){
                  setIsLoading(false)
                       
                  let categArr =  responseData.data.data;
                  console.log("CATEGORY DATA -----",categArr)
                  setMainCategData([...categArr]);
                  //console.log("USER DAYA --",mainCategData[0].category_name);
                  
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
               //console.log("DATA --------",data)
                return (
                   
                    <View key={index}>
                         <TouchableOpacity onPress={()=>{ navigation.navigate('Kitchen',{categ_id:data.cate_id,categ_name:data.category_name})}}><PageButton key={index} buttonName={data.category_name}/></TouchableOpacity>
                    </View>
                )
            })
        
      }
    return(
        <ScrollView style={{backgroundColor:'white',paddingTop:60,flex:1}}>
   <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'70%',position:'absolute',top:'50%'}} size="large" color="#F55633" animating={loading}/>
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               Addition
            </Text>
          <View style={{paddingBottom:30}}>
            {mainCategData && mainCategData.length > 0 ? mainCategoryListMap() : null}
            </View>
         
 </ScrollView>
       
    )
}
export default Addition;