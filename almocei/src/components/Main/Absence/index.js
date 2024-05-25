import React, { useState } from 'react'; 
import { View, Text } from 'react-native';

import STYLE from './style';

import Scheduling from '../Scheduling';
import { useAuth } from '../../Auth';
import { Diary } from '../../utils/DateCalendar';

function AbsenceStudentView ({ controllers }){
    const {selectedDate, setSelectedDate} = controllers;

    const [absenseDays, setAbsenseDays] = useState({
        '2024-05-13': {selected: true, marked: true, selectedColor: 'red'},
        '2024-05-14': {selected: true, marked: true, selectedColor: 'red'},
    });

    return (
        <View style={STYLE.container}>
            <Diary controller={{selectedDate, setSelectedDate, absenseDays}} />
            <Scheduling />
        </View>
    );
}

export default function Absence() {
    const { user } = useAuth();
    const [selectedDate, setSelectedDate] = useState({});

    function handleSelectDate(date) {
        setSelectedDate(date);
        console.log(date);
    }

    return (
        user.userType === "adm" ? <Scheduling /> : <AbsenceStudentView controllers={{selectedDate, setSelectedDate: handleSelectDate}}/>
    );
}