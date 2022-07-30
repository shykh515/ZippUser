import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const GoogleMap = (props) => {
    const { latitude, longitude, mapViewStyle } = props
    return (
        <View style={{ flex: 1 }}>
            <MapView
                maxZoomLevel={50}
                style={[styles.mapView, mapViewStyle]}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}
                />
            </MapView>
        </View>
    )
}

export default GoogleMap
