import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';

import styles from './styles';

import { Zipp, signup_car } from '../../assets';
import { Input, Button } from '../../component';

const Started = (props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerView}>
                <Image source={Zipp} resizeMode='cover' style={styles.HeaderImage} />
            </View>

            <Swiper showsButtons={false} style={styles.wrapper} activeDot={<View style={styles.activeDotStyle}></View>} paginationStyle={styles.paginationStyle}>
                <View style={styles.slide1}>
                    <Text style={styles.title}>Welcome to Zipp</Text>
                    <Text style={styles.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lore Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                    </Text>
                </View>

                <View style={styles.slide1}>
                    <Text style={styles.title}>Welcome to Zipp</Text>
                    <Text style={styles.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lore Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                    </Text>
                </View>

                <View style={styles.slide1}>
                    <Text style={styles.title}>Welcome to Zipp</Text>
                    <Text style={styles.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lore Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                    </Text>
                </View>
            </Swiper >

            <View style={styles.headerCar}>
                <LottieView
                    resizeMode='contain'
                    source={signup_car}
                    autoPlay
                    loop
                    style={{ width: '200%', }}
                />
            </View>

            <Button
                title='Start'
                onPressButton={() => props.navigation.navigate('Login')}
                btnViewStyle={styles.btnViewStyle}
            />

        </SafeAreaView >
    )
}

export default Started