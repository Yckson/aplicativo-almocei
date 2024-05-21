import { createContext, useContext, useState } from "react";


//Criação do contexto de autenticação
//Esse contexto será utilizado para verificar se o usuário está logado ou não.



//Função que cria o contexto de autenticação
export const AuthContext = createContext();


//Função que retorna o contexto de autenticação
export function useAuth() {
    return useContext(AuthContext);
}


//Função que fornece o contexto de autenticação para os componentes filhos
export function AuthProvider({value, children }) {
    const { isLogged, setIsLogged } = value;

    const userImage = require("../../../assets/dev_placeholders/user-temp.png"); //Lembrar que isso é temporário, enquanto não existe back-end

    //Fornece o provedor de autenticação para os componentes filhos
    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, userImage }}>
            {children}
        </AuthContext.Provider>
    );
}