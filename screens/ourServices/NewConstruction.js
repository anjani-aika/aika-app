import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import DocumentPicker, { types } from 'react-native-document-picker';
const NewConstruction=({navigation})=>{
    const handledocument=async()=>{
        try{
            const res = await DocumentPicker.pick({
                type: [types.pdf],
                allowMultiSelection:false
                //There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
              });
            console.log('res : ' + JSON.stringify(res));
            console.log('URI : ' + res[0].uri);
            console.log('Type : ' + res[0].type);
            console.log('File Name : ' + res[0].name);
            console.log('File Size : ' + res[0].size);
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
        </View>
    )
}
export default NewConstruction;