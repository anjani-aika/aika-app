import React, {useState} from 'react';
import {Image} from 'react-native';
import {StatusBar, StyleSheet, Text, View,Button,Input} from 'react-native';
// import {Button, Input} from 'react-native-elements';
import {AuthContext} from '../components/context';

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
    <View style={styles.login}>
    
      <View style={styles.entries}>
        <Input
          placeholder="Email.."
          placeholderTextColor = "gray"
          containerStyle={styles.input}
          autofocus
          type="text"
          onChangeText={text => setData({...data, email: text})}
          inputContainerStyle={{borderBottomWidth: 0}}
          blurOnSubmit={false}
        />
        <Input
          placeholder="Password"
          placeholderTextColor = "gray"
          containerStyle={styles.input}
          secureTextEntry
          type="password"
          // value={password}
          underlineColorAndroid="transparent"
          onChangeText={text => setData({...data, password: text})}
          inputContainerStyle={{borderBottomWidth: 0}}
        />
        <Text
            style={{color: 'black', fontWeight: 'bold',marginTop:-10,width:280}}
            onPress={() => navigation.navigate('OtpLogin')}>
            Forgot Password?
          </Text>
  
        <Button
          title="Sign In"
          buttonStyle={styles.button}
          onPress={() => {
            loginHandle(data.email, data.password);
          }}
        />
        <Text style={{color: 'gray', marginTop: 10}}>
          Don't have any account?
          </Text>
          <Text
            style={{color: 'black', fontWeight: 'bold',marginTop:-20}}
            onPress={() => navigation.navigate('Register')}>
            SignUp
          </Text>
        
          
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 146,
    height: 230,
  },
  entries: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    borderTopLeftRadius: 80,
  },
  input: {
    width: 295,
    height: 42,
    backgroundColor: 'rgba(146, 179, 138, 0.1)',
    borderRadius: 8,
  },
  button: {
    width: 300,
    backgroundColor: '#738BF3',
    borderRadius: 1,
    color: 'black',
  },
});
