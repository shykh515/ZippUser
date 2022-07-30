import React from "react";
import { View, Text, TouchableOpacity, Image, Acti } from "react-native";
import styles from './styles'
import { Ellipse, star } from "../../assets"
const Card = (props) => {
  const { cardContainer, cardHeader, cardImage, cardOnPress, accept, showrate, imageSource, Name, location, rating, coast, Time, pickUpTime, dorpOffTime, pickUpLocation, dropOffLocation, onPressAccept } = props
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={cardOnPress} style={[styles.cardContainer, cardContainer]}>
      <View style={[styles.cardHeader, cardHeader]}>
        <View>
          <Image resizeMode="cover" source={imageSource} style={[styles.cardImage, cardImage]} />
        </View>
        <View style={styles.nameView}>
          <Text numberOfLines={1} style={styles.name}>
            {Name}
          </Text>
          {accept ? <Text style={styles.modal}>
            {location}
          </Text> :
            <View style={styles.rateView}>
              <Image source={star} style={{ width: 10, height: 10 }} />
              <Text style={{ fontSize: 12, color: '#000' }}> {rating}</Text>
            </View>
          }
        </View>
        {accept ?
          <Text style={{ alignItems: 'center' }}>
            {showrate ?
              <View style={styles.showRateView}>
                <Image source={star} style={{ width: 10, height: 10 }} />
                <Text style={{ fontSize: 11, color: '#000', fontWeight: 'bold', }}> {rating}</Text>
              </View>
              :
              <TouchableOpacity onPress={onPressAccept} >
                <Text style={styles.acceptTxt}>
                  Accept
                </Text>
              </TouchableOpacity>
            }
          </Text> :
          <View style={styles.timeCoast}>
            <View style={{ marginRight: 10 }} >
              <Text style={styles.coast}>Final coast</Text>
              <Text numberOfLines={1} style={styles.rate}>${coast}</Text>
            </View>
            <View>
              <Text style={styles.time}>Avg time</Text>
              <Text numberOfLines={1} style={styles.rate}>{Time}m</Text>
            </View>
          </View>
        }
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            maxHeight: 30,
            width: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 8,
          }}>
          <Image source={Ellipse} style={{ width: 15, height: 15 }} />
          <View
            style={{
              height: 41,
              backgroundColor: '#222222',
              width: 1,
              alignItems: 'center',
            }}
          />
          <Image source={Ellipse} style={{ width: 15, height: 15 }} />
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.pickUp}>
            <Text style={styles.pickUpTxt}>Pickup</Text>
            <Text style={styles.pickUpTime}>{pickUpTime} PM</Text>
          </View>
          <View>
            <Text style={styles.pickUpLocation}>
              {pickUpLocation}
            </Text>
          </View>
          <View style={styles.pickUp}>
            <Text style={styles.pickUpTxt}>Drop-off</Text>
            <Text style={styles.pickUpTime}>{dorpOffTime} PM</Text>
          </View>
          <View>
            <Text style={styles.dropOffLocation}>
              {dropOffLocation}
            </Text>
          </View>
          {/* <View style={styles.pickDropSepratorLineTwo} /> */}
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default Card;

