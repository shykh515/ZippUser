import React, { useState } from 'react';
import styles from './style';
import { Button, AuthBackBtn } from '../../component';
import { login_car } from '../../assets'
import LottieView from 'lottie-react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { emailRegex, passwordRegex, validate } from '../../util/validation';

const VerifyCode = (props) => {
    const value = props?.route?.params?.id;

    const [verifycode, setverifyCode] = useState();
    const [codeErr, setCodeErr] = useState();

    const onsubmit = () => {
        if (!verifycode) {
            setCodeErr('invalid code')
        }
        else (
            props.navigation.navigate(value ? 'Login' : 'NewPassword')
        )
    }

    return (
        <SafeAreaView style={styles.MainView}>
            <AuthBackBtn />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerCar}>
                    <LottieView
                        resizeMode='contain'
                        source={login_car}
                        autoPlay
                        loop
                        style={{ width: '100%' }}
                    />
                </View>
                <View style={styles.loginView}>
                    <Text style={styles.logintitle}>OTP Code</Text>
                    <Text style={styles.loginsubtitle}>Please type the verification code sent at
                        <Text style={styles.phonenumber}>   +1234567898</Text></Text>

                    <View style={styles.otparea}>
                        <OTPInputView
                            style={styles.otp}
                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                setverifyCode(code)
                            })}
                        />
                    </View>

                    {codeErr && <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                        {codeErr ? <Text style={{ color: "red" }}>{codeErr}</Text> : <></>}
                    </View>}


                    <View style={styles.footerView}>
                        <Text style={styles.accounttext}>Did not receive yet ?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                            <Text style={styles.signuptext}>Resend</Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                        title='Submit'
                        btnViewStyle={styles.btnViewStyle}
                        onPressButton={() => onsubmit()}
                    />




                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default VerifyCode
