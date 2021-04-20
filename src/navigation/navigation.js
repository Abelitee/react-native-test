import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { SettingsScreen } from "../screens/settings";
import { BottNavigator } from "../navigation/BottomNav";
import { PlaylistScreen } from "../screens/Playlist";
import { Player } from "../screens/Player";
import { ArtistScreen } from "../screens/Artist";
import { Extension } from "../screens/Extension";
import { LoginScreen } from "../screens/Login";
import { ThemeContext } from "../theme/theme-context";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  const themeContext = React.useContext(ThemeContext);

  const rootRoute = "Butt";

  const test = rootRoute;
  // console.log(themeContext.success);
  // console.log(themeContext.userInfo);

  return themeContext.success === null ? (
    <>
      <AppLoading />
    </>
  ) : (
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
