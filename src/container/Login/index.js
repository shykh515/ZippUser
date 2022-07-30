import React, { useState, useRef, useEffect } from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {
    email_icon,
    Lock_icon,
    google_icon,
    fb_icon,
    twitter_icon,
    login_car
} from '../../assets';
import styles from './style';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions/Authacion';
import { Input, Button } from '../../component';
import { validate, emailRegex, passwordRegex } from "../../util/validation"

//Google Login
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//Facebook Login
import { LoginManager, Profile, AccessToken } from "react-native-fbsdk-next";

let errors = {
    emailErr: 'Invalid email address.',
    passErr: 'Invalid password address.',
};

const Login = (props) => {

    const [passwordIcon, setPasswordIcon] = useState(true);
    const [useremail, setUserEmail] = useState("")
    const [userpass, setUserPass] = useState("")
    const [errEmail, setErrEmail] = useState("")
    const dispatch = useDispatch();

    const createRef = {
        emailRef: useRef(null),
        passwordRef: useRef(null)
    }
    const onSubmitReference = (value) => {
        if (value == 'onDone') {
            onsubmit();

        } else {
            value.current.focus()
        }
    }

    const onsubmit = () => {
        if (!useremail) {
            setErrEmail("Email address is required.")
        } else if (userpass && !errEmail && userpass) {
            dispatch(
                updateUser({
                    email: useremail,
                    password: userpass,
                }),
            );
        }
    };

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '183108255240-tfq2le19occ8dtambucqjhgbc1mdkdcf.apps.googleusercontent.com',
        });
    }, [])

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            OnGoogleSubmit(userInfo)
            onsubmit();
        } catch (error) {
            console.log("🚀 ~ file: index.js ~ line 52 ~ onGoogleButtonPress ~ error", error)
        }
    }

    const OnGoogleSubmit = (data) => {
        dispatch(updateUser(data));
    }

    const onFBButtonPress = async () => {
        const result = await LoginManager.logInWithPermissions(['email', "public_profile"]);
        const data = await AccessToken.getCurrentAccessToken();
        const currentProfile = await Profile.getCurrentProfile();
        onFbSubmit(currentProfile)
    }

    const onFbSubmit = (data) => {
        dispatch(updateUser(data))
    }

    const ontextchange = (
        value,
        state,
        errorState,
        regex,
        errorMessage,) => {
        let err = validate(value, regex, errorMessage);
        errorState(err);
        state(value)

    }

    return (
        <SafeAreaView style={styles.MainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerCar}>
                    <LottieView
                        resizeMode='contain'
                        source={login_car}
                        autoPlay
                        loop
                        style={{ width: '110%' }}
                    />
                </View>

                <View style={styles.loginView}>
                    <Text style={styles.logintitle}>Login</Text>
                    <Text style={styles.loginsubtitle}>Please Login to continue.</Text>

                    <Input
                        icon={email_icon}
                        placaeholdertitle='E-mail'
                        reference={createRef.emailRef}
                        returnKeyType='next'
                        onsubmitRef={createRef.passwordRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                        value={useremail}
                        err={errEmail}
                        onChangeText={(val) => {
                            ontextchange(
                                val,
                                setUserEmail,
                                setErrEmail,
                                emailRegex,
                                errors.emailErr,
                            )
                        }}
                    />

                    <Input
                        placaeholdertitle='Password'
                        icon={Lock_icon}
                        inputEyeIcon={true}
                        showPassword={() => setPasswordIcon(true)}
                        nonePassword={() => setPasswordIcon(false)}
                        showPass={passwordIcon}
                        secureTextEntry={passwordIcon}
                        reference={createRef.passwordRef}
                        returnKeyType='done'
                        onsubmitRef='onDone'
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                    />

                    <View style={styles.forgetbtn}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('ResetPassword')}>
                            <Text style={styles.forgettext}>Forgot password ?</Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                        title='Login'
                        onPressButton={() => onsubmit()}
                        btnViewStyle={styles.btnViewStyle}
                    />

                    <Text style={styles.logintext}>or login with</Text>

                    <View style={styles.socailiconView}>
                        <TouchableOpacity onPress={() => onGoogleButtonPress()} style={styles.googleIconView}>
                            <Image source={google_icon} resizeMode='contain' style={styles.socialicon} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => onFBButtonPress()} style={styles.fbIconView}>
                            <Image source={fb_icon} resizeMode='contain' style={styles.socialicon} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.twitterIconView}>
                            <Image source={twitter_icon} resizeMode='contain' style={styles.socialicon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footerView}>
                        <Text style={styles.accounttext}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                            <Text style={styles.signuptext}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Login
