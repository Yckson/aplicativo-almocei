import { StyleSheet } from "react-native";

const STYLE = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    dayTitleHolder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2F9E41',
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },

    dayTitle: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        color: '#2F9E41',
        
    },

    editBtn: {
        marginLeft: 10,
    },

    addBtn: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },

    removeBtn: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },

    daySubtitle: {
        fontSize: 16,
        fontFamily: 'MontserratSemiBold',
        color: '#2F9E41',
        padding: 10,
        width: '70%',
        //borderBottomWidth: 1,
        //borderBottomColor: '#2F9E41',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
    },

    foodDesc: {
        fontSize: 12,
        fontFamily: 'MontserratSemiBold',
        color: '#515151',
        padding: 10,
        width: '70%',
        textAlign: 'center',
        marginBottom: 10,
    },

    bgSemiCircle:{
        position: 'absolute',
        bottom: 40,
        left: 0,
        zIndex: -1,
        height: 315,
        transform: [
            { scaleX: 1.7 },
            { scaleY: 1.7 },
        ],
    }


});

export default STYLE;