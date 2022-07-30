import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Header, Card } from '../../component';
import { userImage } from '../../assets'

const MyTrips = (props) => {
    const [type, setType] = useState('upcoming');
    return (
        <SafeAreaView style={styles.container1}>
            <Header
                LeftIcon={true}
                RightIcon={true}
                title=' My Trips'
                rightIconPress={() => props.navigation.navigate('Notification')}
            />

            <View style={styles.MainView}>
                <View style={styles.flexView}>
                    <TouchableOpacity
                        onPress={() => setType('upcoming')}
                        style={[styles.btn, { backgroundColor: type === 'upcoming' ? '#0091FF' : '#F7F7F9' }]}
                    >
                        <Text style={[styles.btntext, { color: type === 'upcoming' ? '#F7F7F9' : '#9D9D9D' }]}>UPCOMING</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setType('complete')}
                        style={[styles.btn, { backgroundColor: type === 'complete' ? '#0091FF' : '#F7F7F9' }]}
                    >
                        <Text style={[styles.btntext, { color: type === 'complete' ? '#F7F7F9' : '#9D9D9D' }]}>COMPLETED</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setType('cancel')}
                        style={[styles.btn, { backgroundColor: type === 'cancel' ? '#0091FF' : '#F7F7F9' }]}
                    >
                        <Text style={[styles.btntext, { color: type === 'cancel' ? '#F7F7F9' : '#9D9D9D' }]}>CANCELED</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {type === 'upcoming' && <Card
                        Name='Jhone Williams'
                        rating='4.98'
                        pickUpTime='7:30'
                        dorpOffTime='9:00'
                        pickUpLocation='Neon Café, 23/A Park Avenue'
                        dropOffLocation='Rex House, 123 USA'
                        imageSource={userImage}
                        accept={true}
                        showrate={true}
                        cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                        location='Vehicle registration / Model /year'
                    />}

                    {type === 'complete' &&
                        <View>
                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />

                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />

                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />
                        </View>
                    }

                    {type === 'cancel' &&
                        <View>
                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />

                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />

                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />

                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />

                            <Card
                                Name='Jhone Williams'
                                coast="45:54"
                                Time="45:15"
                                rating='4.98'
                                pickUpTime='7:30'
                                dorpOffTime='9:00'
                                pickUpLocation='Neon Café, 23/A Park Avenue'
                                dropOffLocation='Rex House, 123 USA'
                                imageSource={userImage}
                                cardOnPress={() => props.navigation.navigate('MyTripsProfile')}
                                location='Vehicle registration / Model /year'
                            />
                        </View>
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default MyTrips