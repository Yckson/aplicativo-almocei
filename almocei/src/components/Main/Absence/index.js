import React from 'react'; 
import { View, Text } from 'react-native';

import STYLE from './style';

export default function Absence() {
    return (
        <View style={STYLE.container}>
            <Text style={STYLE.text}>Absence</Text>
        </View>
    );
}