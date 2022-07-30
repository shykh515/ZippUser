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
        paddingVertical: 30,
        flex: 1,
    },
    Heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colour.textcolor,
    },
    pickUp: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomColor: Colour.bordercolor,
        borderBottomWidth: 1,

    },
    pickUp1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 10,
        borderBottomColor: Colour.bordercolor,
        borderBottomWidth: 1,
    },
    pickUpTxt: {
        color: Colour.lightgraycolor,
        fontWeight: 'bold',
    },
    pickUpTxt1: {
        color: Colour.lightgraycolor,
        fontWeight: 'bold',
        marginTop: 25,
    },
    pickUpTime: {
        color: Colour.lightgraycolor,
        fontWeight: 'bold',
        fontSize: 11
    },
    subHeading: {
        fontSize: 12,
        lineHeight: 18,
        color: Colour.textcolor,
        paddingRight: 15,
        marginTop: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colour.bordercolor,
        paddingVertical: 15,
    },
    Btn1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colour.bordercolor,
        paddingBottom: 10,
    },
    rateView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#F7F7F9',
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45,
        alignItems: 'center'
    },
    CardView: {
        marginTop: 20,
        paddingBottom: 10,
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    CardView1: {
        marginTop: 0,
        paddingBottom: 15,
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingRight: 20,
    },
    heading1: {
        fontWeight: 'bold',
        fontSize: 17,
        color: Colour.textcolor
    },
    subheading1: {
        fontSize: 10,
        marginTop: 5,
        color: Colour.lightgraycolor
    },
    image: {
        width: 70,
        height: 70,
    },
    child1: {
        marginLeft: -50,
    },
    otherpeople: {
        fontSize: 10,
        color: Colour.lightgraycolor,
    },
    otherpeople1: {
        fontSize: 11,
        color: Colour.lightgraycolor,
        marginLeft: 15,
        fontWeight: '600',
        lineHeight: 15,
        width: 250
    },
    clintimage: {
        height: 70,
        width: 180,
    },
    warningimage: {
        width: 50,
        height: 50
    },
    pickUpLocation: {
        fontWeight: 'bold',
        color: Colour.textcolor,
        marginTop: 2
    },
    TripView: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    TripView1: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    tripViewChild1: {
        maxHeight: 90,
        width: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 8,
    },
    TripChild2: {
        height: 46,
        backgroundColor: '#222222',
        width: 1,
        alignItems: 'center',
    },
    ImageTrip: {
        width: 20,
        height: 20
    },
    BtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    btnViewStyle: {
        flex: 1,
        backgroundColor: Colour.textcolor,
        width: width * 0.68,
        marginRight: 10
    },
    backBtn: {
        padding: 10,
        backgroundColor: Colour.lightwhite,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colour.lightgraycolor,
        width: 60,
    },
})

export default styles