import React, { useState, createContext, useContext, useEffect, Fragment } from 'react'; 
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'; // Importa ícones do pacote expo/vector-icons

import STYLE from './style';

import { customRamdomKey } from '../../utils/DateCalendar';
import { useAuth } from '../../Auth';



// Cria um contexto para o menu do restaurante
const MenuContext = createContext();

// Função que retorna o contexto do menu
function useMenu() {
    return useContext(MenuContext);
}

// Função que fornece o contexto do menu para os componentes filhos
function MenuProvider({ value, menuData, children }) {
    const { menu, setMenu, changedMenu, setChangedMenu } = value;

    return (
        <MenuContext.Provider value={{ menu, setMenu, changedMenu, setChangedMenu }}>
            {children}
        </MenuContext.Provider>
    );

}

// Componente que exibe o menu de um dia específico
function DayMenu({ route }) {
    const { day } = route.params; // Obtém o dia da semana passado como parâmetro
    
    const { user } = useAuth(); // Obtém o usuário do contexto
    const { menu, setMenu, changedMenu, setChangedMenu } = useMenu(); // Obtém o menu do contexto
    const [menuOfDay, setMenuOfDay] = useState({}); // Obtém o cardápio do dia específico
    

    // Atualiza o cardápio do dia toda vez que o menu for alterado
    useEffect(() => {
        // Atualiza o cardápio do dia específico
        setMenuOfDay(menu[day.substring(0, 3).toLowerCase()]);
    }, [menu]);





    // Função que remove o cardápio de um dia específico
    function removeDayMenu() {
        
        console.log(`Removendo cardápio de ${day}`);
    }

    // Função que edita o cardápio de um dia específico
    function editDayMenu() {
        console.log(`Editando cardápio de ${day}`);
    }

    return (
        <View style={STYLE.container}>
            <View style={STYLE.dayTitleHolder}>
                
                <Text style={STYLE.dayTitle}>{day}</Text>

                {   
                    // Se o usuário for um administrador, exibe o botão de edição
                    user.userType === 'adm' && Object.values(menuOfDay).length > 0 &&
                    <TouchableOpacity style={STYLE.editBtn} onPress={editDayMenu}>
                        <FontAwesome5 name="edit" size={24} color="#2F9E41" />
                    </TouchableOpacity>
                }
            </View>
            {
                // Se o cardápio do dia não estiver vazio, exibe o cardápio
                (() => {
                    if (Object.values(menuOfDay).length > 0) {
                        return (
                            <Fragment>
                                <Text style={STYLE.daySubtitle}>Saladas</Text>
                                <Text style={STYLE.foodDesc}>{menuOfDay.sag}</Text>
                                <Text style={STYLE.daySubtitle}>Acompanhamento</Text>
                                <Text style={STYLE.foodDesc}>{menuOfDay.side}</Text>
                                <Text style={STYLE.daySubtitle}>Prato principal</Text>
                                <Text style={STYLE.foodDesc}>{menuOfDay.main}</Text>
                                <Text style={STYLE.daySubtitle}>Sobremesa</Text>
                                <Text style={STYLE.foodDesc}>{menuOfDay.dessert}</Text>
                                {
                                user.userType === 'adm' &&
                                    <TouchableOpacity style={STYLE.removeBtn} onPress={removeDayMenu}>
                                        <FontAwesome5 name="trash" size={40} color="#FF0000" />
                                    </TouchableOpacity>
                                }
                            </Fragment>
                        );
                    }
                    return (
                        // Se o cardápio do dia estiver vazio, exibe uma mensagem
                        <Text style={STYLE.daySubtitle}>O cardápio não está disponível no momento!</Text>
                    )
                })()
            }
            {
                // Se o cardápio do dia estiver vazio e o usuário for um administrador, exibe o botão de adição
                user.userType === 'adm' && Object.values(menuOfDay).length === 0 &&
                <TouchableOpacity style={STYLE.addBtn} onPress={editDayMenu}>
                    <FontAwesome name="plus-circle" size={50} color="#2F9E41" />
                </TouchableOpacity>
            }

            <Image source={require('../../../img/background-semicircle.png')} style={STYLE.bgSemiCircle}/>

            

            


        </View>
    );
}


const Tab = createMaterialTopTabNavigator(); // Isso é um componente de navegação que cria uma barra de abas na parte superior da tela

export default function Menu() {
    const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']; // Dias da semana
    const [menu, setMenu] = useState({
        seg: {},
        ter: {},
        qua: {},
        qui: {},
        sex: {},
        "sáb": {},
    }); // Cria um estado para armazenar o menu do restaurante

    const [changedMenu, setChangedMenu] = useState(false); // Cria um estado para controlar a atualização do menu


    // Apenas para testes--------------------------------
    useEffect(() => {
        // Simula a requisição de um menu de um restaurante
        setMenu({
            seg: {
                sag: 'Alface, tomate, cenoura',
                main: 'Arroz e feijão',
                side: 'Salada de alface',
                dessert: 'Gelatina',
            },
            ter: {
                sag: 'Alface, tomate, cenoura',
                main: 'Macarrão',
                side: 'Salada de cenoura',
                dessert: 'Pudim',
            },
            qua: {
                sag: 'Alface, tomate, cenoura',
                main: 'Feijoada',
                side: 'Salada de tomate',
                dessert: 'Mousse de maracujá',
            },
            qui: {
                sag: 'Alface, tomate, cenoura',
                main: 'Carne de panela',
                side: 'Salada de repolho',
                dessert: 'Goiabada',
            },
            sex: {
                sag: 'Alface, tomate, cenoura',
                main: 'Frango assado',
                side: 'Salada de beterraba',
                dessert: 'Pavê',
            },
            "sáb": {
                sag: 'Alface, tomate, cenoura',
                main: 'Peixe frito',
                side: 'Salada de pepino',
                dessert: 'Bolo de cenoura',
            }
        });
        
    }, [changedMenu]);

    //-------------------------------------------------
    

    return (
        // O MenuProvider é um componente que fornece o contexto do menu para os componentes filhos
        <MenuProvider value={{ menu, setMenu, changedMenu, setChangedMenu }}>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: '#2F9E41',
                tabBarInactiveTintColor: '#515151',
                tabBarIndicatorStyle: {
                backgroundColor: '#2F9E41'
                },
        
            }}>
                {
                    days.map((day) => {
                        const formatedDay = day.substring(0, 3);
                        return(
                            <Tab.Screen name={formatedDay} key={`DAYMENU-${customRamdomKey}`} component={DayMenu} initialParams={{day, menu}}/>
                        )
                }) // Para cada dia da semana, cria uma aba com o nome do dia e o componente DayMenu
                }
            </Tab.Navigator>
        </MenuProvider>
    );
}