import {StyleSheet} from 'react-native';

const STYLE = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },   

    header: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        paddingTop: 100,
        
    },

    title:{
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 30,
        color: "#37474F",
    },

    formTitle: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        fontSize: 32,
        color: "#37474F",
        margin: 40,
    },

    logo: {
        width: 90,
        height: 65,
    },

    form: {
        width: "100%",
        alignItems: "center",
        padding: 20,
    },

    input:{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },

    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#2F9E41",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },

    buttonText:{
        color: "#fff",
    },

    forgotPWText:{
        color: "#2F9E41",
        textDecorationLine: "underline",
        padding: 10,
    },

    errorText:{
        color: "#dc3545",
    },

});

export default STYLE;