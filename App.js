/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View} from 'react-native';
import { useMemo } from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './components/context';
import Start from './screens/credentialsScreen/Start';
import Login from './screens/credentialsScreen/Login';
import Register from './screens/credentialsScreen/Register';
import ForgotPassword from './screens/credentialsScreen/forgotPassword';
import MyDrawer from './screens/home/Drawer';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#FFFFFF' },
};


const App= () => {

  const authContext = useMemo(
    () => ({
      signIn: async (phoneNo, password) => {

        try {
          console.log("hi signup");
        } catch (e) {
          console.log(e);
        }

      },
      signOut: async () => {
        try {
          console.log("hi signup");
          // await AsyncStorage.removeItem('userToken');
          // const key = await AsyncStorage.getAllKeys()
          // await AsyncStorage.multiRemove(key)
        } catch (e) {
          console.log(e);
        }
       // dispatch({ type: 'LOGOUT' });
      },
      signUp: async (name, phone, email, password,role,doctorInfo) => {
        // device token
        try {
         console.log("hi signup");
        }catch(e){
          console.log("Error in updating the devietoken",e.message);
        }
                   
            },
      
      }));
          
  return (
    <>
     <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={globalScreenOptions}>
          
            <> 
            {/* <Stack.Screen name="Start" component={Start} /> */}
              <Stack.Screen name="Home" component={MyDrawer} />
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="Register" component={Register} />
              

            </>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
