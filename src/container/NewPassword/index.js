import React, { useState, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Input, Button, AuthBackBtn } from '../../component';
import { login_car, Lock_icon, code } from '../../assets';
import { phoneNumberRegex, passwordRegex, validate } from '../../util/validation';
import styles from './style';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

let errors = {
    passwordErr: 'Password Must Be 8 Digit.',
};


const NewPassword = (props) => {
    const [passwordIcon, setPasswordIcon] = useState(true);
    const [passwordIcon1, setPasswordIcon1] = useState(true);

    const [userpassword, setUserPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmuserpassword, setConfirmUserPassword] = useState();
    const [confirmuserpassworderr, setConfirmUserPasswordErr] = useState();
    const [samepasssword, setSamePassword] = useState();

    const createRef = {
        codeRef: useRef(null),
        passwordRef: useRef(null),
        conpasswordRef: useRef(null)
    }

    const onSubmitReference = (value) => {
        if (value == 'onDone') {

        } else {
            value.current.focus()
        }
    };

    const onChangeText = async (
        value,
        state,
        errorState,
        regex,
        errorMessage,
    ) => {
        let error = validate(value, regex, errorMessage);
        state(value);
        errorState(error);
    };

    const onSubmit = () => {
        if (!userpassword) {
            setPasswordError("invlid password")
        }
        else if (userpassword && confirmuserpassword) {
            if (userpassword === confirmuserpassword) {
                props.navigation.navigate('Login')
            }
            else (
                setSamePassword('Password are Not Same')
            )
        }
    };


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
                        style={{ width: '110%' }}
                    />
                </View>

                <View style={styles.loginView}>
                    <Text style={styles.logintitle}>New Password</Text>
                    <Input
                        icon={code}
                        keyboardType='numeric'
                        placaeholdertitle='Enter Code'
                        reference={createRef.codeRef}
                        returnKeyType='next'
                        onsubmitRef={createRef.passwordRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
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
                        returnKeyType='next'
                        onsubmitRef={createRef.conpasswordRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                        value={userpassword}
                        onChangeText={value => onChangeText(
                            value,
                            setUserPassword,
                            setPasswordError,
                            passwordRegex,
                            errors.passwordErr)}
                        err={passwordError}
                    />

                    <Input
                        placaeholdertitle='Confirm Password'
                        icon={Lock_icon}
                        inputEyeIcon={true}
                        showPassword={() => setPasswordIcon1(true)}
                        nonePassword={() => setPasswordIcon1(false)}
                        showPass={passwordIcon1}
                        secureTextEntry={passwordIcon1}
                        reference={createRef.conpasswordRef}
                        returnKeyType='done'
                        onsubmitRef='onDone'
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                        value={confirmuserpassword}
                        onChangeText={value => onChangeText(
                            value,
                            setConfirmUserPassword,
                            setConfirmUserPasswordErr,
                            passwordRegex,
                            errors.passwordErr)}
                        err={samepasssword}
                    />

                    <View style={styles.footerView}>
                        <Text style={styles.accounttext}>Did not receive yet ? </Text>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.signuptext}>Resend</Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                        title='Done'
                        btnViewStyle={styles.btnViewStyle}
                        onPressButton={() => onSubmit()}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default NewPassword