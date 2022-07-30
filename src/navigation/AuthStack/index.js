import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Started,
  Login,
  SignUp,
  NewPassword,
  ResetPassword,
  VerifyCode
} from "../../container"


const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Started">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Started" component={Started} />
      <AuthStack.Screen name="VerifyCode" component={VerifyCode} />
      <AuthStack.Screen name="NewPassword" component={NewPassword} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
