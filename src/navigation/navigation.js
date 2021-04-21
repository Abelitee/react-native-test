import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { BottNavigator } from "../navigation/BottomNav";
import { ThemeContext } from "../theme/theme-context";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  const themeContext = React.useContext(ThemeContext);

  const rootRoute = "Butt";

  const test = rootRoute;
  // console.log(themeContext.success);
  // console.log(themeContext.userInfo);

  return (
    <Navigator headerMode="none" initialRouteName={rootRoute}>
      <Screen name="Butt" component={BottNavigator} />
    </Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
