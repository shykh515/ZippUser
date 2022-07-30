import {Text, View } from 'react-native'
import React from 'react'
import  Modal  from 'react-native-modal'
import styles from './styles'
const ChildModal = (props) => {
    const {Children,modalView ,isVisible,setIsVisible,title,modalTitle} = props
  return (
        <Modal isVisible={isVisible} onBackdropPress={setIsVisible} style={[styles.modalView,modalView]}>
          <View style={styles.modalTxtView}>
            <Text style={[styles.modalTitle , modalTitle]}>{title}</Text>
          </View>
         <View>
          {Children}
        </View>
        </Modal>
  )
}

export default ChildModal;
