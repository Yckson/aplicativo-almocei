import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Keyboard, Vibration } from "react-native";
import STYLE from "./style.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../Auth";


export default function Login({ route, navigation }) {

    const logoImage = require("../../img/logo-ifba.png"); //Importando a imagem do logo do IFBA


    //SESSÃO DE HOOKS DO REACT-NATIVE ---------------------------------------------------
        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");
        const [loginError, setLoginError] = useState(false);
        const [passwordError, setPasswordError] = useState(false);
        const { setIsLogged, setUser, user } = useAuth(); //Importando a função que vai mudar o estado de login
    

    //-------------------------------------------------------------------------------------

    //Funções---------------------------------------------------------------------------

        //Função de atualização de login -- atualizar o valor do login no campo visual

        const updateLogin = (text) => {
            setLogin(text);
        }

        //Função de atualização de senha -- atualizar o valor da senha no campo visual

        const updatePassword = (text) => {
            setPassword(text);
        }

        //Função de validação de login -- verificar se está tudo certo com o login

        const validateLogin = () =>{
            if(login === ""){
                setLoginError(true);
                Vibration.vibrate(200);
                return false;
            }
            setLoginError(false);
            return true;
        }

        //Função de validação de senha -- verificar se está tudo certo com a senha

        const validatePassword = () =>{
            if(password === ""){
                setPasswordError(true);
                Vibration.vibrate(200);
                return false;
            }
            setPasswordError(false);
            return true;
        }

        //Função de logar -- Lembrar de fazer a validação do banco de dados aqui

        const logAccount = () => {

            if(validateLogin() & validatePassword()){
                console.log("Logado com sucesso");
                setIsLogged(true);
                const userType = 'adm';
                //Posteriomente, a função setUser vai ser chamada com os dados do usuário logado
                setUser({name: "Victor Bruno Silva Barbosa", matricula: "2019000000", userType: userType});
                console.log('Entrando como: ', userType);

                return true;
            }

            setUser({});
            console.log("Erro ao logar");
            return false;
        }

    //-------------------------------------------------------------------------------------

    //Componente de erro ------------------------------------------------------------------

        const errorComponent = (error) => {
            return (
                <View style={STYLE.error}>
                    <Text style={STYLE.errorText}>{error}</Text>
                </View>
            );
        }

    


    return (
        <SafeAreaView style={STYLE.container}>
            <Pressable style={STYLE.container} onPress={Keyboard.dismiss}>
                <View style={STYLE.header}>
                    <Image source={logoImage} style={STYLE.logo}/>
                    <Text style={STYLE.title}>Almocei</Text>
                </View>
                <Text style={STYLE.formTitle}>Entrar</Text>
                <View style={STYLE.form}>
                    <TextInput value={login} style={STYLE.input} onChangeText={updateLogin} placeholder="Login"/>
                    {loginError ? errorComponent("Login inválido! Campo Obrigatório.") : null /*Se houver erro, exibir o componente de erro*/} 
                    <TextInput value={password} style={STYLE.input} onChangeText={updatePassword} placeholder="Senha" secureTextEntry={true}/>
                    {passwordError ? errorComponent("Senha inválida! Campo Obrigatório.") : null /*Se houver erro, exibir o componente de erro*/} 
                    <TouchableOpacity style={STYLE.button} onPress={logAccount}> 
                        <Text style={STYLE.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={STYLE.forgotPW}>
                        <Text style={STYLE.forgotPWText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </SafeAreaView>
    );
}