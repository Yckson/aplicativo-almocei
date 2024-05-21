import { StyleSheet } from 'react-native';

const STYLE = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        color: '#515151'
    },

    imageButton: {
        width: 60, 
        height: 60, 
        borderRadius: 50,
    }
});

export default STYLE;