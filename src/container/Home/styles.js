import { StyleSheet, Dimensions } from "react-native";
import Colour from "../../theme/color";

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colour.whitecolor
    },
    HeaderView: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    imageStyle: {
        height: 20,
        width: 20
    },
    ModalBookBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
    },
    ModalViewStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
    },
    ModalFooterBtn1: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        marginHorizontal: 30,
        paddingBottom: 30,
    },
    ModalMainView: {
        maxHeight: 90,
        width: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 5,
    },
    MoalTextPrise: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    ModalFlexBox: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    ModalpriseView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ModalPriseViewImage: {
        width: 17, height: 17
    },
    ModalPriseMainView: {
        marginVertical: 10,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    ModalStarMainView: {
        flexDirection: 'row',
        backgroundColor: Colour.lightwhite,
        borderRadius: 100,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModalUserTitile: {
        color: Colour.textcolor,
        fontSize: 16,
        fontWeight: 'bold',
        height: 30
    },
    ModalUserSubTitle: {
        color: Colour.lightgraycolor,
        fontSize: 13,
        fontWeight: 'bold',
        height: 30
    },
    rbsecondMeinView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    ModalStarTitle: {
        fontSize: 10,
        color: Colour.textcolor,
        fontWeight: 'bold',
    },
    ModalMainViewChild: {
        height: 50,
        backgroundColor: Colour.textcolor,
        width: 1,
        alignItems: 'center',
    },
    textstyle: {
        fontSize: 22,
        fontWeight: 'bold',
        maxWidth: 270,
        textAlign: 'center',
        color: Colour.textcolor
    },
    ModalView1: {
        flex: 1, flexDirection: 'row'
    },
    PaymentModalText: {
        fontSize: 14, color: Colour.lightgraycolor,
    },
    hometitle: {
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    calinderimagestyle: {
        width: 40,
        height: 40
    },
    HeaderChild: {
        maxHeight: 90,
        width: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 5,
    },
    borderStyle: {
        height: 50,
        backgroundColor: Colour.textcolor,
        width: 1,
        alignItems: 'center',
    },
    mapViewStyle: {
        height: height * 0.8
    },
    background: {
        flex: 1,
        width: width * 1
    },
    BackbtnModal: {
        height: 55,
        width: 55,
        marginRight: 5
    },
    ModalBookBtn: {
        width: width * 0.70
    },
    container: {
        paddingHorizontal: 10,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    menuIcon: {
        height: 90,
        width: width * 0.2,
        marginLeft: -20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    locationIcon: {
        height: 90,
        width: width * 0.4,
        marginRight: -20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    selectRidetxt: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colour.subheadingcolor
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cardCarView: {
        height: 110,
        width: width * 0.27,
        backgroundColor: Colour.lightwhite,
        borderRadius: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        elevation: 1,
    },
    cardView: {
        height: 110,
        width: width * 0.27,
        backgroundColor: Colour.lightwhite,
        borderRadius: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        elevation: 1,
    },
    cardImage: {
        width: 75,
        height: 75,
        marginLeft: 20
    },
    cardTxt: {
        fontSize: 14,
        marginLeft: 15,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    locationView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: Colour.whitecolor,
        paddingHorizontal: 5
    },
    locationViewIcon: {
        height: 50,
        width: 50
    },
    locationViewTxt: {
        flex: 1,
        marginLeft: 15,
    },
    time: {
        fontSize: 14,
        color: Colour.subheadingcolor,
        paddingVertical: 2,
    },
    location: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colour.subheadingcolor

    },
    editViewIcon: {
        height: 20,
        width: 23
    },
    footer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        marginHorizontal: 5
    },
    btn: {
        width: 60,
        height: 30,
        borderRadius: 5
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    footerBtnView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        width: 250,
        alignItems: 'center',
    },
    footertxt: {
        color: '#222B45',
        fontSize: 15,
        width: 90,
        marginLeft: 15
    },
    footerIconView: {
        borderLeftColor: Colour.lightgraycolor,
        borderLeftWidth: 2,
        height: 25,
        width: 50
    },
    rbSheet: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    rbFirstContainer: {
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Txt: {
        color: Colour.whitecolor,
        fontWeight: 'bold',
        fontSize: 18
    },
    pagination: {
        marginVertical: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paginationActiveNumber: {
        height: 30,
        width: 30,
        color: "#000000",
        backgroundColor: Colour.whitecolor,
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 5

    },
    paginationNumber: {
        height: 30,
        width: 30,
        color: Colour.whitecolor,
        backgroundColor: '#282A2D',
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 5
    },
    paginationLine: {
        borderColor: Colour.whitecolor,
        borderWidth: 0.5,
        width: 100
    },
    rbSecondContainer: {
        marginTop: 20,
        backgroundColor: Colour.whitecolor,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        flex: 1,
        height: 450,
    },
    rbSecondContainer1: {
        marginTop: 20,
        backgroundColor: Colour.whitecolor,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
    },
    trip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    triptxt: {
        color: Colour.textcolor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    tripEdit: {
        color: Colour.BLuecolor,
        fontSize: 14,
        fontWeight: 'bold'
    },
    pickUp: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
    },
    pickUpTime: {
        color: Colour.lightgraycolor,
        fontSize: 10,
    },
    pickUpTxt: {
        color: Colour.lightgraycolor,
        fontWeight: 'bold'
    },
    pickUpLocation: {
        color: Colour.textcolor,
        fontSize: 14,
        fontWeight: 'bold'
    },
    pickDropSeprator: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pickDropSepratorLine: {
        borderColor: Colour.bordercolor,
        borderWidth: 0.4,
        width: width * 0.73
    },
    pickDropSepratorLineTwo: {
        borderColor: Colour.bordercolor,
        borderWidth: 0.4,
        width: width * 0.80,
        marginTop: 10
    },
    ride: {
        marginTop: 20,
        flexDirection: 'row',
    },
    Schedule: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boatride: {
        flexDirection: 'row',
    },
    rideTxt: {
        color: Colour.textcolor,
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    shareset: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    shareSetsTxt: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    shareSetsBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shareBtn: {
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: "#DDDDDD"
    },
    shareBtnTxt: {
        color: Colour.textcolor
    },
    shareBtnAvtive: {
        width: 40,
        height: 40,
        margin: 5,
        backgroundColor: Colour.textcolor
    },
    shareBtnTxtAvtive: {
        color: '#DDDDDD'
    }, modal: {
        backgroundColor: Colour.whitecolor,
        width: width * 1,
        position: "absolute",
        bottom: -20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,

    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colour.textcolor,
        marginTop: 20,
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    modalBtn: {
        width: 150,
        backgroundColor: Colour.lightwhite,
        margin: 5,
        borderColor: '#000',
        borderWidth: 0.5,
    },
    modalYesBtn: {
        width: 150,
        backgroundColor: Colour.textcolor
    },
    modalNoBtnTxt: {
        color: Colour.textcolor
    },
    paymentCard: {
        backgroundColor: Colour.lightwhite,
        borderRadius: 15,
        width: width * 0.9,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        paddingVertical: 5,
    },
    paypalImage: {
        width: 70,
        height: 70
    },
    paymentCardTxtView: {
        flex: 1,
        marginLeft: 10
    },
    paymentCardTxt: {
        fontSize: 18,
        color: Colour.textcolor,
        fontWeight: 'bold',
    },
    paymentIcon: {
        backgroundColor: Colour.graywhitecolor,
        borderRadius: 100,
        height: 28,
        width: 28,
        padding: 2
    },
    paymentActiveIcon: {
        backgroundColor: Colour.BLuecolor,
        borderRadius: 100,
        height: 28,
        width: 28,
        padding: 2
    },
    rbforthContainer: {
        backgroundColor: Colour.graywhitecolor,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20
    },
    modalcontainer: {
        backgroundColor: Colour.whitecolor,
        height: 250,
        paddingHorizontal: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalcontainer2: {
        backgroundColor: Colour.whitecolor,
        height: 200,
        paddingHorizontal: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boatModalView: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    boatModal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    DepartureInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15
    },
    DepartureDateInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        width: 140,
        height: 50,
        backgroundColor: '#F4F4F6',
        marginTop: 20,
        paddingHorizontal: 30
    }
})

