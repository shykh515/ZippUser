import { StyleSheet } from 'react-native';
import Colour from '../../theme/color';

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colour.offwhite,
    },
    loginView: {
        backgroundColor: Colour.offwhite,
        paddingTop: 20,
        paddingHorizontal: 30,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        marginTop: 20,
        elevation: 24,
    },
    btnViewStyle: {
        marginVertical: 20
    },
    forgetbtn: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 10,
    },
    footerView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    signuptext: {
        marginLeft: 2,
        color: Colour.BLuecolor,
        fontWeight: 'bold',
        fontSize: 15,
    },
    accounttext: {
        color: Colour.textcolor,
        fontSize: 15,
    },
    logintitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    chackboxarea: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'flex-start',
    },
    chackbox: {
        borderRadius: 0,
        marginTop: 5,
        width: 18,
        height: 18,
    },
    chackboxtext: {
        color: "#4B3F2F",
        fontSize: 14,
        padding: 5,
        marginTop: 5,
    },
    checkBoxAndTextView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxText: {
        fontSize: 14,
        color: Colour.textcolor,
        marginTop: 5,
        lineHeight: 17,
        width: '95%',
    },
})

export default styles
