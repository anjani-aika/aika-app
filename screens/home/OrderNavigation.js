import React from 'react';
import {Button, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyOrders from './MyOrders';
import EditOrders from './Editorders';
import OrderDetails from './OrderDetails';

const OrderNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="MyOrdersScreen2"
        >
            
            <Stack.Screen
                name="MyOrdersScreen"
                component={MyOrders}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="MyOrdersScreen2"
                component={MyOrders}
                options={
                    {
                        headerShown: false
                    }
                }
            />
             <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name="EditOrders"
                component={EditOrders}
                options={
                    {
                        headerShown: false
                    }
                }
            />

        </Stack.Navigator>
    )
}

export default OrderNavigation;
