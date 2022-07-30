import { StyleSheet } from 'react-native'
import Colour from '../../theme/color';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: Colour.textcolor,
    },
    MainView: {
        backgroundColor: Colour.whitecolor,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        flex: 1,

    },
    profileimage: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Colour.lightgraycolor,
    },
    editBtn: {
        backgroundColor: Colour.graywhitecolor,
        width: 30,
        height: 30,
        padding: 5,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: Colour.bordercolor,
        marginTop: -28,
        marginLeft: 70,
    },
    profileimgView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    userName: {
        color: Colour.textcolor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    editprofile: {
        fontSize: 14,
        color: Colour.BLuecolor,
        fontWeight: 'bold'
    },
    heading: {
        color: Colour.textcolor,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    MoreView: {
        marginTop: 20,
    },
    View1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 10,
        height: 40,
        flex: 1,
    },
    SettingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 10,
        height: 40,

    },
    title: {
        fontSize: 15,
        color: Colour.subheadingcolor,
        marginLeft: 10,
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 10,
        height: 40,

    },
    subheading: {
        color: Colour.subheadingcolor,
        fontWeight: 'bold',
        fontSize: 15
    },
    userdetails: {
        fontSize: 15,
        color: Colour.subheadingcolor,
        marginLeft: 10,
    },
    modelcontiner: {
        backgroundColor: Colour.whitecolor,
        position: 'absolute',
        bottom: -20,
        width: '100%',
        left: 0,
        right: 0,
        padding: 15,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        height: 230,
        paddingTop: 30
    },
    ModalView: {
        paddingBottom: 20,
    },
    ModalTitle: {
        textAlign: 'center',
        fontSize: 22,
        color: Colour.textcolor,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ModalFixView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    pamentCardView: {
        justifyContent: 'center',
        backgroundColor: Colour.whitecolor,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        padding: 10,
        width: 100,
        height: 115,
    },
    paymenttext: {
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 10,
        textAlign: 'left',
        color: Colour.textcolor
    },
    paymentIcon: {
        width: 50,
        height: 50,
        marginLeft: 10,
    },
})

export default styles