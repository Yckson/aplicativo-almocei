import React, { useState, useEffect } from 'react'; 
import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import STYLE from './style';

import { useAuth } from '../../Auth';
import DateCalendar, { formatDate } from '../../utils/DateCalendar';

//Componente que renderiza um agendamento.
function Schedule({ schedule }) {
    const { user } = useAuth(); //Desestruturação do contexto de autenticação.
    
    return (
        <TouchableOpacity style={STYLE.schedule} onPress={()=>{console.log(schedule.id)}}>
            <View style={STYLE.scheduleInfo}>

                {user.userType === "student" ? null : <Image style={STYLE.userImage} source={schedule.userImage} />}
                
                <View style={STYLE.userInfo}>
                    <Text style={STYLE.userName}>{schedule.name.length > 26 ? schedule.name.substring(0, 23) + '...' : schedule.name}</Text> 
                    <Text style={STYLE.userMatricula}>{schedule.matricula}</Text>
                </View>
                
            </View>
            {user.userType === "student" ? <Text style={STYLE.scheduleDate}>{formatDate(new Date(schedule.date))}</Text> : null}
            
        </TouchableOpacity>
    );
}


//Componente que renderiza a tela de agendamentos vazia.
function SchedulingEmpty() {
    return (
        <View style={STYLE.schedulingEmpty}>
            <Text style={STYLE.textNoSchedule}>SEM AGENDAMENTOS</Text>
            <TouchableOpacity style={STYLE.addScheduleBtn} onPress={() => {console.log('Adicionando agendamento!')}}>
                <FontAwesome name="plus-circle" size={60} color="#2F9E41" />
            </TouchableOpacity>
        </View>
    );

}


//Componente que renderiza a tela de agendamentos do aluno.
function SchedulingStudent({ schedules }){
    return (
        <View style={STYLE.container}>
            {   
                schedules.length === 0 ? <SchedulingEmpty /> :

                <FlatList style={STYLE.schedulesList}
                data={schedules}
                keyExtractor={schedule => String(schedule.id)}
                renderItem={(item)=>{
                    const schedule = item.item;
                    return <Schedule schedule={schedule} />
                }}
                />
            }
            <TouchableOpacity style={STYLE.addScheduleBtn} onPress={() => {console.log('Adicionando agendamento!')}}>
                <FontAwesome name="plus-circle" size={60} color="#2F9E41" />
            </TouchableOpacity>
        </View>
    );

}


//Componente que renderiza a tela de agendamentos do administrador.
function SchedulingAdm({ schedules }){
    const [showCalendar, setShowCalendar] = useState(false); //Armazena o estado do calendário.
    const [date, setDate] = useState(new Date()); //Armazena a data selecionada no calendário.
    const [total, setTotal] = useState(0); //Armazena o total de agendamentos.
    const [search, setSearch] = useState(""); //Armazena o texto da barra de pesquisa.

    //Apenas para testes--------------------------------

    

    useEffect(() => {
        setTotal(schedules.length);
    }, [schedules]); //Define o total de agendamentos.

    //-------------------------------------------------

    //Função que filtra os agendamentos de acordo com o texto da barra de pesquisa.
    const handleSearch = (text) => {
        setSearch(text);
    }
    //-------------------------------------------------

    //Renderização da tela de agendamentos do administrador.
        return (
            <View style={STYLE.container}>
                <View style={STYLE.headerAdm}>
                    <View style={STYLE.searchSection}>
                        <View style={STYLE.searchBar}>
                            <FontAwesome name="search" size={24} color="#000" />
                            <TextInput style={STYLE.searchBarInput} placeholder="Pesquisar" value={search} onChangeText={handleSearch}/>
                        </View>
                        <TouchableOpacity style={STYLE.addScheduleAdm}>
                            <FontAwesome name="plus" size={24} color="#2F9E41" />
                        </TouchableOpacity>
                    </View>
                    <View style={STYLE.calendarHolder}>
                        <TouchableOpacity style={STYLE.calendarBtn} onPress={() => setShowCalendar(true)}>
                            <FontAwesome name="calendar" size={24} color="#515151" />
                            <Text style={STYLE.calendarText}>
                                {formatDate(date)}
                            </Text>
                            <FontAwesome name="chevron-down" size={24} color="#515151" />
                        </TouchableOpacity>
                        <TouchableOpacity style={STYLE.exportButton} onPress={()=>{console.log('Exportando agendamentos')}}>
                            <FontAwesome5 name="file-export" size={24} color="#000" />
                        </TouchableOpacity>
                        <DateCalendar controller={{show: showCalendar, setShow: setShowCalendar, date: date, setDate: setDate }} />
                        <Text style={STYLE.totalSchedules}>Total: {total}</Text>
                    </View>

                </View>

                {schedules.length === 0 ? <SchedulingEmpty /> :

                <FlatList style={STYLE.schedulesList}
                    data={schedules}
                    keyExtractor={schedule => String(schedule.id)}
                    renderItem={(item)=>{
                        const schedule = item.item;
                        return <Schedule schedule={schedule} />
                    }}
                />
                }
            </View>
        );
    }


//Componente que renderiza a tela de agendamentos.

export default function Scheduling({ navigation }) {

    const exempleSchedules = [
        {
            id: 1,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barboxxxxxxxxxxsa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 2,
            date: "2024-05-22",
            name: "Victor Bruno Silvbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 3,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 4,
            date: "2024-05-22",
            name: "William Gabriel Yckson Araújo Braga",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 5,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 6,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 7,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 8,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 9,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
        {
            id: 10,
            date: "2024-05-22",
            name: "Victor Bruno Silva Barbosa",
            matricula: "2019000000",
            userImage: require("./../../../../assets/dev_placeholders/user-temp.png"),
        },
    ]; //Exemplo de agendamentos.

    const [schedules, setSchedules] = useState([]); //Armazena os agendamentos do usuário.
    const { user, setUser } = useAuth(); //Desestruturação do contexto de autenticação.

    //Apenas para testes--------------------------------

    useEffect(() => {
        setSchedules(exempleSchedules);
    }, []); //Define os agendamentos do usuário.

    //-------------------------------------------------

    
    return (
        user.userType === "adm" ? <SchedulingAdm schedules={schedules} /> : <SchedulingStudent schedules={schedules} /> //Renderiza a tela de agendamentos de acordo com o tipo de usuário.
        
    );
}