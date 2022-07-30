import { StyleSheet} from 'react-native'
import Colour from '../../theme/color';


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
        paddingBottom: 200,
        paddingTop: 20,
    },
    balanceView: {
        borderBottomWidth: 1,
        borderBottomColor: Colour.lightgraycolor,
        paddingBottom: 10,
        marginBottom: 20,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        marginBottom: 15
    },
    balancetitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Colour.textcolor
    },
    balancetitle1: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        color: Colour.textcolor
    },
    balancetotal: {
        fontSize: 37,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    donatetext: {
        color: Colour.BLuecolor,
        fontWeight: 'bold',
        marginTop: 20,
    },
    rewardsView: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    flatlisView: {
        borderBottomColor: Colour.lightgraycolor,
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginBottom: 10,
    },
    flatlisttitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colour.textcolor
    },
    flatlistchild1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flatlistchild2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flatlistdate: {
        fontSize: 11,
    },
    flatlisttime: {
        fontSize: 11,
        marginLeft: 10,
    },
    flatlistprise: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Colour.textcolor
    },
})

export default styles