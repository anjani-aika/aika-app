import React from 'react';
import {Button, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdditionNavigation from './additions/additionNavigation';
import NewConstruction from './NewConstruction';
import RemodelNavigation from './remodel/remodelNavigation';
import OurServices from './OurServices';
import BookingNewConstruction from './BookingNewConstruction';
import CheckoutNewConstruction from './CheckoutNewConstruction';
import AddAddressNewCons from './AddAddressNewCons';

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
                name="BookingNewConstruction"
                component={BookingNewConstruction}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="AddAddressNewCons"
                component={AddAddressNewCons}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
            name="CheckoutNewConstruction"
            component={CheckoutNewConstruction}
            options={
                {
                    headerShown: false
                }
            }
        />
             <Stack.Screen
                name="Addition"
                component={AdditionNavigation}
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
                component={RemodelNavigation}
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
