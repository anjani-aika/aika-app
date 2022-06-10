import { Height, Scale } from '@mui/icons-material';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {StatusBar, StyleSheet, Text, View,TextInput,ActivityIndicator} from 'react-native';
import {Button, Input,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../components/context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";
import Toast from 'react-native-toast-message';
const ForgotPassword = ({navigation}) => {
  const [email,setEmail]=useState('');
  const [password,setPassword] = useState("");
  const [isForgotPwd,setIsForgotPwd]=useState(false);
  const [loading,setIsLoading] = useState(false);
  const {signIn} = React.useContext(AuthContext);

 
  const onForgotPwdHandle = async () => {
    setIsForgotPwd(true);
    
    if(email != "" && password != ""){
      setIsLoading(true);
     
    let data ={
      "email":email,
      "password":password
  }
  axios
    .post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/forget_password',data)
    .then((responseData) => {
      console.log('POST Response: ' + JSON.stringify(responseData.data));
      if(responseData.data.status === 200){
        setIsLoading(false)
      
        console.log("responseData.data.status ---",responseData.data.message)
        Toast.show({
          type: 'success',
          text1:responseData.data.message ,
         
        });
        setTimeout(()=>{
          navigation.navigate('Login');
        },500)
        // "Login Successfull"
      }
     
    })
    .catch((error) => {
    
      console.log(error);
     
    });
  };
}

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.login}>
      {/* <ActivityIndicator style={{position:'relative'}} size="large" color="#F55633" animating={true}/> */}

      <View style={styles.viel}>
        <Text style={{ fontSize:30, fontWeight:'bold',color:'white',textAlign:'center'}}>PACIFIC RED DOOR DEVELOPMENT</Text>
      </View>
      <View style={styles.belowViel}>
        <View >
            <Text style={{fontWeight:'bold',color:'#F55633',fontSize:25,textAlign:'center',marginBottom:30}}>Reset Password</Text>
            <View style={[styles.input,{ borderColor:isForgotPwd && email === "" ? 'red':'gray',borderWidth:1}]}>
                <Icon name='mail-outline' size={30} color="black" style={{alignSelf:'center'}}/>
                <TextInput
                    style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
                    onChangeText={(text)=>{setEmail(text)}}
                    value={email}
                    placeholderTextColor = "gray"
                    placeholder=" Enter Email Address"
                ></TextInput>
            </View>
        </View>
        <View style={[styles.input,{ borderColor:isForgotPwd && password === "" ? 'red' :'gray',borderWidth:1,}]}>
        <Icon name='lock-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
          <TextInput
            style={{width:'80%',borderWidth:0,borderRadius:8,borderColor:'gray', color: 'black'}}
            // multiline={true}
            // editable={true}
            onChangeText={(text)=>{setPassword(text)}}
            value={password}
            secureTextEntry={true}
            placeholderTextColor = "gray"
            placeholder=" Enter Password"
          ></TextInput>
        </View>

        <View style={styles.button}>
        <Button onPress={()=>{onForgotPwdHandle()}} title=" GET A NEW PASSWORD" buttonStyle={{width:280,height:50,backgroundColor:'#F55633'}}/>
        </View>
        <TouchableOpacity onPress={()=>{  navigation.navigate('Login');}}>
            <Text style={{color:'#F55633',fontSize:22,fontFamily:'Poppins-Regular'}}>Login</Text>
          </TouchableOpacity>
        <View style={styles.termsAndServices}>
          <Text style={{textAlign:'center',width:'100%',color:'black',fontFamily:'Poppins-Regular'}}>By singing up you accept the <Text style={{color:'#748AF9'}}>Team</Text> of <Text style={{color:'#748AF9'}}>Service</Text> and <Text style={{color:'#748AF9'}}>Privacy Policy</Text></Text>
        </View>
      </View>
      <Toast position='bottom' ref={(ref) => Toast.setRef(ref)} />
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  login: {
    height:650,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  button:{
    width:'75%',
    height:50,
    backgroundColor:'#F55633',
    justifyContent:'center'
  },
  input:{
    borderRadius:8,
    backgroundColor:'#F6F6F6',
    width:'88%',
    height:50,
    // borderColor:'gray',
    // borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom:50
  },
  forgotPassword:{
    display:'flex',
    alignSelf:'flex-end',
    marginTop:-20,
    marginRight:18,
    position:'relative',  
    justifyContent:'center',
    width:130,
    height:30,
  },
  termsAndServices:{
    width:'75%',
    height:50,
    marginTop:10
  },
  viel:{
    flex:1,
    backgroundColor:'#F55633',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderBottomLeftRadius:45,
    borderBottomRightRadius:45
  },
  belowViel:{
    // borderWidth:1,
    // borderColor:'gray',
    marginTop:20,
    width:'100%',
    flex:2.2,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  }
});
