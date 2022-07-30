import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const AuthBackBtn = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.MainView}>
            <View style={styles.Child1}>
                <Icon name='chevron-back-sharp' type='ionicon' color='#222' size={20} />
            </View>
        </TouchableOpacity>
    )
}

export default AuthBackBtn

const styles = StyleSheet.create({
    MainView: {
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        flex: 1,
    },
    Child1: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 30,
        height: 30,
        marginTop: 20,
        marginLeft: 20,
        borderColor: '#222',
        borderWidth: 1,


    },
})