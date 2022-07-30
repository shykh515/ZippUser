import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Header, Button, DropDownPicker, SuccessModal } from '../../component';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Donate = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [organization, setOrganization] = useState()

    return (
        <SafeAreaView style={styles.container1}>
            <Header
                title='Donate'
                LeftIcon={true}
            />
            <View style={styles.MainView}>

                <View style={styles.balanceView}>
                    <Text style={styles.balancetitle}>Your Balance</Text>
                    <View style={styles.flexView}>
                        <Text style={styles.balancetotal}>$500</Text>
                    </View>
                </View>

                <DropDownPicker
                    type="Select Organization"
                    selectedValue={organization}
                    setSelectedValue={setOrganization}
                />

                <View style={styles.bottomView}>
                    <Text style={styles.inputtitle}>Add Amount</Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.inputstyle}
                    />
                </View>


                <View style={styles.BtnView}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Home')}
                        style={styles.backBtn}>
                        <Icon
                            name='arrow-back'
                            type='ionicon'
                            color='#222222'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Button
                        title='TRANSFER'
                        btnViewStyle={styles.btnViewStyle}
                        onPressButton={() => setIsVisible(true)}
                    />
                </View>

            </View>

            <SuccessModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                icon={true}
                title='Your Payment has been Transferred'
            />

        </SafeAreaView>
    )
}

export default Donate