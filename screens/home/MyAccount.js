import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const MyAccount=({navigation})=>{
    return(
        <View>
            <Header />
        </View>
    )
}

export default MyAccount;