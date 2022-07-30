import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    SafeAreaView
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Header = props => {
    const {
        LeftIcon,
        RightIcon,
        rightIconPress,
        title,
        headerViewStyle,
        rightIconSource,
        titleStyle,
        RightIcon2,
        rightIconSource2,
        rightIconPress2,
        righticonsize,
    } = props;

    const Navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={[styles.headerView, headerViewStyle]}>
                {LeftIcon ? (
                    <TouchableOpacity onPress={() => Navigation.goBack()}>
                        <Icon name='chevron-back-sharp' type='ionicon' color='#fff' size={25} />
                    </TouchableOpacity>
                ) : (
                    <View style={{ height: 30, width: 50 }} />
                )}
                <Text style={[styles.title, titleStyle]}>{title}</Text>

                {RightIcon && (
                    <TouchableOpacity onPress={rightIconPress}>
                        <Icon name='bell' type='font-awesome' color='#fff' size={25} />
                    </TouchableOpacity>
                )}

            </View>
        </SafeAreaView>



    );
};

const styles = StyleSheet.create({
    headerView: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#222222'
    },
    title: {
        fontSize: 22,
        color: '#fff',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 20,
    },
});

export default Header;