import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const AboutUs=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1,paddingTop:60,padding:25}}>
            <Text style={{fontWeight:'600',fontSize:18,color:'black',fontFamily:'Poppins-Regular'}}>About Us</Text>
            <Text style={{textAlign:'justify',marginTop:10,fontSize:15,color:'black',marginBottom:5}}>
                The Best A-Grade
                commercial & Residential
                Services
            </Text><Text style={{color:'black'}}>
            Our projects include both new construction and repairs
            restorations. Occupied and fully operational job sites
            are never a problem. And
            we can also plan, manage, and build multi-phase jobs
            </Text><Text style={{color:'black'}}>
            We offer an end-to-end client experience that includes seamless communication, budgeting, staffing, on-site organization, and solid, quality handiwork every time.
            </Text><Text style={{color:'black',fontWeight:'bold',marginTop:5}}>
            Why Choose Us? 
            </Text><Text style={{color:'black'}}>
            We work with architects and designers to produce beautiful, functional structures. Call us today and bring our project management skills and extensive construction experience to your next project.
            </Text>
        </View>
    )
}

export default AboutUs;