import { StyleSheet } from "react-native";

const STYLE = StyleSheet.create({
    schedulingEmpty: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

        
    },

    textNoSchedule: {
        fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "#4294C6",
    },

    addScheduleBtn: {
        display: "flex",
        position: "absolute",
        bottom: 5,
        right: "50%",
        transform: [{translateX: 30}],
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: 65,
        width: 65,
        borderRadius: 50,
        backgroundColor: "#fff",

    },

    

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    headerAdm: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 10,
    },

    searchSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
    },

    searchBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        backgroundColor: "#EFEFEF",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    searchBarInput: {
        width: "100%",
        marginLeft: 10,
        fontFamily: "MontserratMedium",
        fontSize: 16,
    },

    addScheduleAdm: {
        marginRight: 10,
    },

    calendarHolder: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    calendarBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 200,
        padding: 10,
        backgroundColor: "#EFEFEF",
        borderRadius: 10,
    },

    totalSchedules: {
        fontFamily: "MontserratMedium",
        fontSize: 16,
        color: "#515151",
    },

    schedulesList: {
        width: "100%",
    },

    schedule: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFEF",
    },

    scheduleInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },

    scheduleDate: {
        fontFamily: "MontserratMedium",
        fontSize: 12,
        color: "#515151",
    },

    scheduleDateText: {
        fontFamily: "MontserratMedium",
        fontSize: 14,
        color: "#515151",
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    userInfo:{
        marginLeft: 10,
    },

    userName: {
        fontFamily: "MontserratSemiBold",
        fontSize: 14,
    },

    userMatricula: {
        fontFamily: "MontserratMedium",
        fontSize: 12,
    },

    exportButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#EFEFEF",
        borderRadius: 10,
    
    },


});

export default STYLE;