import { StyleSheet, Dimensions } from 'react-native'
import Colour from '../../theme/color';
const { width } = Dimensions.get('screen');


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
        paddingTop: 20,
    },
    balanceView: {
        borderBottomWidth: 1,
        borderBottomColor: Colour.lightgraycolor,
        paddingBottom: 10,
        marginBottom: 5,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        marginTop: 25
    },
    balancetitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Colour.textcolor
    },
    balancetitle1: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        color: Colour.textcolor
    },
    balancetotal: {
        fontSize: 37,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    inputstyle: {
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        color: '#000',
        height: 40,
        fontSize: 17,
        paddingTop: 0,
        paddingBottom: 3,
    },
    inputtitle: {
        fontSize: 14,
        color: Colour.lightgraycolor
    },
    BtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    backBtn: {
        padding: 10,
        backgroundColor: Colour.lightwhite,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colour.lightgraycolor,
        width: 60,
    },
    btnViewStyle: {
        flex: 1,
        backgroundColor: Colour.textcolor,
        width: width * 0.70,
        marginLeft: 10
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
        marginHorizontal: 40,
        marginTop: 10,
    },
})

export default styles