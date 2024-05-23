import React, { useState } from 'react';
import { StyleSheet, Text, View, Touchable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';



import STYLE from './style';

import Scheduling from './Scheduling';
import Extract from './Extract';
import Absence from './Absence';
import Menu from './Menu';
import NavbarTop from '../utils/NavbarTop';

const Tab = createBottomTabNavigator();


export default function Main({ route, navigation }) {

    
    
    return (
        <Tab.Navigator screenOptions={
            ({ route, navigation }) => {
                return {
                    headerTitle: (props) => <NavbarTop route={route} navigation={navigation} />,
                    headerStyle: {
                        height: 100,
                    },

                    tabBarStyle: {
                        backgroundColor: '#2F9E41',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                    
                    },

                    tabBarLabelStyle: {
                        fontSize: 10,
                        color: 'white',
                        marginBottom: 5,
                        
                    },

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Agendamento':
                                iconName = 'calendar';
                                break;
                            case 'Cardápio':
                                iconName = 'cutlery';
                                break;
                            case 'Ausência':
                                iconName = 'calendar-times-o';
                                break;
                            case 'Extrato':
                                iconName = 'file-text-o';
                                break;
                        }
                        return <FontAwesome name={iconName} size={20} color={focused ? '#E1e1e1' : 'white'} />;
                    }
                }
            }
            // Essas são as opções de navegação para o cabeçalho do aplicativo.	
        }>

            {/* Abaixo estão as abas do aplicativo. */}
            
            <Tab.Screen name="Agendamento" component={Scheduling}/>
            <Tab.Screen name="Cardápio" options={{lazy: false}} component={Menu} />
            <Tab.Screen name="Ausência" component={Absence} />
            <Tab.Screen name="Extrato" component={Extract} />
        </Tab.Navigator>
    );
}