import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from './Help';
import {Text,Image} from 'react-native';
import AboutUs from './AboutUs';
import MyAccount from './MyAccount';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConition from './TermsCondition';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import CustomSidebarMenu from './customSidenavbar';
import OrderNavigation from './OrderNavigation';
import OurServicesNavigation from '../ourServices/ourServicesNavigation';
import Notification from '../ourServices/Notification';

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
            component={OurServicesNavigation}
            
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
                        <Header />
                    );
                }

            }}
            
            />
            <Drawer.Screen
                name="Notification"
                component={Notification}
                options={{
               
                drawerActiveBackgroundColor:'none',
                drawerContentContainerStyle:{display:'none'},
                drawerLabelStyle:{display:'none'},
                headerShown:true,
                header: ({ scene }) => {
                        // const { options } = scene.descriptor;
                        
                        return (
                            <Header />
                        );
                    }

                }}
            
            />
             <Drawer.Screen
                name="My Account"
                component={MyAccount}
                options={{
                drawerActiveTintColor:'#181725',
                drawerActiveBackgroundColor:'none',
                drawerLabelStyle:{paddingLeft:'10%'},
                headerShown:true,
                header: ({ scene }) => {
                        // const { options } = scene.descriptor;
                        
                        return (
                            <Header />
                        );
                    }

                }}
            
            />
              <Drawer.Screen
                name="My Orders"
                component={OrderNavigation}
                options={{
                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        // const { options } = scene.descriptor;
                        
                        return (
                            <Header />
                        );
                    }

                }}
            
            />  
            <Drawer.Screen
                name="About Us"
                component={AboutUs}
                options={{
                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        
                        return (
                            <Header />
                        );
                    }

                }}
            
            />
            
              <Drawer.Screen
                name="Privacy Policy"
                component={PrivacyPolicy}
                options={{

                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        
                        return (
                            <Header />
                        );
                    }

                }}
            
            />
              <Drawer.Screen
                name="Terms & Conditions"
                component={TermsConition}
                options={{

                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        
                        return (
                            <Header />
                        );
                    }

                }}
            
            />
              <Drawer.Screen
                name="Help"
                component={Help}
                options={{

                drawerActiveTintColor:'#181725',
                drawerLabelStyle:{paddingLeft:'10%'},
                drawerActiveBackgroundColor:'none',
                headerShown:true,
                header: ({ scene }) => {
                        // const { options } = scene.descriptor;
                        
                        return (
                            <Header />
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