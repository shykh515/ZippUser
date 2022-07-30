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
    Heading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    subHeading: {
        fontSize: 12,
        lineHeight: 18,
        color: Colour.textcolor,
        paddingRight: 15,
        marginTop: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        paddingVertical: 15,
    },
    Btn1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        paddingBottom: 10,
    },
})

export default styles