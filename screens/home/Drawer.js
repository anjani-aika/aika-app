import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from './Help';
import AboutUs from './AboutUs';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
import OurServices from './OurServices';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConition from './TermsCondition';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const MyDrawer=()=>{

    return (
    // <NavigationContainer>
    <Drawer.Navigator
        drawerType="front"
        initialRouteName="OurServices"
        screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 10 },
        }}

    >
        <Drawer.Screen
            name="OurServices"
            component={OurServices}
            options={{
            drawerIcon:({focused})=>{
                <Icon
                    name="email"
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                />}
        
            ,
             headerShown:true,
            header: ({ scene }) => {
                    // const { options } = scene.descriptor;
                    const title ="OurServices"
                    return (
                        <Header screen={title}/>
                    );
                }

            }}
            
            />
             <Drawer.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
            drawerIcon:({focused})=>{
                <Icon
                    name="email"
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                />}
        
            ,
             headerShown:true,
            header: ({ scene }) => {
                    // const { options } = scene.descriptor;
                    const title ="MyAccount"
                    return (
                        <Header screen={title}/>
                    );
                }

            }}
            
            />

{/* 
        <Drawer.Screen
            key="OurServices"
            name="OurServices"
            component={OurServices}
        />
        <Drawer.Screen
            key="MyAccount"
            name="MyAccount"
            component={MyAccount}
        />
        <Drawer.Screen
            key="MyOrders"
            name="MyOrders"
            component={MyOrders}
        />
        <Drawer.Screen
            key="AboutUs"
            name="AboutUs"
            component={AboutUs}
        />
        <Drawer.Screen
            key="PrivacyPolicy"
            name="PrivacyPolicy"
            component={PrivacyPolicy}
        />
        <Drawer.Screen
            key="TermsConition"
            name="TermsConition"
            component={TermsConition}
        />
        <Drawer.Screen
            key="Help"
            name="Help"
            component={Help}
        /> */}

    </Drawer.Navigator>
    // </NavigationContainer>         

    )
    };

export default MyDrawer;