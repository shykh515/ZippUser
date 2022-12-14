import { StyleSheet, Dimensions } from 'react-native';
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
        paddingHorizontal: 30,
        paddingTop: 30,
        flex: 1,
        paddingBottom: 100,
    },
    inputView: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        padding: 5,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 50,
        backgroundColor: Colour.whitecolor,
    },
    View1: {
        marginBottom: 20,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    View1child1: {
        padding: 20,
        backgroundColor: Colour.BLuecolor,
        borderRadius: 50,
    },
    text: {
        color: Colour.whitecolor,
        fontWeight: '600',
    },
    time: {
        fontSize: 10,
        color: Colour.lightgraycolor,
    },
    View2: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftCheat: {
        padding: 20,
        backgroundColor: Colour.BLuecolor,
        borderRadius: 30,
        borderBottomLeftRadius: 0,
    },
    userimage: {
        borderRadius: 50,
        width: 20,
        height: 20,
        marginLeft: -5,
        marginTop: -20,
    },
    flexView1: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexView2: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    massage: {
        color: Colour.textcolor,
        fontWeight: '600',
    },
    textView1: {
        padding: 20,
        backgroundColor: Colour.graywhitecolor,
        borderRadius: 50,
    },
    textView2: {
        padding: 20,
        backgroundColor: Colour.graywhitecolor,
        borderRadius: 50,
        borderBottomRightRadius: 0,
        marginHorizontal: 40,
    },
    userimage1: {
        borderRadius: 50,
        width: 20,
        height: 20,
        marginLeft: -35,
        marginTop: 60,
    },
    textView3: {
        width: 250,
        padding: 20,
        backgroundColor: Colour.BLuecolor,
        borderRadius: 30,
        borderBottomLeftRadius: 0,
    },
    send: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginVertical: 10,
    },
    recever: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    sendMsg: {
        maxWidth: 250,
        backgroundColor: Colour.graywhitecolor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        color: Colour.textcolor,
    },
    receveMsg: {
        maxWidth: 220,
        backgroundColor: Colour.BLuecolor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        color: Colour.whitecolor,
    },
    timeSend: {
        flex: 1,
        fontSize: 10,
        color: Colour.textcolor,
        marginTop: 30,
    },
    timeRecever: {
        flex: 1,
        textAlign: 'right',
        fontSize: 10,
        color: Colour.textcolor,
        marginTop: 30,
    },
});

export default styles;