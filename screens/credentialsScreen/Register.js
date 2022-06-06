import React, {useState, useLayoutEffect, useEffect} from 'react'
import { StyleSheet,View,TouchableOpacity,Modal,Text ,TextInput,ActivityIndicator} from 'react-native';
import { AuthContext } from '../../components/context';
import { Button,Icon } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Register = ({ navigation }) => {
    const [name,setName] = useState("");
    const [phno,setPhno] = useState("");
    const [email,setEmail] = useState("");
    const [loading,setIsLoading] = useState(false);
    const [password,setPassword] = useState("");
    const [location,setLocation] = useState("");
    const [isRegister,setIsRegister] = useState(false);

    const {signUp} = React.useContext(AuthContext);
   
    const register = async () => {
        setIsRegister(true);
        if(name!= "" && phno != "" && email != "" && password != "" && location != ""){
            setIsLoading(true);
            let data ={
                "name":name,
                "email":email,
                "mob_no":phno,
                "password":password,
                "address":location,
               
            }
            axios
              .post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/user_signup',data)
              .then((responseData) => {
                console.log('POST Response: ' + JSON.stringify(responseData.data));
                if(responseData.data.status === 200){
                  console.log("responseData.data.status ---",responseData.data.user_info)
                  AsyncStorage.setItem("user_info",JSON.stringify(responseData.data.user_info) );
                  setIsLoading(false)
                  Toast.show({
                    type: 'success',
                    text1:responseData.data.message ,
                   
                  });
                  setTimeout(()=>{
                    navigation.navigate('Home');
                  },500)
                
                  // "Login Successfull"
                }
               
              })
              .catch((error) => {
              
                console.log(error);
               
              });
        }
    }
    useEffect(()=>{console.log("register")});
    return (

       <KeyboardAwareScrollView contentContainerStyle={{height:650,paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}}>
              
           <View  style={{flex:1,borderWidth:0,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'600',fontSize:24,fontFamily:'Poppins', color:'black'}}>Register New User</Text>
           </View>
        
           <View style={{flex:4,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
           <View style={[styles.input,{ borderColor:isRegister && name === "" ? 'red' :'gray',borderWidth:1,}]}>
                <Icon name='person-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    onChangeText={(text)=>{setName(text)}}
                    value={name}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your full name"
                ></TextInput>
            </View>
            
            <View style={[styles.input,{ borderColor:isRegister && phno === "" ? 'red' :'gray',borderWidth:1,}]}>
                <Icon name='call' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    onChangeText={(text)=>{setPhno(text)}}
                    value={phno}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your phone number"
                ></TextInput>
            </View>
            <View style={[styles.input,{ borderColor:isRegister && email === "" ? 'red' :'gray',borderWidth:1,}]}>
                <Icon name='mail-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    onChangeText={(text)=>{setEmail(text)}}
                    value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter your Email Address"
                ></TextInput>
            </View>
            <ActivityIndicator style={{justifyContent:'center',alignItems: 'center',alignSelf:'center',position:'absolute',height:'100%'}} size="large" color="#F55633" animating={loading}/>
            <View style={[styles.input,{ borderColor:isRegister && password === "" ? 'red' :'gray',borderWidth:1,}]}>
            <Icon name='lock-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
            <TextInput
                style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                onChangeText={(text)=>{setPassword(text)}}
                value={password}
                secureTextEntry={true}
                placeholderTextColor = "gray"
                placeholder=" Enter your password"
                ></TextInput>
            </View>
           
            <View style={[styles.input,{ borderColor:isRegister && location === "" ? 'red' :'gray',borderWidth:1,}]}>
                <Icon name='place' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    onChangeText={(text)=>{setLocation(text)}}
                    value={location}
                    placeholderTextColor = "gray"
                    placeholder=" Location"
                ></TextInput>
            </View>
           </View>
           
           <View style={{flex:1.5,borderWidth:0,justifyContent:'space-evenly',alignItems:'center'}}>
                <Text style={{textAlign:'center',width:'80%',fontFamily:'Poppins',color:'black',paddingTop:40}}>
                By singing up you accept the <Text style={{color:'#748AF9'}}>Team</Text> of <Text style={{color:'#748AF9'}}>Service</Text> and <Text style={{color:'#748AF9'}}>Privacy Policy</Text>
                </Text>
                <Button onPress={()=>{register()}} title="REGISTER" buttonStyle={{width:300,height:56,backgroundColor:'#F55633',marginTop:20}}/>
           </View>
           
           <Toast position='bottom' ref={(ref) => Toast.setRef(ref)} />
       </KeyboardAwareScrollView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    input:{
        marginTop:10,
        width:'88%',
        height:50,
        // borderColor:'gray',
        // borderWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:6,
        backgroundColor:'#F6F6F6'
      },

})
