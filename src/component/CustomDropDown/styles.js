import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  textMain: {
    backgroundColor: 'transparent',
    width:'81%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    textAlign: 'center',
    color: '#000',
    fontWeight:'bold',
    fontSize: 12,
    paddingLeft: -10
  },
  errorMessageStyle: {
    fontSize: 10,
  },
});
