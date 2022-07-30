import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { userImage, star, clintimage, warning, Ellipse } from '../../assets'
import { Header, SuccessModal, Button } from '../../component';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const MyTripsProfile = (props) => {
    const [isVisible, setisVisible] = useState()

    return (
        <SafeAreaView style={styles.container1}>
            <Header
                LeftIcon={true}
                RightIcon={true}
                title='My Trips'
                rightIconPress={() => props.navigation.navigate('Notification')}
            />
            <View style={styles.MainView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.Heading}>Your Driver is Coming in 2:35</Text>

                    <View style={styles.CardView}>
                        <View>
                            <Image source={userImage} style={styles.image} />
                        </View>

                        <View style={styles.child1}>
                            <Text style={styles.heading1}>Jhone Williams</Text>
                            <Text style={styles.subheading1}>Vehicle registration / Model /year</Text>
                        </View>

                        <View>
                            <View style={styles.rateView}>
                                <Image source={star} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 12, color: "#000" }}>4.89</Text>
                            </View>
                        </View>
                    </View>


                    <Text style={styles.Heading}>Passengers</Text>

                    <View style={styles.CardView}>
                        <View>
                            <Image resizeMode='stretch' source={clintimage} style={styles.clintimage} />
                        </View>

                        <View>
                            <Text style={styles.otherpeople}>You and 2 other people</Text>
                        </View>
                    </View>

                    <View style={styles.CardView1}>
                        <Image resizeMode='stretch' source={warning} style={styles.warningimage} />
                        <Text style={styles.otherpeople1}>You have sharing your ride with others going your
                            way. Other passengers maybe added</Text>
                    </View>

                    <Text style={styles.Heading}>Trip</Text>

                    {/* <View style={styles.TripView}>
                        <View style={styles.tripViewChild1}>
                            <Image source={Ellipse} style={styles.ImageTrip} />
                            <View style={styles.TripChild2} />
                            <Image source={Ellipse} style={styles.ImageTrip} />
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.pickUp}>
                                <View>
                                    <Text style={styles.pickUpTxt}>Pickup</Text>
                                    <Text style={styles.pickUpLocation}>
                                        Neon Café, 23/A Park Avenue
                                    </Text>
                                </View>
                                <Text style={styles.pickUpTime}> 7:30 PM</Text>
                            </View>

                            <View>
                            </View>
                        </View>
                    </View> */}

                    <View style={styles.TripView1}>
                        <View style={styles.tripViewChild1}>
                            <Image source={Ellipse} style={styles.ImageTrip} />
                            <View style={styles.TripChild2} />
                            <Image source={Ellipse} style={styles.ImageTrip} />
                            <View style={styles.TripChild2} />
                            <Image source={Ellipse} style={styles.ImageTrip} />
                            <View style={styles.TripChild2} />
                            <Image source={Ellipse} style={styles.ImageTrip} />
                        </View>

                        <View style={{ flex: 1, }}>
                            <View style={styles.pickUp}>
                                <View>
                                    <Text style={styles.pickUpTxt}>Pickup</Text>
                                    <Text style={styles.pickUpLocation}>
                                        Neon Café, 23/A Park Avenue
                                    </Text>
                                </View>
                                <Text style={styles.pickUpTime}> 7:30 PM</Text>
                            </View>

                            <View style={styles.pickUp1}>
                                <View>
                                    <Text style={styles.pickUpTxt}>Picking</Text>
                                    <Text style={styles.pickUpLocation}>
                                        Loremipsum, 123 USA
                                    </Text>
                                </View>
                                <Text style={styles.pickUpTime}> 9:00 PM</Text>
                            </View>

                            <View style={styles.pickUp1}>
                                <View>
                                    <Text style={styles.pickUpTxt}>Drop-off</Text>
                                    <Text style={styles.pickUpLocation}>
                                        Loremipsum, 123 USA
                                    </Text>
                                </View>
                                <Text style={styles.pickUpTime}> 9:00 PM</Text>
                            </View>

                            <View style={styles.pickUp1}>
                                <View>
                                    <Text style={styles.pickUpTxt}>Drop-off</Text>
                                    <Text style={styles.pickUpLocation}>
                                        Rex House, 123 USA
                                    </Text>
                                </View>
                                <Text style={styles.pickUpTime}> 9:00 PM</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.BtnView}>
                        <Button
                            title='CANCEL'
                            btnViewStyle={styles.btnViewStyle}
                            onPressButton={() => setisVisible(true)}
                        />
                        <TouchableOpacity
                            onPress={() => setisVisible(true)}
                            style={styles.backBtn}>
                            <Icon
                                name='arrow-right'
                                type='octicon'
                                color='#222222'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <SuccessModal
                    isVisible={isVisible}
                    setIsVisible={setisVisible}
                    button={true}
                    YesButtonOnPress={() => props.navigation.navigate('Home')}
                    NoButtonOnPress={() => setisVisible(false)}
                    title='Do You Want to Cancel
                    the Booking'
                />

            </View>
        </SafeAreaView>
    )
}

export default MyTripsProfile