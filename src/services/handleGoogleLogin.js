
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const RequestGoogleLogin = async (handleCreate) => {

  const configPayload = {
    scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
    webClientId: '832982939048-88c6tdirvucuq7v5f9ev9u515holnhq2.apps.googleusercontent.com',
    offlineAccess: true
  }
  GoogleSignin.configure(configPayload);

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    handleCreate("google", userInfo)
    // alert(JSON.stringify(userInfo))
    // this.setState({ userInfo });
  } catch (error) {
    console.log("🚀 ~ file: index.js ~ line 144 ~ handleGoogle ~ error", error)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already

    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }

}

export default RequestGoogleLogin
