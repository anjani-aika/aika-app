import React from 'react';
import {Button, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bathroom from './Bathroom';
import Painting from './Painting';
import Plumbing from './Plumbing';
import Electrical from './Electrical';
import Doors from './Doors';
import Roofings from './Roofings';
import Flooring from './Flooring';
import Kitchen from './Kitchen';
import Addition2 from './Additions2';
import Window from './Window';
import Remodel from './Remodel';
import CheckoutScreen from './CheckoutScreen';
import CheckoutPage from './CheckoutPage';

const RemodelNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Remodel"
        >
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
                name="Remodel"
                component={Remodel}
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
                name="Doors"
                component={Doors}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="Roofings"
                component={Roofings}
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

export default RemodelNavigation;
