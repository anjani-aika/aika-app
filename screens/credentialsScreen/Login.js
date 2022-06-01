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
const Login = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const {signIn} = React.useContext(AuthContext);

  const loginHandle = (email, pass) => {
    signIn(email, pass);
  };

  return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.login}>
      <View style={styles.viel}>
        <Text style={{ fontSize:32, fontWeight:'600',fontFamily:'Poppins',color:'white'}}>DOOR DEVELOPMENT</Text>
      </View>
      <View style={styles.belowViel}>
        <View style={styles.input}>
        {/* <FontAwesome5 name={'mail'}  size={26} style={styles.icons} /> */}
          <Icon name='mail-outline' size={30} color="black" style={{alignSelf:'center'}}/>
          <TextInput
            style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
            multiline={true}
            editable={true}
            placeholderTextColor = "gray"
            placeholder=" Enter Email Address"
          ></TextInput>
        </View>
        <View style={styles.input}>
        <Icon name='lock-outline' size={30} color="black" style={{alignSelf:'center',justifyContent:'center'}}/>
          <TextInput
            style={{width:'80%',borderWidth:0,borderRadius:4,borderColor:'gray', color: 'black'}}
            multiline={true}
            editable={true}
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
        <Button title="LOG IN" buttonStyle={{width:280,height:50,backgroundColor:'#F55633'}}/>
        </View>
        <View style={styles.termsAndServices}>
          <Text style={{textAlign:'center',width:'100%',color:'black'}}>By singing up you accept the <Text style={{color:'#748AF9'}}>Team</Text> of <Text style={{color:'#748AF9'}}>Service</Text> and <Text style={{color:'#748AF9'}}>Privacy Policy</Text></Text>
        </View>
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
    borderColor:'gray',
    borderWidth:1,
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
