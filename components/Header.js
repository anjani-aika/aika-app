import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function Header(){
 const navigation = useNavigation();
  return(
    <View style={headerStyles.container}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Icon name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View>
            <Icon name="notifications-none"
                onPress={()=>navigation.navigate('Notification')}
                />

        </View>
    </View>
    )
}

const headerStyles=StyleSheet.create({
   container:{
       position:'absolute',
       top:0,
       left:0,
       width:'100%',
       backgroundColor:'white',
       elevation:0,
       height:50,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between'
   }
})