import React from 'react';
import {Button, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Addition from './Addition';
import NewConstruction from './NewConstruction';
import Remodel from './Remodel';
import OurServices from './OurServices';
const OurServicesNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="OurServices"
        >
            
            <Stack.Screen
                name="OurServices"
                component={OurServices}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Addition"
                component={Addition}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="NewConstruction"
                component={NewConstruction}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Remodel"
                component={Remodel}
                options={
                    {
                        headerShown: false
                    }
                }
            />

        </Stack.Navigator>
    )
}

export default OurServicesNavigation;
