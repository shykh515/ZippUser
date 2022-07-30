import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    child_1: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#9D9D9D",
        marginTop: 15,
        paddingHorizontal: 10,
        height: 50
    },
    input: {
        flex: 1,
        color: "#404040",
        height: 25,
        borderLeftWidth: 1,
        borderLeftColor: "#9D9D9D",
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 13,
        fontWeight: '600'
    },
    iconView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 23,
        height: 23,
    },
    inputEyeIconStyle: {
        color: '#9F9D9D',
        fontSize: 17,
        textAlign: 'center',
        width: 30,
    },
})

export default styles;