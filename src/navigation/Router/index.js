import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerGestureContext } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { AppStack, AuthStack, CustomDrawer } from '../index';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.2;

  return (
    <DrawerContentScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} {...props}>
      <CustomDrawer {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  const loginResponse = useSelector(state => state.authReducer.user);

  return (
    <Drawer.Navigator
      drawerContentContainerStyle={{ DrawerContentScrollView: false }}

      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEdgeWidth: 0,
        swipeEnabled: false,
        drawerStyle: {
          width: 300,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        screenOptions={{
          headerShown: false,
          swipeEnabled: false
        }}
        // options={{
        //   swipeEnabled: !!loginResponse,
        // }}
        name="Screen1"
        component={!loginResponse ? AuthStack : AppStack}
      />
    </Drawer.Navigator>
  );
}





const Router = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Router;