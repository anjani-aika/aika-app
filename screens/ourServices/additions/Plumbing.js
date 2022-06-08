import React,{useState,useEffect} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';

// import CheckBox from '@react-native-community/checkbox';
import { Button, Icon, CheckBox } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputComponent from '../remodel/TextInputComponent';
import axios from "axios";


const Plumbing=({navigation,route})=>{
    const [subCategData,setSubCategData] = useState([]);
    const [categName,setCategName] =useState('');
    const [count,setCount]= useState(1);
    useEffect(() => {
        console.log("PROPS ROUTE -----",route.params.categ_id);
        getSubCategoryList();
      },[]);
      const getSubCategoryList = async () =>{
        let res = await AsyncStorage.getItem("user_info");
        let arr = JSON.parse(res);
        console.log("ARRRRR ------",arr);
        if(arr!= null || arr === [] || arr == ""){
          
            let headers={
                'token':arr.token
            }
            axios
              .get('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/subcategory_detail?cate_id='+route.params.categ_id,{headers:headers})
              .then((responseData) => {
                console.log('POST Response: ' + JSON.stringify(responseData.data.data));
                if(responseData.data.status === 200){
                  
                
               
                let arr = responseData.data.data;
               for(let i =0;i<arr.length;i++){
                arr[i].checked = false;
                arr[i].description="";
               }      
                setSubCategData(arr);
                setCount(count+1)
                console.log("SUB DATA -----",arr)
                setCategName(arr[0].category_name)
                  
                }

               
              })
              .catch((error) => {
              
                console.log(error);
               
              });
        }
      }
      function onUpdateValue(data,index){
        let arr = subCategData;
        arr[index].checked = !data.checked;
         setSubCategData(arr);
        return setCount(count+1);
      }
      function getSubCategoryMap(){
       
   
        return subCategData.map((data, index) => {
             console.log("DATA --------",data)
              return (
                 
                <View style={{flexDirection:'column',marginTop:30}}>
                <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image
                    source={{
                        uri: data.image_path,
                      }}
                    style={{marginRight:20,    width: 70,
                        height: 50,borderRadius:5
                    }}
                />
                <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Poppins',width:180}}>{data.subcategory_name}</Text>
                </View>

                <CheckBox
                key={count}
                title=''
                    checked={data.checked}
                    onIconPress={()=>{
                        console.log("DATA ---",!data.checked)
                         onUpdateValue(data,index);   
                    }}
                    checkedColor='#F55633'
                    uncheckedColor='gray'
                />
                {/* <CheckBox
                    value={value}
                    onValueChange={()=>{setValue(!value)}}
                    tintColors={{ true: '#F55633', false: 'gray' }}
                     style={{justifyContent:'flex-end',backgroundColor:'white',color:'red'}}
                /> */}
                </View>
                {data.checked ===true?<View key={count} style={{marginHorizontal:25,marginTop:0}}>
                    <TextInputComponent
                       
                        // onBlur={()=>{
                        //     console.log("ON BLUR ---",description)
                        //     onSetDescription(data,index)
                        // }}
                        
                       
                        value={data.description}
                        //  onChangeText={_handleMultiInput(data,index)}
                        onChangeText = {(text) => { 
                            let arr = subCategData;
                            arr[index].description = text;
                            console.log("ARR {] ---des ----",arr[index].description)
                             setSubCategData(arr);
                               setCount(count+1);
                         }}
                          
                        // onChangeText={(text)=>{setDescription(text)}}
                        
                        placeholder=" Enter Description"
                    />
                </View>:null}
                
                
            </View>
              )
          })
      
    }
    const getCheckedItems=async()=>{
        let checkedItems=[];
        const toBeBookedItems=await AsyncStorage.getItem("checkedItems");
        if(toBeBookedItems!=null && toBeBookedItems!=undefined){
            const alreadyCheckedItems= JSON.parse(toBeBookedItems);
            subCategData.map((data,index)=>{
                if(data.checked){
                    let i;let isPresent=false;
                    for(i=0;i>alreadyCheckedItems.length;i++){
                        if(alreadyCheckedItems[i].image_path==data.image_path){
                            isPresent=true;
                            break;
                        }
                    }
                    if(!isPresent){
                        checkedItems.push({...data,cate_id:route.params.categ_id});
                        isPresent=false;
                    }
                }
                });
        }else{
            subCategData.map((data,index)=>{
                if(data.checked){
                    checkedItems.push({...data,cate_id:route.params.categ_id});
                }
                });
        }
        
        return checkedItems;
    }
    const checkOutPage=async()=>{
        let checkedItems=await getCheckedItems();
        const toBeBookedItems=await AsyncStorage.getItem("checkedItems");
        if(toBeBookedItems!=null && toBeBookedItems!=undefined){
            await AsyncStorage.removeItem("checkedItems");
            const alreadyCheckedItems= JSON.parse(toBeBookedItems);
            let allcheckedItems=[...alreadyCheckedItems,...checkedItems]
            console.log("All checked items",allcheckedItems);
            await AsyncStorage.setItem("checkedItems",JSON.stringify(allcheckedItems));

        }else{
            await AsyncStorage.setItem("checkedItems",JSON.stringify(checkedItems));
        }
       
        navigation.navigate('CheckoutScreen',{checkedItems:checkedItems});
        
    }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               {categName}
            </Text>
            {subCategData && subCategData.length > 0 ? getSubCategoryMap() :null}
           
            <View style={{flexDirection:'row',marginVertical:30,paddingHorizontal:10}}>
            <View style={{flex:1}}><Button title="Add More +" onPress={()=>{navigation.navigate('Addition')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>
            <View style={{flex:1}}><Button title="Check out" onPress={()=>{checkOutPage();}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

        </View>
        </ScrollView>
       
        </View>
    )
}
export default Plumbing;