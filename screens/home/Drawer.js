import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from './Help';
import {Text,Image} from 'react-native';
import AboutUs from './AboutUs';
import MyAccount from './MyAccount';
import OurServices from './OurServices';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConition from './TermsCondition';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import CustomSidebarMenu from './customSidenavbar';
import OrderNavigation from './OrderNavigation';

const Drawer = createDrawerNavigator();

const MyDrawer=()=>{

    return (
    // <NavigationContainer>
    <>
    <Drawer.Navigator
        drawerType="front"
        initialRouteName="Our Services"
        screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 10 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
        <Drawer.Screen
          
            name="Our Services"
            component={OurServices}
            
            options={{
            drawerActiveTintColor:'#181725',
            drawerActiveBackgroundColor:'none',
            drawerContentContainerStyle:{display:'none'},
            drawerLabelStyle:{display:'none'},
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
                name="My Account"
                component={MyAccount}
                options={{
                    drawerIcon: config => 
                    <Image 
                        style={{height:25,width:25,resizeMode:'stretch',marginTop:0,marginLeft:0}} 
                        source={require('../../static/sidebar/account.png')}
                    />
            
                ,
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
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
              <Drawer.Screen
                name="My Orders"
                component={OrderNavigation}
                options={{
                    drawerIcon: config => 
                    <Image 
                    style={{height:25,width:25,resizeMode:'stretch',marginTop:0,marginLeft:0}} 
                    source={require('../../static/sidebar/orders.png')}
                />
            
                ,
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
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
            <Drawer.Screen
                name="About Us"
                component={AboutUs}
                options={{
                    drawerIcon: config =>
                    <Image 
                        style={{height:25,width:25,resizeMode:'stretch',marginTop:0,marginLeft:0}} 
                        source={require('../../static/sidebar/aboutus.png')}
                    />
            
                ,
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        const title ="MyAccount"
                        return (
                            <Header screen={title}/>
                        );
                    }

                }}
            
            />
              <Drawer.Screen
                name="Privacy Policy"
                component={PrivacyPolicy}
                options={{
                    drawerIcon: config => 
                    <Image 
                        style={{height:25,width:25,resizeMode:'stretch',marginTop:0,marginLeft:0}} 
                        source={require('../../static/sidebar/privacy.png')}
                    />
            
                ,
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        const title ="MyAccount"
                        return (
                            <Header screen={title}/>
                        );
                    }

                }}
            
            />
              <Drawer.Screen
                name="Terms & Conditions"
                component={TermsConition}
                options={{
                    drawerIcon: config => 
                    <Image 
                        style={{height:25,width:25,resizeMode:'stretch',marginTop:0,marginLeft:0}} 
                        source={require('../../static/sidebar/terms.png')}
                    />
            
                ,
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        const title ="MyAccount"
                        return (
                            <Header screen={title}/>
                        );
                    }

                }}
            
            />
              <Drawer.Screen
                name="Help"
                component={Help}
                options={{
                    drawerIcon: config =>
                    <Image 
                        style={{height:25,width:25,resizeMode:'stretch',marginTop:0,marginLeft:0}} 
                        source={require('../../static/sidebar/help.png')}
                    />
            
                ,
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
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

    </Drawer.Navigator>
    {/* // </NavigationContainer>      */}
    </>    

    )
    };

export default MyDrawer;