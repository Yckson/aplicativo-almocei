import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import STYLE from "./style";


LocaleConfig.locales['ptBR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
};

LocaleConfig.defaultLocale = 'ptBR';



//Função que formata a data.

export function formatDate(date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;

}


//Função que gera uma chave aleatória.
export function customRamdomKey(length) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;

}

export function Diary({ controller }){
    const { selectedDate, setSelectedDate, absenseDays, } = controller;
    const [markedDays, setMarkedDays] = useState({...absenseDays, [selectedDate]: {selected: true, selectedColor: '#2F9E41'}});

    return (
      <Calendar
        onDayPress={day => {
          console.log(markedDays);
          setSelectedDate(day.dateString);
          setMarkedDays({...absenseDays, [day.dateString]: {selected: true, selectedColor: '#2F9E41'}});
        }}
        markedDates={markedDays}
        renderArrow={(direction) => <FontAwesome name={`chevron-${direction}`} size={20} color="#2F9E41" />}
        theme={{
          todayTextColor: '#2F9E41',
        }}
        showSixWeeks={true}
      />
    );
}

//Componente que renderiza o calendário de seleção de data.

export default function DateCalendar({ controller }){

    //O controller é um objeto que contém as propriedades show, setShow, date e setDate que são utilizadas para controlar o calendário.
    const {show, setShow, date, setDate} = controller; //Desestruturação das propriedades do controller.

    return (
        show && (
        <DateTimePicker
          testID="dateTimePicker" //Define o ID do componente.
          value={date} //Define a data do calendário.
          mode={'date'} //Define o modo de exibição do calendário como data.
          maximumDate={(()=>{ //Define a data máxima como a data atual.

            const newDate = new Date();
            newDate.setDate(newDate.getDate());
            return newDate;

          })()}

          is24Hour={true} //Define o formato de 24 horas.
          onChange={(event, selectedDate)=>{
            //Caso o usuário selecione uma data, a data selecionada é armazenada no estado e o calendário é fechado.
            const currentDate = selectedDate;
            setShow(false);
            setDate(currentDate);
          }}
        />
        )
    )


}