import { StyleSheet } from 'react-native';
import Colour from '../../theme/color';

const styles = StyleSheet.create({
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
    ButtonView: {
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnTextStyle: {
        color: '#222222'
    },
    BtnView: {
        width: 150,
        backgroundColor: '#F7F7F9',
        borderWidth: 1,
        borderColor: '#9D9D9D'
    },
    yesbtn: {
        width: 150
    }
})

export default styles

