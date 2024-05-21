import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from '../../Auth';

import STYLE from "./style";


//Funções para os botões de notificação e perfil--------------------------------
function NotificationButton() {
    return (
        <TouchableOpacity onPress={() => { console.log('Abrindo notificações!!') }}>
            <FontAwesome name="bell-o" size={24} color="#515151" />
        </TouchableOpacity>
    );
}

function ProfileButton() {
    const { userImage } = useAuth();
    return (
        <TouchableOpacity onPress={() => { console.log('Abrindo perfil!!') }}>
            <Image source={userImage} style={STYLE.imageButton} />
        </TouchableOpacity>
    );
}

//------------------------------------------------------------------------------

//Componente NavbarTop---------------------------------------------------------
export default function NavbarTop({ route, navigation }) {
    return(
        <View style={STYLE.container}>
            <NotificationButton />
            <Text style={STYLE.title}>{route.name}</Text>
            <ProfileButton />
        </View>
    );
}