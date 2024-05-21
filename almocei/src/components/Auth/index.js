import { createContext, useContext } from "react";


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

    //Fornece o provedor de autenticação para os componentes filhos
    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    );
}