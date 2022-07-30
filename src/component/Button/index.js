import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
    const { onPressButton, btnViewStyle, btnTextStyle, title } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPressButton}>
            <View style={[styles.btnView, btnViewStyle]}>
                <Text style={[styles.btnText, btnTextStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button
