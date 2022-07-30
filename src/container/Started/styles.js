import { StyleSheet } from "react-native";
import Colour from '../../theme/color';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colour.whitecolor,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    HeaderImage: {
        width: 180,
        height: 100,
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    activeDotStyle: {
        height: 7,
        width: 20,
        backgroundColor: '#0091FF',
        borderRadius: 100,
        marginRight: 8
    },
    paginationStyle: {
        marginRight: 220
    },
    title: {
        color: Colour.lightheadingcolor,
        fontSize: 30,
        fontWeight: 'bold'

    },
    subtitle: {
        fontSize: 12,
        width: "110%",
        marginVertical: 10,
        color: Colour.subheadingcolor,
        fontWeight: '500'
    },
    headerCar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 25
    },
    text: {
        color: Colour.whitecolor,
        fontSize: 30,
        fontWeight: 'bold'
    },
    btnViewStyle: {
        marginTop: -40,
        marginBottom: 30,
    },
})