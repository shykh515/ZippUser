import { StyleSheet } from 'react-native'
import Colour from '../../theme/color';


const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: Colour.offwhite,
    },
    loginView: {
        flex: 1,
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

        elevation: 24,
    },
    btnViewStyle: {
        marginTop: '60%'
    },

    logintitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    loginsubtitle: {
        color: Colour.textcolor,
        fontSize: 17,
        marginVertical: 5,
        fontWeight: '600'
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
    ViewStyle: {
        marginTop: 20,
    },
    modalStyle: {
        marginHorizontal: 0
    },
    modelcontiner: {
        backgroundColor: Colour.whitecolor,
        position: 'absolute',
        bottom: -21,
        width: '100%',
        left: 0,
        right: 0,
        padding: 15,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        height: 260,
        paddingTop: 30
    },
    ModalTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: Colour.textcolor,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ModalSubTitle: {
        textAlign: 'center',
        fontSize: 17,
        color: Colour.textcolor,
    },
    ModalView: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerCar: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default styles