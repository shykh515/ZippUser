import { StyleSheet } from 'react-native'
import Colour from '../../theme/color';

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colour.offwhite,
    },
    loginView: {
        backgroundColor: Colour.offwhite,
        paddingTop: 40,
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
        elevation: 15,
    },
    btnViewStyle: {
        marginVertical: 20
    },
    forgetbtn: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 10,
    },
    logintext: {
        textAlign: 'center',
        fontSize: 16,
        color: Colour.textcolor
    },
    footerView: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginTop: 20
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
    loginsubtitle: {
        color: Colour.textcolor,
        fontSize: 15,
        marginVertical: 5,
    },
    forgettext: {
        color: Colour.textcolor,
    },
    socialicon: {
        width: 50,
        height: 50,
    },
    socailiconView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        paddingHorizontal: 30
    },
    headerCar: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default styles