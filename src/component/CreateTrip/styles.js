import { StyleSheet ,Dimensions, PermissionsAndroid } from "react-native";

const {width} = Dimensions.get('screen')
export default StyleSheet.create({
    rbFirstContainer:{
        marginTop:30,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Txt:{
        color:"#ffffff",
        fontWeight:'bold',
        fontSize:18
    },
    pagination:{
        marginVertical:30,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    paginationActiveNumber:{
        height:30,
        width:30,
        color:"#000000",
        backgroundColor:'#ffffff',
        textAlign:'center',
        borderRadius:5,
        paddingTop:5

    },
    paginationNumber:{
        height:30,
        width:30,
        color:"#ffffff",
        backgroundColor:'#282A2D',
        textAlign:'center',
        borderRadius:5,
        paddingTop:5
    },
    paginationLine:{
        borderColor:"#ffffff",
        borderWidth:0.5,
        width:100
    },
    modal:{
        backgroundColor:"#fff" ,
        width:width * 1,
        height:220,
        position:"absolute",
        bottom:-20,
        borderTopLeftRadius:40,
        borderTopRightRadius:40

     },
     modalView:{
        justifyContent:'center',
        alignItems:'center'
     },
     modalTxt:{
        fontSize:25,
        // maxWidth:30,
        fontWeight:'bold',
        color:'#222222',
        marginTop:20,
        paddingHorizontal:20,
        textAlign:'center'
     },
     modalBtn:{
        width:150,
        backgroundColor:'#F7F7F9',
        margin:5,
        borderColor:'#000',
        borderWidth:0.5,
     },
     modalYesBtn:{
        width:150,
        backgroundColor:'#222222'
     },
     modalNoBtnTxt:{
        color:"#222222"
     }
})

