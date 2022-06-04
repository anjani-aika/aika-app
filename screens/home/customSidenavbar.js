 
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
const CustomSidebarMenu = (props) => {
  // console.log("Custom sidebar",props.navigation);
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
 
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={{flexDirection:'row',height:120}}>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Our Services');}}>
        <Image 
          style={{height:45,width:45,resizeMode:'stretch',marginTop:60,marginLeft:20}} 
          source={require('../../static/sidebar/dp.png')}
        />
      </TouchableOpacity>
     
        <Text style={{fontSize:20,fontWeight:'bold',color:'#F55633',marginTop:70,marginLeft:20}}>Hey There !</Text>

      </View>
      <View style={{width:'97%',height:5,backgroundColor:'#E7E7E7',position:'absolute',top:140}}></View>
      <DrawerContentScrollView {...props} style={{marginTop:-25}}>
        <DrawerItemList {...props} />
        <Image 
        style={{height:45,width:120,resizeMode:'stretch',alignSelf:'center',marginTop:10}} 
        source={require('../../static/sidebar/logout.png')}
      />

      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
 
export default CustomSidebarMenu;