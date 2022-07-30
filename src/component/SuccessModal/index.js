import React from 'react';
import Modal from "react-native-modal";
import { Text, View } from 'react-native';
import { Button } from '../index'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import styles from './styles';

const SuccessModal = (props) => {
    const { title, isVisible, setIsVisible, button, icon, NoButtonOnPress, YesButtonOnPress } = props
    return (
        <Modal
            onBackdropPress={() => setIsVisible(false)}
            isVisible={isVisible} style={{ marginHorizontal: 0 }} >
            <View style={styles.modelcontiner}>
                <View style={styles.ModalView}>
                    {icon &&
                        <Icon
                            name='check-circle-fill'
                            type='octicon'
                            color='#0091FF'
                            size={70} />
                    }
                    <Text style={styles.ModalTitle}>
                        {title}
                    </Text>
                    {button &&
                        <View style={styles.ButtonView}>
                            <Button onPressButton={NoButtonOnPress} btnTextStyle={styles.btnTextStyle} btnViewStyle={styles.BtnView} title='No' />
                            <Button onPressButton={YesButtonOnPress} btnViewStyle={styles.yesbtn} title='Yes' />
                        </View>}
                </View>
            </View>
        </Modal>
    )
}

export default SuccessModal;