import React,{useRef ,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,ScrollView} from 'react-native';
import styles from './styles';
import {done,clock,backArrow} from '../../assets';
import { Button } from '../../component';
import { Icon } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from 'react-native-modal'
const Trip = (props) => {
    const {refRBSheet ,children ,paginationActiveNumber,paginationNumber,isVisible,setShoWModal,setColseModal} = props

    return (
        <RBSheet ref={refRBSheet} height={600} customStyles={{
            container: {
            backgroundColor:'#000000',
            borderTopRightRadius:40,
            borderTopLeftRadius:40,
            }
          }}>
        <View style={styles.rbFirstContainer}>
            <Text style={styles.Txt}>Create Trip</Text>
            <TouchableOpacity onPress={()=>refRBSheet.current.close()}>
            <Icon type='antdesign' name='close' size={20} color={'#ffffff'} />
            </TouchableOpacity>
        </View>
        
        <View style={styles.pagination}>
         <Text style={[styles.paginationActiveNumber , paginationActiveNumber ]}>1</Text>
         <View style={styles.paginationLine} />
         <Text style={[styles.paginationNumber , paginationNumber]}>2</Text>
         <View style={styles.paginationLine}  />
         <Text style={[styles.paginationNumber ,paginationNumber]}>3</Text>
        </View>
        <ScrollView>
        <View>{children}</View>
         <Modal isVisible={isVisible} style={{marginHorizontal:0}} >
          <View style={styles.modal}>
            <View style={styles.modalView}>
             <Text style={styles.modalTxt}>
                Wanna See the Available Shared Rides
             </Text>
             <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:20}}>
               <Button title="No" btnViewStyle={styles.modalBtn} btnTextStyle={styles.modalNoBtnTxt}  onPressButton={()=>{setShoWModal(false)}} />
               <Button title="Yes" btnViewStyle={styles.modalYesBtn} onPressButton={()=>{setShoWModal(false)
                                                                                         setColseModal(false)}} />
             </View>  
            </View>
         </View>

         </Modal>


        </ScrollView>
       
       
    </RBSheet>
    )
}

export default Trip;
