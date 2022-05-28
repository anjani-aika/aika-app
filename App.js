/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './components/context';
import Start from './screens/start';
import Login from './screens/login';
import Register from './screens/register';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#FFFFFF' },
};


const App= () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={backgroundStyle}>
     <AuthContext.Provider >
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          
            <>
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />

            </>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    </SafeAreaView>
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
