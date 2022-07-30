import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Locationcard, GoogleMap } from '../../component';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CurrentLocation = (props) => {
    const CardShow = props?.route?.params?.id
    const [currenLocation, setCurrenLocation] = useState({});
    const Navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container1}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <GoogleMap
                        mapViewStyle={{ height: 1000 }}
                        latitude={parseInt(currenLocation.latitude) || 24.8655195}
                        longitude={parseInt(currenLocation.longitude) || -12.02335}
                    />
                </View>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => Navigation.goBack()}>
                        <Icon name='chevron-back-sharp' type='ionicon' color='#222' size={25} />
                    </TouchableOpacity>

                    <Text style={styles.title}>Current Location</Text>

                    {!CardShow && <TouchableOpacity onPress={() => Navigation.navigate('Home')} style={styles.btn}>
                        <Text style={styles.saveBtnTxt}>SAVE</Text>
                    </TouchableOpacity>}
                </View>

                {!CardShow && <View style={styles.child_1} >
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#959595"
                        placeholder="Your Current Location"
                    />
                    <TouchableOpacity >
                        <Ionicons name="search" color={'#9D9D9D'} size={18} />
                    </TouchableOpacity>
                </View>}

                {CardShow && <View style={styles.tripView}>
                    <Locationcard
                        pickUpLocation='Neon Café, 23/A Park Avenue'
                        dropOffLocation='Rex House, 123 USA'
                    />
                </View>}

            </ScrollView>
        </SafeAreaView>
    )
}

export default CurrentLocation