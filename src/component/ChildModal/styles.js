import { StyleSheet } from "react-native";


export default StyleSheet.create({
    modalView:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        width:'100%',
        margin:0,
        padding:0,
    },
    modalTxtView:{
        justifyContent:'center',
        alignItems:'center',
    },
    modalTitle:{
        color:'#222222',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:20
        }
})