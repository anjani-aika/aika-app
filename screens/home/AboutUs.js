import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const AboutUs=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,padding:25}}>
            <Text style={{fontWeight:'600',fontSize:18,color:'black'}}>About Us</Text>
            <Text style={{textAlign:'justify',marginTop:10,fontSize:15}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum in urna, adipiscing non. 
            Egestas ultrices ut neque nibh sed. Ut aliquam aenean posuere posuere. 
            Eu, sed massa lectus cras lorem massa massa enim egestas. Nisi, justo, facilisis semper nibh. 
            Elementum enim, faucibus molestie malesuada sed dolor, faucibus. Pellentesque elit sed velit consectetur. 
            Diam metus diam nam vitae ut tempor eu id. Sed egestas urna urna nunc, orci. Vitae in nam malesuada eget auctor tincidunt sodales. 
            Velit id nullam tortor vulputate diam luctus. Et, amet neque, in pharetra congue. Varius et pharetra ac volutpat aenean eu dui. 
            Odio sit et accumsan massa suscipit tincidunt pharetra urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Condimentum in urna, adipiscing non. Egestas ultri malesuada sed dolor, faucibus. Pellentesque elit sed velit consectetur. 
            Diam metus diam nam vitae ut tempor eu id. Sed egestas urna urna nunc, orci. Vitae in nam malesuada eget auctor tincidunt sodales. 
            Velit id nullam tortor vulputate diam luctus. Et, amet neque, in pharetra congue. Varius et pharetra ac volutpat aenean eu dui. 
            Odio sit et accumsan massa suscipit tincidunt pharetra urna.
            </Text>
        </View>
    )
}

export default AboutUs;