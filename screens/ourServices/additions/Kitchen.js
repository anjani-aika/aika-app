import React,{useState,useEffect} from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image,TextInput} from 'react-native';

// import CheckBox from '@react-native-community/checkbox';
import { Button, Icon, CheckBox } from 'react-native-elements';
import PageButton from '../../../components/PageButton';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputComponent from '../remodel/TextInputComponent';
import axios from "axios";

// const SingleItem=({src,material})=>{
//     const [value,setValue]=useState(false);
 
//     return(
//         <View style={{flexDirection:'column',marginTop:30}}>
//             <View style={{flexDirection:'row',paddingHorizontal:25,justifyContent:'space-between',alignItems:'center'}}>
//             <View style={{flexDirection:'row',alignItems:'center'}}>
//             <Image
//                 source={src}
//                 style={{marginRight:20}}
//             />
//             <Text style={{fontSize:18,fontWeight:'500',fontFamily:'Poppins-Light'}}>{material}</Text>
//             </View>
//             <CheckBox
//                 title=''
//                 checked={value}
//                 onIconPress={()=>setValue(!value)}
//                 checkedColor='#F55633'
//                 uncheckedColor='gray'
//             />
//             {/* <CheckBox
//                 value={value}
//                 onValueChange={()=>{setValue(!value)}}
//                 tintColors={{ true: '#F55633', false: 'gray' }}
//                  style={{justifyContent:'flex-end',backgroundColor:'white',color:'red'}}
//             /> */}
//             </View>
//             {value===true?<View style={{marginHorizontal:25,marginTop:20}}>
//                 <TextInput
//                     style={{width:'100%',height:62,borderWidth:1,borderRadius:4,borderColor:'gray', color: 'black'}}
//                     multiline={true}
//                     editable={true}
//                     placeholderTextColor = "gray"
//                     placeholder=" Enter Description"
//                 ></TextInput>
//             </View>:null}
            
//         </View>
//     )
// }
const Kitchen=({navigation,route})=>{
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
        subCategData.map((data,index)=>{
            if(data.checked){
                checkedItems.push(data);
            }
            });
        return checkedItems;
    }
    const checkOutPage=async()=>{
        let checkedItems=await getCheckedItems();
        AsyncStorage.setItem("checkedItems",JSON.stringify(checkedItems));
        navigation.navigate('CheckoutScreen',{checkedItems:checkedItems});
        
    }
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView contentContainerStyle={{backgroundColor:'white',paddingTop:60,borderColor:'gray'}}>
            
            <Text style={{fontFamily:'Poppins',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:0}}>
               {categName}
            </Text>
            {subCategData && subCategData.length > 0 ? getSubCategoryMap() :null}
            {/* <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Countertops'}/> */}
            {/* <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Handles'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Kitchen Facuet'}/>
            <SingleItem src={require('../../../static/orders/Countertops.png')} material={'Kitchen sink'}/> */}

            <View style={{flexDirection:'row',marginVertical:30,paddingHorizontal:10}}>
            <View style={{flex:1}}><Button title="Add More +" onPress={()=>{navigation.navigate('Kitchen')}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>
            <View style={{flex:1}}><Button title="Check out" onPress={()=>{checkOutPage();}} buttonStyle={{backgroundColor:'#F55633',width:150,height:50,alignSelf:'center',borderRadius:8}}/></View>

        </View>
        </ScrollView>
       
        </View>
    )
}
export default Kitchen;