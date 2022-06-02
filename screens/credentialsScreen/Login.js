import { Height, Scale } from '@mui/icons-material';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {StatusBar, StyleSheet, Text, View,TextInput} from 'react-native';
import {Button, Input,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../components/context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";
import Toast from 'react-native-toast-message';
const Login = ({navigation}) => {
  const [email,setEmail] = useState("test1@gmail.com");
  const [password,setPassword] = useState("test@123");
  const [isLogin,setIsLogin] = useState(false);
  const {signIn} = React.useContext(AuthContext);

  const loginHandle = () => {
    setIsLogin(true);
    
    if(email != "" && password != ""){
      let headers={
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoidGVzdEAxMjMiLCJBUElfVElNRSI6MTY1NDAxMTkwNX0.tx-5NV242WgaWpGUMdtxZ6fMA2TukZVKJIVvUDFKbs0'
    }
    let data ={
      "username":"test1@gmail.com",
      "password":"test@123"
  }
  axios
    .post('https://pushpdiamonds.com/Door_Devp/index.php/api/Users/user_login',data, { headers: headers })
    .then((responseData) => {
      console.log('POST Response: ' + JSON.stringify(responseData.data));
      if(responseData.data.status === 200){
        console.log("responseData.data.status ---",responseData.data.message)
        Toast.show({
          type: 'success',
          text1:responseData.data.message ,
         
        });
        // "Login Successfull"
      }
     
    })
    .catch((error) => {
    
      console.log(error);
     
    });
  };
}

  return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.login}>
      <View style={styles.viel}>
        <Text style={{ fontSize:32, fontWeight:'600',fontFamily:'Poppins',color:'white'}}>DOOR DEVELOPMENT</Text>
      </View>
      <View style={styles.belowViel}>
      <View style={[styles.input,{ borderColor:isLogin && email === "" ? 'red' :'gray',borderWidth:1,}]}>
        {/* <FontAwesome5 name={'mail'}  size={26} style={styles.icons} /> */}
          <Icon name='mail-outline' size={30} color="black" style={{alignSelf:'center'}}/>
          <TextInput
            style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
            multiline={true}
            editable={true}
            onChangeText={(text)=>{setEmail(text)}}
            value={email}
            placeholderTextColor = "gray"
            placeholder=" Enter Email Address"
          ></TextInput>
        </View>
        <View style={[styles.input,{ borderColor:isLogin && password === "" ? 'red' :'gray',borderWidth:1,}]}>
        <Icon name='lock-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
          <TextInput
            style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
            // multiline={true}
            // editable={true}
            onChangeText={(text)=>{setPassword(text)}}
            value={password}
            secureTextEntry={true}
            placeholderTextColor = "gray"
            placeholder=" Enter Password"
          ></TextInput>
        </View>
        <View style={styles. forgotPassword}>
          <TouchableOpacity onPress={()=>{  navigation.navigate('ForgotPassword');}}>
            <Text style={{color:'#748AF9'}}>Forgot Password?</Text>
          </TouchableOpacity>
         
        </View>
        <View style={styles.button}>
        <Button onPress={()=>{loginHandle()}} title="LOG IN" buttonStyle={{width:280,height:50,backgroundColor:'#F55633'}}/>
        </View>
        <View style={styles.termsAndServices}>
          <Text style={{textAlign:'center',width:'100%',color:'black'}}>By singing up you accept the <Text style={{color:'#748AF9'}}>Team</Text> of <Text style={{color:'#748AF9'}}>Service</Text> and <Text style={{color:'#748AF9'}}>Privacy Policy</Text></Text>
        </View>
        <Toast position='bottom' ref={(ref) => Toast.setRef(ref)} />

      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {

    height:650,
  
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },

  input:{
    width:'88%',
    height:50,
    // borderColor:'gray',
    // borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  forgotPassword:{
    display:'flex',
    alignSelf:'flex-end',
    marginTop:-12,
    marginRight:18,
    position:'relative',  
    justifyContent:'center',
    width:130,
    height:30,
  },
  termsAndServices:{
    width:'75%',
    height:50,
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
