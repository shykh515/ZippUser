import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create(({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#9D9D9D',
    borderBottomWidth: 1.5,
    paddingBottom: 10
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  nameView: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  name: {
    paddingBottom: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    width: 180
  },
  modal: {
    fontSize: 12,
    color: '#9D9D9D',
    fontWeight: '600',
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
    backgroundColor: '#F1F1F1',
    borderRadius: 100,
    paddingHorizontal: 5,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: -2
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
  },
  pickUpLocation: {
    color: "#222222",
    fontSize: 13,
    fontWeight: '600',
    paddingBottom: 20

  },
  dropOffLocation: {
    color: "#222222",
    fontSize: 14,
    fontWeight: '600'
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
  },
  coast: {
    fontSize: 11,
    color: '#9D9D9D',
    fontWeight: '600'
  },
  time: {
    fontSize: 11,
    color: '#9D9D9D',
    fontWeight: '600'
  },
  rate: {
    color: '#222222',
    fontSize: 11,
    fontWeight: '600',
    width: 45
  }
}))