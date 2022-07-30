import React, { useState } from "react";
import styles from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";

const Input = (props) => {
    const { icon,
        ViewStyle,
        inputEyeIcon,
        nonePassword,
        inputEyeIconStyle,
        showPassword,
        showPass,
        iconStyle,
        inputStyle,
        placaeholdertitle,
        secureTextEntry,
        maxLength,
        keyboardType,
        userRef,
        value,
        onChangeText,
        err,
        textContentType,
        reference,
        onsubmit,
        onsubmitRef,
        returnKeyType
    } = props;

    const [focus, setFous] = useState(false)

    return (
        <View>
            <View style={[styles.child_1, ViewStyle]}>
                <View style={styles.iconView}>
                    <Image resizeMode='contain' style={[styles.icon, iconStyle]} source={icon} />
                </View>

                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholderTextColor="#9D9D9D"
                    placeholder={placaeholdertitle}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    textContentType={textContentType}
                    ref={reference}
                    onSubmitEditing={() => {
                        onsubmit(onsubmitRef)
                    }}
                    returnKeyType={returnKeyType}
                />

                {inputEyeIcon ? (
                    <View>
                        {showPass ? (
                            <TouchableOpacity onPress={nonePassword}>
                                <Feather
                                    name="eye"
                                    style={[styles.inputEyeIconStyle, inputEyeIconStyle]}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={showPassword}>
                                <Feather
                                    name="eye-off"
                                    style={[styles.inputEyeIconStyle, inputEyeIconStyle]}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                ) : <></>}
            </View>

            {err ? <><Text style={{ color: err ? "red" : "", fontSize: 10, paddingLeft: 10 }}>{err}</Text></> : <></>}

        </View>
    )
}

export default Input;