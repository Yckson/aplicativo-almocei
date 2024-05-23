// Sessão de importação de bibliotecas-------------------------------------------------

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState, Fragment, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"

//-------------------------------------------------------------------------------------

//Sessão de importação de componentes-------------------------------------------------

import Login from './src/components/Login';
import Main from './src/components/Main';
import Profile from './src/components/Main/Profile';
import { AuthProvider } from './src/components/Auth';

//-------------------------------------------------------------------------------------

SplashScreen.preventAutoHideAsync(); //Impede que a tela de splash seja ocultada automaticamente.

//Função principal do aplicativo------------------------------------------------------
export default function App() {

  const Stack = createNativeStackNavigator(); //Criação de um navegador de pilha para a navegação entre telas.

  //Usuário de exemplo para testes.
  const exempleUserStudent = {
    name: "Victor Bruno da Silva Barbosa",
    matricula: "2019000001",
    email: "victorbruno@gmail.com",
    userType: "student",
  };

  //Usuário de exemplo para testes.
  const exempleUserAdm = {
    name: "Victor Bruno da Silva Barbosa",
    matricula: "2019000001",
    email: "victorbruno@gmail.com",
    userType: "adm",
  };


  //SESSÃO DE HOOKS DO REACT-NATIVE ---------------------------------------------------

    const [isLogged, setIsLogged] = useState(true); //Diponibiliza telas diferentes se o usuário estiver logado ou não.
    const [isSplashReady, setIsSplashReady] = useState(false); //Controla a exibição da tela de splash.
    const [user, setUser] = useState({}); //Armazena os dados do usuário logado.


    //Apenas para testes--------------------------------
    
    useEffect(() => {
      if (isLogged) {
        //setUser(exempleUserStudent);
        setUser(exempleUserAdm);
        console.log('Falsamente logado! App.js linha 59')
      }
      else{
        //setUser({});
      }
    }, [isLogged]); //Define o usuário de acordo com o estado de login.


    //-------------------------------------------------


    //Importação das fontes personalizadas.
    const [fontsLoaded] = useFonts({
      Montserrat: require("./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"),
      MontserratBold: require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
      MontserratSemiBold: require("./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
      MontserratItalic: require("./assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf"),
      MontserratMedium: require("./assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    });

        //Esconde a tela de splash quando as fontes são carregadas.
        useEffect(() => {
          const loadApp = async () => {
            if (fontsLoaded) {
              await SplashScreen.hideAsync().catch(() => {});
              setIsSplashReady(true);
            }
          };
    
          loadApp();
        }, [fontsLoaded]);
    
        if (!isSplashReady) {
          return <ActivityIndicator size="large" color="#0000ff" />;
        }
      
      //-------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------

  //Funções---------------------------------------------------------------------------

    


  

    //Função que seleciona a tela a ser exibida de acordo com o estado de login do usuário.
    const selectScreen = () => {
      if (isLogged) {
        return (
          <Stack.Group>
            <Stack.Screen name="Main" options={
              {headerShown: false}
            } component={Main}/>
            <Stack.Screen name="Perfil" component={Profile}/>
          </Stack.Group>
        )
      }
      else{
        return (
          <Stack.Screen name="Login" component={Login} options={
            {
              headerShown: false //Ocultar o cabeçalho da tela de login.
            }
          }/>
        )
      }
    }

    //-------------------------------------------------------------------------------------


  //Renderização do aplicativo---------------------------------------------------------
  return (
    <Fragment>
      <AuthProvider value={{ isLogged, setIsLogged }} userData={{user, setUser}}>
        <NavigationContainer>
          <Stack.Navigator>
            {selectScreen()}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </Fragment>
    
  );
  //-------------------------------------------------------------------------------------
}


