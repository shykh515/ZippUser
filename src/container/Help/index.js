import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Header } from '../../component';
import { HelpData } from '../../util/Data'

const Help = (props) => {

    const [value, setvalue] = useState();

    const ViewData = (val) => {
        return (
            <Text style={styles.subHeading}>{val.subtitle}</Text>
        )
    }

    const handlechange = (ind) => {
        if (ind === value) {
            setvalue('')
        }
        else {
            setvalue(ind)
        }
    }


    return (
        <SafeAreaView style={styles.container1}>
            <Header
                LeftIcon={true}
                RightIcon={true}
                title=' Help'
                rightIconPress={() => props.navigation.navigate('Notification')}
            />
            <View style={styles.MainView}>

                {HelpData.map((val, ind) => {
                    return (
                        <View style={{ marginBottom: 15 }}>
                            <TouchableOpacity onPress={() => handlechange(ind)} style={styles.Btn1}>
                                <Text style={styles.Heading}>{val.title}</Text>
                                <Icon name={value === ind ? 'down' : 'right'} type='antdesign' size={15} color='#9D9D9D' />
                            </TouchableOpacity>
                            {value === ind && <View>
                                {ViewData(val)}
                            </View>}
                        </View>
                    )
                })}

            </View>
        </SafeAreaView>
    )
}

export default Help