import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Profile01,
    paypal,
    rewards,
    debitCard
} from '../../assets';
import styles from './style';
import { Switch } from 'react-native-paper'
import { Header } from '../../component';
import Modal from "react-native-modal";
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { launchImageLibrary } from 'react-native-image-picker';

const Profile = (props) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [picture, setPicture] = useState();

    const pickImage = async () => {
        try {
            // let granted;
            // granted = await PermissionsAndroid.request(
            //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            //   {
            //     title: 'Allow Disaster ALert Appto aceces  media permission',
            //     buttonNegative: 'Cancel',
            //     buttonPositive: 'OK',
            //   },
            // );

            let options = {};
            launchImageLibrary(options, response => {
                if (response.didCancel) {
                } else if (response.error) {
                } else if (response.customButton) {
                    alert(response.customButton);
                } else {
                    setPicture({
                        uri: response?.assets?.[0]?.uri,
                        type: response?.assets?.[0]?.type,
                        name: response?.assets?.[0]?.fileName,
                    });
                }
            });
        } catch (err) {
            console.warn(err);
        }
    };


    return (
        <SafeAreaView style={styles.container1}>
            <Header
                LeftIcon={true}
                title='Profile'
            />

            <View style={styles.MainView}>
                <View style={styles.profileimgView}>
                    <Image
                        resizeMode='stretch'
                        source={picture ? picture : Profile01}
                        style={styles.profileimage}
                    />
                    <TouchableOpacity onPress={() => pickImage()} style={styles.editBtn}>
                        <Icon
                            name='edit'
                            type='feather'
                            color='#222222'
                            size={13}
                        />
                    </TouchableOpacity>
                    <Text style={styles.userName}>John</Text>
                    <TouchableOpacity>
                            <Text style={styles.editprofile}>Edit Profile</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.MoreView}>
                    <Text style={styles.heading}>Saved Places</Text>
                </View>

                <TouchableOpacity style={styles.flexView}>
                    <Icon
                        name='home'
                        type='font-awesome'
                        color='#9D9D9D'
                        size={23}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate('CurrentLocation')} style={styles.View1}>
                        <Text style={styles.title}>Home</Text>
                        <Icon
                            name='chevron-thin-right'
                            type='entypo'
                            color='#9D9D9D'
                            size={15}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>

                <TouchableOpacity style={styles.flexView}>
                    <Icon
                        name='building'
                        type='font-awesome'
                        color='#9D9D9D'
                        size={23}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate('CurrentLocation')} style={styles.View1}>
                        <Text style={styles.title}>Work</Text>
                        <Icon
                            name='chevron-thin-right'
                            type='entypo'
                            color='#9D9D9D'
                            size={15}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>

                <View style={styles.MoreView}>
                    <Text style={styles.heading}>Setting</Text>
                </View>

                <View style={styles.SettingView}>
                    <View style={styles.flexView}>
                        <Text style={styles.title}>Notifications</Text>
                    </View>
                    <View>
                        <Switch
                            color='#0091FF'
                            value={isSwitchOn}
                            onValueChange={onToggleSwitch}
                        />
                    </View>

                </View>

                <TouchableOpacity onPress={() => setShowModal(true)} style={styles.SettingView}>
                    <View style={styles.flexView}>
                        <Text style={styles.title}>Payment Method</Text>
                    </View>
                    <View>
                        <Icon
                            name='chevron-thin-right'
                            type='entypo'
                            color='#9D9D9D'
                            size={15}
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.bottomView}>
                    <Text style={styles.subheading}>Contact:</Text>
                    <Text style={styles.userdetails}>+91 23 456 789 10</Text>
                </View>

                <View style={styles.bottomView}>
                    <Text style={styles.subheading}>Email:</Text>
                    <Text style={styles.userdetails}>john@email.com</Text>
                </View>

            </View>

            {/* MODAL VIEW */}
            <Modal onBackdropPress={() => setShowModal(false)}
                isVisible={showModal} style={{ marginHorizontal: 0 }} >
                <View style={styles.modelcontiner}>
                    <View style={styles.ModalView}>
                        <Text style={styles.ModalTitle}>Select Payment Method</Text>
                        <View style={styles.ModalFixView}>

                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('DebitCard')}
                                style={styles.pamentCardView}>
                                <Image source={debitCard} style={styles.paymentIcon} />
                                <Text style={styles.paymenttext}>Debit/Credit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('PaypalCard')}
                                style={styles.pamentCardView}>
                                <Image source={paypal} style={styles.paymentIcon} />
                                <Text style={styles.paymenttext}>Paypal</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Wallet')}
                                style={styles.pamentCardView}>
                                <Image source={rewards} style={styles.paymentIcon} />
                                <Text style={styles.paymenttext}>Rewards</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default Profile
