import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create(({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    // height:200
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center',
    // marginTop:10,
    paddingVertical: 10
  },
  cardImage: {
    width: width * 0.15,
    height: height * 0.08
  },
  nameView: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'

  },
  name: {
    paddingBottom: 0,
    fontSize: 17,
    // fontWeight:'bold',
    color: '#222222'
  },
  modal: {
    fontSize: 13,
    color: '#9D9D9D',
    // fontWeight:'bold',
  },
  rateView: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F9',
    borderRadius: 100,
    paddingHorizontal: 5,
    width: 60,
    alignItems: 'center'
  },
  showRateView: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F9',
    borderRadius: 100,
    paddingHorizontal: 5,
    width: 60,
    alignItems: 'center',
    marginTop: 10
  },
  acceptTxt: {
    color: '#0091FF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  pickUp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 20,
  },
  pickUpTxt: {
    color: '#9D9D9D',
    fontWeight: 'bold',
    flex: 1,
  },
  pickUpTime: {
    color: '#9D9D9D',
    fontWeight: 'bold',
    fontSize: 11
    // flex:1
  },
  pickUpLocation: {
    color: "#222222",
    fontSize: 14,
    marginTop: -10,
    paddingBottom: 10

  },
  dropOffLocation: {
    color: "#222222",
    fontSize: 14,
    // fontWeight:'bold'
    //  paddingBottom:23

  },
  pickDropSeprator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pickDropSepratorLine: {
    borderColor: "#000",
    borderWidth: 0.5,
    width: width * 0.72
  },
  timeCoast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor:'red'
  },
  coast: {
    // backgroundColor:'green',
    fontSize: 12,
    color: '#9D9D9D'
  },
  time: {
    // backgroundColor:'green',
    fontSize: 12,
    color: '#9D9D9D'
  },
  rate: {
    color: '#222222',
    fontSize: 12,
    // fontWeight:'bold'
  }
}))