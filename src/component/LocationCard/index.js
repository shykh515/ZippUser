import React from "react";
import { View, Text, TouchableOpacity, Image, Acti } from "react-native";
import styles from './styles'
import { userImage, Ellipse, loactionView } from "../../assets"
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
const LocationCard = (props) => {
  const { cardContainer, cardHeader, cardImage, accept, showrate, imageSource, Name, location, rating, coast, Time, pickUpTime, dorpOffTime, pickUpLocation, dropOffLocation, onPressAccept } = props
  return (
    <View style={[styles.cardContainer, cardContainer]}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            maxHeight: 60,
            width: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 8,
          }}>
          <Image source={Ellipse} style={{ width: 20, height: 20 }} />
          <View
            style={{
              height: 35,
              backgroundColor: '#222222',
              width: 1,
              alignItems: 'center',
            }}
          />
          <Image source={Ellipse} style={{ width: 20, height: 20 }} />
        </View>

        <View style={{ flex: 1, paddingVertical: 3, }}>
          <View>
            <View style={styles.pickUp}>
              <Text style={styles.pickUpTxt}>Pickup</Text>
              <Image source={loactionView} style={{ width: 30, height: 30 }} />
            </View>
            <View>
              <Text style={styles.pickUpLocation}>
                {pickUpLocation}
              </Text>
            </View>
          </View>
          <View style={{ borderTopWidth: 1, borderColor: '#9D9D9D', paddingTop: 10, }}>
            <View style={styles.pickUp}>
              <Text style={styles.pickUpTxt}>Drop-off</Text>
            </View>
            <View>
              <Text style={styles.dropOffLocation}>
                {dropOffLocation}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


export default LocationCard;

