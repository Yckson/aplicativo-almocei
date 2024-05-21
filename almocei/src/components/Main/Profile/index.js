import React from 'react'; 
import { View, Text } from 'react-native';

import STYLE from './style';

export default function Profile() {

    return (
        <View style={STYLE.container}>
            <Text style={STYLE.text}>Profile</Text>
        </View>
    );
}