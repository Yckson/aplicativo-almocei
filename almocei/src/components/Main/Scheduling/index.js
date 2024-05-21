import React, { useState } from 'react'; 
import { View, Text } from 'react-native';

import STYLE from './style';

export default function Scheduling() {

    const [schedules, setSchedules] = useState([]);

    return (
        <View style={STYLE.container}>
            <Text style={STYLE.text}>Scheduling</Text>
        </View>
    );
}