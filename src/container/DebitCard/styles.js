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
        paddingTop: 30,
        flex: 1,

    },
    flexBox: {
        justifyContent: "center",
        alignItems: 'center'
    },
    imageStyle: {
        width: 320,
        height: 200
    },
    inputView: {
        marginTop: 40,
    },
    inputtitle: {
        fontSize: 14,
        color: Colour.lightgraycolor
    },
    inputstyle: {
        flex: 1,
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        color: '#000',
        height: 40,
        fontSize: 17,
        paddingTop: 0,
        paddingBottom: 3,
    },
    DateView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DateView1: {
        flex: 1,
        marginRight: 20
    },
    radiobtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: -10,
    },
    radiobtntext: {
        fontWeight: 'bold',
        color: Colour.textcolor,
        fontSize: 15
    },
    BtnView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30
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
    }
})

export default styles