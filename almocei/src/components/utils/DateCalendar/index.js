import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

import STYLE from "./style";



//Função que formata a data.

export function formatDate(date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;

}

export function customRamdomKey() {
  const date = new Date();
  return date.getTime().toString();
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