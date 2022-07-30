import { StyleSheet } from 'react-native'
import Colour from '../../theme/color';

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colour.offwhite,
    },
    headerCar: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
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
    logintitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    loginsubtitle: {
        color: Colour.textcolor,
        fontSize: 16,
        marginVertical: 5,
    },
    forgetbtn: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 15,
    },
    forgettext: {
        color: Colour.textcolor,
        fontWeight: "500"
    },
    btnViewStyle: {
        marginVertical: 20
    },
    logintext: {
        textAlign: 'center',
        fontSize: 16,
        color: Colour.textcolor
    },
    socailiconView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        paddingHorizontal: 40
    },
    googleIconView: {
        height: 50,
        width: 50,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fbIconView: {
        height: 50,
        width: 50,
        backgroundColor: '#3B5998',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    twitterIconView: {
        height: 50,
        width: 50,
        backgroundColor: '#38A1F3',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialicon: {
        width: 25,
        height: 25,
    },
    footerView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20
    },
    accounttext: {
        fontWeight: '600',
        color: Colour.textcolor,
        fontSize: 14,
    },
    signuptext: {
        marginLeft: 2,
        color: Colour.BLuecolor,
        fontWeight: 'bold',
        fontSize: 15,
    },




})

export default styles