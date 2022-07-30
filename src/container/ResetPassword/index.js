import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import Modal from "react-native-modal";
import LottieView from 'lottie-react-native';
import styles from './style';
import { Input, Button, AuthBackBtn } from '../../component';
import { email_icon, login_car } from '../../assets';
import { emailRegex, validate } from '../../util/validation';

let errors = {
    emailErr: 'Invalid email address.',
};

const ResetPassword = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [useremail, setUserEmail] = useState();
    const [emailError, setEmailError] = useState();

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


    const onSubmitReference = (value) => {
        if (value == 'onDone') {
        } else {
            value.current.focus()
        }
    }

    const OnSubmit = () => {
        if (!useremail) {
            setEmailError("Please Enter Your Email")
        }
        else if (!emailError) {
            setShowModal(true)
        }
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
                        style={{ width: '110%' }}
                    />
                </View>

                <View style={styles.loginView}>
                    <Text style={styles.logintitle}>Reset Password</Text>
                    <Text style={styles.loginsubtitle}>Enter your registered email and we'll send you a code to reset your password</Text>

                    <Input
                        icon={email_icon}
                        placaeholdertitle='E-mail'
                        ViewStyle={styles.ViewStyle}
                        returnKeyType='done'
                        onsubmitRef='onDone'
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                        value={useremail}
                        onChangeText={value => onChangeText(
                            value,
                            setUserEmail,
                            setEmailError,
                            emailRegex,
                            errors.emailErr)}
                        err={emailError}
                    />

                    <Button
                        title='Reset'
                        btnViewStyle={styles.btnViewStyle}
                        onPressButton={() => OnSubmit()}
                    />

                </View>
            </ScrollView>

            {/* MODAL VIEW */}
            <Modal isVisible={showModal} style={styles.modalStyle} >
                <View style={styles.modelcontiner}>
                    <View style={styles.ModalView}>
                        <Text style={styles.ModalTitle}>Password Reset Code has been Sent</Text>
                        <Text style={styles.ModalSubTitle}>Please check your registered email. Thank you for the understanding.</Text>
                    </View>
                    <Button onPressButton={() => props.navigation.navigate('VerifyCode')} title="Done" />
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default ResetPassword
