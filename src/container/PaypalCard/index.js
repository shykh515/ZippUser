import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './style';
import { RadioButton } from 'react-native-paper'
import { paypalcard } from '../../assets';
import { Header, Button } from '../../component';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const PaypalCard = (props) => {
    const [checked, setChecked] = React.useState();
    return (
        <SafeAreaView style={styles.container1}>
            <Header
                LeftIcon={true}
                title=' Paypal'
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.MainView}>
                    <View style={styles.flexBox}>
                        <Image source={paypalcard} resizeMode='stretch' style={styles.imageStyle} />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputtitle}>Card Holder Name</Text>
                        <TextInput
                            // placeholder='Name'
                            style={styles.inputstyle}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.inputtitle}>Card Number</Text>
                        <TextInput
                            keyboardType='numeric'
                            // placeholder='Number'l
                            style={styles.inputstyle}
                        />
                    </View>

                    <View style={styles.DateView}>
                        <View style={styles.DateView1}>
                            <View style={styles.inputView}>
                                <Text style={styles.inputtitle}>Expiry Date</Text>
                                <TextInput
                                    // placeholder='Number'
                                    keyboardType='numeric'
                                    style={styles.inputstyle}
                                />
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.inputView}>
                                <Text style={styles.inputtitle}>CVV</Text>
                                <TextInput
                                    // placeholder='Number'
                                    keyboardType='numeric'
                                    style={styles.inputstyle}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.radiobtnView}>
                        <RadioButton
                            color='#0091FF'
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={styles.radiobtntext}>
                            Save Your Card for Future Rides
                        </Text>
                    </View>

                    <View style={styles.BtnView}>
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={() => props.navigation.navigate('Profile')}>
                            <Icon name='arrow-back' type='ionicon' color='#222222' size={25} />
                        </TouchableOpacity>
                        <Button
                            title='PAY NOW'
                            btnViewStyle={styles.btnViewStyle}
                            onPressButton={() => props.navigation.navigate('Profile')}
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PaypalCard