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
    FlatlistView: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#F7F7F9',
        borderRadius: 15,
        height: 80,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 2,
    },
    Heading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    subHeading: {
        fontSize: 10,
        color: Colour.lightgraycolor,
        paddingRight: 20,
        marginTop: 1,
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    FlatlistViewchild1: {
        backgroundColor: '#E9E9EC',
        padding: 5,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: Colour.bordercolor
    },
    title: {
        fontSize: 20,
        color: Colour.textcolor,
        fontWeight: '600',
        marginBottom: 20,
    }
})

export default styles