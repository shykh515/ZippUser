import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    FlatList
} from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Header } from '../../component';
import { NotificationData } from '../../util/Data'

const Notification = (props) => {
    return (
        <SafeAreaView style={styles.container1}>
            <Header
                LeftIcon={true}
                title=' Notification'
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.MainView}>
                    <Text style={styles.title}>Today</Text>

                    <FlatList data={NotificationData}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.FlatlistView}>
                                    <View style={styles.flexView}>
                                        <View style={styles.FlatlistViewchild1}>
                                            <Icon
                                                name={item.iconNam}
                                                type='font-awesome'
                                                color='#000'
                                                size={13}
                                            />
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={styles.Heading}>{item.heading}</Text>
                                            <Text style={styles.subHeading}>{item.subHeading}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />

                    <Text style={styles.title}>Yesterday</Text>

                    <FlatList data={NotificationData}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.FlatlistView}>
                                    <View style={styles.flexView}>
                                        <View style={styles.FlatlistViewchild1}>
                                            <Icon
                                                name={item.iconNam}
                                                type='font-awesome'
                                                color='#000'
                                                size={13}
                                            />
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={styles.Heading}>{item.heading}</Text>
                                            <Text style={styles.subHeading}>{item.subHeading}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification