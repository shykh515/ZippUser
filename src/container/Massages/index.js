import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { massage1, massage2 } from '../../assets';
import { Header } from '../../component';
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Massage = props => {
    // const arr = [];

    const [message, setMessage] = useState();
    const [array, setArray] = useState([
        {
            id:1,
            msg: 'Hey, Mr. John Doe!',
            type: 'recever',
            time: '05:00 PM',
            image: massage1,
        },
        {
            id:2,
            msg: 'Where are you now?',
            type: 'recever',
            time: '05:02 PM',
            image: massage1,
        },
        {
            id:3,
            msg: 'Hey, Mr. Daniel Grave',
            type: 'send',
            time: '05:01 PM',
            image: massage2,
        },
        {
            id:4,
            msg: "I'm on my way, hope I willcome as soon as possible",
            type: 'send',
            time: '05:01 PM',
            image: massage2,
        },

        {
            id:5,
            msg: "Okay, no problem, I'm waiting for you.",
            type: 'recever',
            time: '05:01 PM',
            image: massage1,
        },
    ]);

    const renderItem = item => {
        const { msg, time, image, type  , id} = item.item;
        const data = array.filter((el)=> el.type === 'send' )
        const recData = array.filter((el)=> el.type === 'recever' )
        return (
            <View style={type == 'send' ? styles.send : styles.recever}>
                <View
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}>
                    {data[data.length - 1].id == id   &&
                    <Image
                        source={image}
                        style={{
                            width: 20,
                            marginLeft: type == 'send' ? 5 : -0,
                            marginRight: type == 'send' ? 0 : 5,
                            height: 20,
                        }}
                    />}
                    {recData[recData.length - 1].id == id   &&
                    <Image
                        source={image}
                        style={{
                            width: 20,
                            marginLeft: type == 'send' ? 5 : -0,
                            marginRight: type == 'send' ? 0 : 5,
                            height: 20,
                        }}
                    />}

                </View>
                <Text style={type == 'send' ? styles.sendMsg : styles.receveMsg}>
                    {msg}
                </Text>
                <View style={{ flex: 1 }}>
                    <Text style={type == 'send' ? styles.timeSend : styles.timeRecever}>
                        {time}
                    </Text>
                </View>
            </View>
        );
    };

    const sendMessage = () => {
        const msgArray = {
            msg: message,
            type: 'send',
            time: '05:01 PM',
            image: massage1,
        };
        array.push(msgArray);
        setMessage('');
    };

    return (
        <SafeAreaView style={styles.container1}>

            <Header
                LeftIcon={true}
                RightIcon={true}
                title=' Jhone Williams'
                rightIconPress={() => props.navigation.navigate('Notification')}
            />

            <View style={styles.MainView}>
                <FlatList
                    data={array}
                    // console.log("🚀 ~ file: index.js ~ line 111 ~ data", data)
                    renderItem={renderItem}
                    keyExtractor={renderItem.key}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Type something ..."
                        placeholderTextColor="#222222"
                        color="#000"
                        value={message}
                        onChangeText={e => setMessage(e)}
                    />
                    <TouchableOpacity onPress={() => sendMessage()}>
                        <Icon
                            name="sc-telegram"
                            type="evilicon"
                            color="#0091FF"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Massage;