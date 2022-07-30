import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,
  Profile,
  DebitCard,
  PaypalCard,
  Wallet,
  Donate,
  Notification,
  Help,
  Massage,
  CurrentLocation,
  MyTrips,
  MyTripsProfile,
} from '../../container';



const StackNavigator = createStackNavigator();
function AppStack({ navigation }) {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <StackNavigator.Screen name="Help" component={Help} />
      <StackNavigator.Screen name="MyTripsProfile" component={MyTripsProfile} />
      <StackNavigator.Screen name="MyTrips" component={MyTrips} />
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Massage" component={Massage} />
      <StackNavigator.Screen name="Profile" component={Profile} />
      <StackNavigator.Screen name="DebitCard" component={DebitCard} />
      <StackNavigator.Screen name="PaypalCard" component={PaypalCard} />
      <StackNavigator.Screen name="Wallet" component={Wallet} />
      <StackNavigator.Screen name="Donate" component={Donate} />
      <StackNavigator.Screen name="Notification" component={Notification} />
      <StackNavigator.Screen name="CurrentLocation" component={CurrentLocation} />
    </StackNavigator.Navigator>
  );
}

export default AppStack;
