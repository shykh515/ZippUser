import React, { useRef, useState, useEffect } from 'react';
import { Image, Text, View, ScrollView, SafeAreaView, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';

import styles from './style';

import { Input, Button, GoogleMap, AuthBackBtn } from '../../component';
import { email_icon, Lock_icon, user_icon, phone_icon, gander_icon, loaction_icon, signup_map } from '../../assets';


const SignUp = (props) => {
    const [passwordIcon, setPasswordIcon] = useState(true);
    const [passwordIcon1, setPasswordIcon1] = useState(true);
    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);

    const [currenLocation, setCurrenLocation] = useState({});

    const createRef = {
        userRef: useRef(null),
        emailRef: useRef(null),
        passwordRef: useRef(null),
        conpasswordRef: useRef(null),
        phoneRef: useRef(null),
        ganderRef: useRef(null),
        locationRef: useRef(null)
    }

    useEffect(() => {
        const requestLocationPermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                    'title': 'Location Access Required',
                    'message': 'This App needs to Access your location'
                }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    _getCurrentLocation();
                } else {
                    alert("Permission Denied");
                }
            } catch (err) {
                console.log("🚀 ~ file: index.js ~ line 45 ~ err", err)
            }
        }
        requestLocationPermission();
    }, [])

    const _getCurrentLocation = () => {
        Geolocation.getCurrentPosition(geo_success => {
            const { latitude, longitude } = geo_success.coords
            setCurrenLocation({ latitude, longitude })
        }, geo_error => {
            alert(geo_error)
        }, { enableHighAccuracy: false, timeout: 20000, maximumAge: 3600000 });
    }

    setTimeout(() => {
        _getCurrentLocation()
    }, 2000);

    const onSubmitReference = (value) => {
        if (value == 'onDone') {

        } else {
            value.current.focus()
        }
    }

    return (
        <SafeAreaView style={styles.MainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <AuthBackBtn />
                <View style={styles.loginView}>
                    <Text style={styles.logintitle}>Sign Up</Text>

                    <Input
                        icon={user_icon}
                        placaeholdertitle='Full Name'
                        reference={createRef.userRef}
                        returnKeyType='next'
                        onsubmitRef={createRef.emailRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                    />

                    <Input
                        icon={email_icon}
                        placaeholdertitle='Email'
                        reference={createRef.emailRef}
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
                        returnKeyType='next'
                        onsubmitRef={createRef.phoneRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                    />

                    <Input
                        icon={phone_icon}
                        keyboardType='numeric'
                        placaeholdertitle='Contact Number'
                        reference={createRef.phoneRef}
                        returnKeyType='next'
                        onsubmitRef={createRef.ganderRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                    />

                    <Input
                        icon={gander_icon}
                        placaeholdertitle='Gender'
                        reference={createRef.ganderRef}
                        returnKeyType='next'
                        onsubmitRef={createRef.locationRef}
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                    />

                    <Input
                        reference={createRef.locationRef}
                        returnKeyType='done'
                        onsubmitRef='onDone'
                        onsubmit={(onsubmitRef) => {
                            onSubmitReference(onsubmitRef)
                        }}
                        icon={loaction_icon}
                        placaeholdertitle='Location'
                    />

                    <View>
                        <GoogleMap
                            mapViewStyle={{ height: 150, marginVertical: 20 }}
                            latitude={parseInt(currenLocation.latitude) || 24.8655195}
                            longitude={parseInt(currenLocation.longitude) || -12.02335}
                        />
                    </View>

                    <View style={styles.chackboxarea}>
                        <View style={styles.checkBoxAndTextView}>
                            <Checkbox
                                uncheckedColor="#000000"
                                color="#0091FF"
                                status={checkBox1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckBox1(!checkBox1);
                                }}
                            />
                            <Text style={styles.checkboxText}>
                                I assure you that the above mentioned information is correct
                            </Text>
                        </View>
                        <View style={styles.checkBoxAndTextView}>
                            <Checkbox
                                uncheckedColor="#000000"
                                color="#0091FF"
                                status={checkBox2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckBox2(!checkBox2);
                                }}
                            />
                            <Text style={styles.checkboxText}>
                                Accept ‘Terms & Conditions’ of using the Application
                            </Text>
                        </View>
                    </View>

                    <Button
                        title='Sign Up'
                        btnViewStyle={styles.btnViewStyle}
                        onPressButton={() => props.navigation.navigate('VerifyCode', { id: 'register' })}
                    />

                    <View style={styles.footerView}>
                        <Text style={styles.accounttext}>Don't have already account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Text style={styles.signuptext}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp
