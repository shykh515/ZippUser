import { Platform, Alert, ToastAndroid } from 'react-native';
import Toast from 'react-native-simple-toast';

class Util {
  isPlatformAndroid = () => Platform.OS === 'android';

  showToast(message) {
    if (this.isPlatformAndroid()) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }

  showYesNoMessage(title, message, onYes, onNo) {
    setTimeout(() => {
      Alert.alert(
        title,
        message,
        [
          {
            text: 'Yes',
            onPress: onYes,
          },
          {
            text: 'No',
            onPress: onNo,
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }, 150);
  }

  showCommonMessage(title, message, onOkPressed) {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Ok',
          onPress: onOkPressed,
        },
      ],
      { cancelable: false },
    );
  }

  showAlertWithDelay(title, message, delay = 0) {
    setTimeout(() => {
      Toast.showWithGravity(message || "Something Went wrong", Toast.LONG, Toast.TOP);
    }, delay);
  }
}

export default new Util();
