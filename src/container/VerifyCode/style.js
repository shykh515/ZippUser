import { StyleSheet } from 'react-native'
import Colour from '../../theme/color';

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colour.whitecolor,
    },
    loginView: {
        backgroundColor: Colour.offwhite,
        padding: 20,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    btnViewStyle: {
        marginVertical: 20
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
        fontSize: 30,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    loginsubtitle: {
        color: Colour.textcolor,
        fontSize: 15,
        width: 200,
        lineHeight: 22,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    phonenumber: {
        color: Colour.textcolor,
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },
    otparea: {
        justifyContent: "center",
        paddingHorizontal: 20,
        height: 100,
    },
    otp: {
        height: 150,
    },
    borderStyleHighLighted: {
        borderColor: Colour.bordercolor,
    },
    underlineStyleBase: {
        width: 60,
        height: 60,
        borderWidth: 0,
        borderWidth: 3,
        color: "#000",
        fontWeight: "bold",
        fontSize: 30,
        borderRadius: 10,
    },
    underlineStyleHighLighted: {
        borderColor: Colour.BLuecolor,
    },
})


export default styles