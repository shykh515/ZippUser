import { StyleSheet, Dimensions } from 'react-native'
import Colour from '../../theme/color';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container1: {
        backgroundColor: Colour.whitecolor,
    },
    MainView: {
        backgroundColor: Colour.whitecolor,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        position: 'absolute',
        top: '-90%',
        bottom: 0,
        left: 0,
        right: 0,
    },
    title: {
        fontSize: 22,
        color: Colour.textcolor,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 20,
    },
    btn: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    saveBtnTxt: {
        color: Colour.textcolor,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: "bold"
    },
    child_1: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#CCCCCC",
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        height: 50,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 15,
        position: 'absolute',
        top: 70,
        bottom: 0,
        left: 0,
        right: 0,

    },
    input: {
        flex: 1,
        height: 50,
        padding: 10,
        fontSize: 12,
        color: "#000000"
    },
    tripView: {
        position: 'absolute',
        top: 100,
        marginHorizontal: 30,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

export default styles