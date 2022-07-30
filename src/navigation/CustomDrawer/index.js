import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/actions/Authacion';
import {
    Profile01,
    DRcar,
    DRwallet,
    DRnotif,
    DRhistory,
    DRhelp
} from '../../assets';
import Colour from '../../theme/color';
import { useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager } from "react-native-fbsdk-next";


const CustomDrawer = props => {

    const loginresponce = useSelector(state => state?.authReducer?.user);

    const dispatch = useDispatch();

    const handlLogout = () => {
        props.navigation.closeDrawer();
        dispatch(removeUser());
        GoogleSignin.signOut();
        LoginManager.logOut();
    };

    return (
        <View style={styles.menuView}>
            <View style={styles.ImageView}>
                <Image source={Profile01} resizeMode='stretch' style={styles.userImage} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.userNam}>John</Text>
                    <Text style={styles.userEmail}>john@info.com</Text>
                </View>
            </View>

            <View style={styles.View2}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Wallet')} style={styles.btnView}>
                    <Image resizeMode='stretch' source={DRwallet} style={styles.image} />
                    <Text style={styles.imagetext}>wallet</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Notification')} style={styles.btnView}>
                    <Image resizeMode='stretch' source={DRnotif} style={styles.image} />
                    <Text style={styles.imagetext}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('MyTrips')} style={styles.btnView}>
                    <Image resizeMode='stretch' source={DRhistory} style={styles.image} />
                    <Text style={styles.imagetext}>Trip History</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.btnView}>
                    <Image resizeMode='stretch' source={DRcar} style={styles.image} />
                    <Text style={styles.imagetext}>Rental Services</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Help')} style={styles.btnView}>
                    <Image resizeMode='stretch' source={DRhelp} style={styles.image} />
                    <Text style={styles.imagetext}>Help</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlLogout()}>
                    <Text style={styles.signout}>Sign Out</Text>
                </TouchableOpacity>
            </View>


        </View >
    );
};

const styles = StyleSheet.create({
    menuView: {
        flex: 1,
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    ImageView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        flexDirection: 'row',
        backgroundColor: Colour.Drawercolor,
        height: 180
    },
    userNam: {
        color: Colour.textcolor,
        fontWeight: 'bold',
        fontSize: 22
    },
    userEmail: {
        color: Colour.textcolor,
        fontSize: 12
    },
    View2: {
        backgroundColor: Colour.textcolor,
        paddingTop: 50,
        height: 800,
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 65,
        paddingLeft: 20,
        paddingRight: 70,
    },
    image: {
        width: 35,
        height: 35,
    },
    imagetext: {
        color: Colour.whitecolor,
        fontSize: 15,
        marginLeft: 20,
    },
    signout: {
        color: Colour.whitecolor,
        marginLeft: 30,
        marginTop: 100,
        fontSize: 16
    },
});

export default CustomDrawer;
