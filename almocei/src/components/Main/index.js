import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import STYLE from './style';

import Scheduling from './Scheduling';
import Extract from './Extract';
import Absence from './Absence';

const Tab = createBottomTabNavigator();


export default function Main({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Agendamento" component={Scheduling} />
            <Tab.Screen name="Cardápio" component={Extract} />
            <Tab.Screen name="Ausência" component={Absence} />
            <Tab.Screen name="Extrato" component={Extract} />
        </Tab.Navigator>
    );
}