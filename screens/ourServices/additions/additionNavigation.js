import React from 'react';
import {Button, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bathroom from './Bathroom';
import Painting from './Painting';
import Plumbing from './Plumbing';
import Electrical from './Electrical';
import Door from './Door';
import Roofing from './Roofing';
import Flooring from './Flooring';
import Kitchen from './Kitchen';
import Addition2 from './Additions2';
import Addition from './Addition';
import Window from './Window';
import CheckoutScreen from './CheckoutScreen';
import CheckoutPage from './CheckoutPage';
import AddAddress from './AddAddress';
import CheckoutPage2 from './CheckoutPage2';
import BookingConfirmed from './BookingConfirmed';
import OurServicesNavigation from '../ourServicesNavigation';

const AdditionNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Addition"
        >
              <Stack.Screen
                name="BookingConfirmed"
                component={BookingConfirmed}
                options={
                    {
                        headerShown: false
                    }
                }
            />
          
            <Stack.Screen
                name="OurServicesNavigation"
                component={OurServicesNavigation}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="AddAddress"
                component={AddAddress}
                options={
                    {
                        headerShown: false
                    }
                }
            />
   
            <Stack.Screen
                name="CheckoutScreen"
                component={CheckoutScreen}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="CheckoutPage"
                component={CheckoutPage}
                options={
                    {
                        headerShown: false
                    }
                }
            /> 

            <Stack.Screen
                name="CheckoutPage2"
                component={CheckoutPage2}
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
                name="Painting"
                component={Painting}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Kitchen"
                component={Kitchen}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="Bathroom"
                component={Bathroom}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Flooring"
                component={Flooring}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Plumbing"
                component={Plumbing}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Electrical"
                component={Electrical}
                options={
                    {
                        headerShown: false
                    }
                }
            />
              <Stack.Screen
                name="Window"
                component={Window}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Door"
                component={Door}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Roofing"
                component={Roofing}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Addition2"
                component={Addition2}
                options={
                    {
                        headerShown: false
                    }
                }
            />

        </Stack.Navigator>
    )
}

export default AdditionNavigation;
