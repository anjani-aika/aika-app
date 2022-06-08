import React,{useState} from 'react';
import {View,Text, StyleSheet, TextInput,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PageButton from '../../../components/PageButton';

const TextInputComponent=({navigation,onChangeText,value,placeholder,props})=>{
    const [currentValue, setCurrentValue] = useState(`${value}`);
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:15}}>
            {/* <Text style={{fontFamily:'Poppins-Light',fontWeight:'600',fontSize:18,padding:25,color:'black',paddingTop:25,marginBottom:10}}>
               Flooring
            </Text>
            <PageButton buttonName={'New Construction'}/>
            <PageButton buttonName={'Remodel'}/>
            <PageButton buttonName={'Addition'}/> */}
             <TextInput
                        style={{width:'100%',height:62,borderWidth:1,borderRadius:4,borderColor:'gray', color: 'black'}}
                        // onBlur={()=>{
                        //     console.log("ON BLUR ---",description)
                        //     onSetDescription(data,index)
                        // }}
                        multiline={true}
                        editable={true}
                        value={currentValue}
                        //  onChangeText={_handleMultiInput(data,index)}
                        onChangeText = {(text)=>{setCurrentValue(text)}}
                        // onChangeText={(text)=>{setDescription(text)}}
                        placeholderTextColor = "gray"
                        placeholder={placeholder}
                        onEndEditing={() => onChangeText(currentValue)}
                        
                    ></TextInput>
        </View>
    )
}
export default TextInputComponent;