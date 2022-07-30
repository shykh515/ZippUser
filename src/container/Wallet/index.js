import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Header, SuccessModal } from '../../component';
import { wallet } from '../../util/Data'

const Wallet = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatlisView}>
                <Text style={styles.flatlisttitle}>{item.nam}</Text>
                <View style={styles.flatlistchild1}>
                    <View style={styles.flatlistchild2}>
                        <Text style={styles.flatlistdate}>{item.date}  |</Text>
                        <Text style={styles.flatlisttime}>{item.time}</Text>
                    </View>
                    <Text style={styles.flatlistprise}>{item.prise}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container1}>
            <Header
                title='Wallet'
                LeftIcon={true}
            />
            <View style={styles.MainView}>

                <View style={styles.balanceView}>
                    <Text style={styles.balancetitle}>Your Balance</Text>
                    <View style={styles.flexView}>
                        <Text style={styles.balancetotal}>$500</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Donate')}>
                            <Text style={styles.donatetext}>Donate</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.balanceView}>
                    <Text style={styles.balancetitle}>Rewards & Loyalty</Text>
                    <View style={styles.flexView}>
                        <View style={styles.rewardsView}>
                            <Text style={styles.balancetotal}>1920</Text>
                            <Text style={styles.balancetitle1}>Points</Text>
                        </View>
                        <TouchableOpacity onPress={()=> setIsVisible(true)} >
                            <Text style={styles.donatetext}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomView}>
                    <Text style={styles.balancetitle}>Transaction History</Text>
                </View>
                <FlatList data={wallet} renderItem={renderItem} />

            </View>

            <SuccessModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                icon={true}
                title='Points Redeemed in Your Wallet Balance'
            />

        </SafeAreaView>
    )
}

export default Wallet