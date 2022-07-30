import { StyleSheet, Dimensions } from 'react-native'
import Colour from '../../theme/color';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: Colour.textcolor,
    },
    MainView: {
        backgroundColor: '#E9E9EC',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1,
    },
    flexView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#F7F7F9',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    btn: {
        width: width * 0.25,
        padding: 10,
        borderRadius: 10,
    },
    btntext: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '600'
    },
})

export default styles