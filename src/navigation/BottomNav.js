import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Layout,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";

import { BackHandler, Alert } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HomeScreen } from "../screens/Home";
import { DetailsScreen } from "../screens/Details";
import Track from "../../track";

const { Navigator, Screen } = createBottomTabNavigator();
const PersonIcon = (props) => (
  <Icon {...props} pack="ionic" name="person-outline" />
);
const Music = (props) => (
  <Icon {...props} pack="ionic" name="musical-notes-outline" />
);
const Heart = (props) => <Icon {...props} pack="ionic" name="heart-outline" />;
const Search = (props) => (
  <Icon {...props} pack="ionic" name="search-outline" />
);
const MicIcon = (props) => <Icon {...props} pack="ionic" name="mic-outline" />;

const BottomNav = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles);

  React.useEffect(() => {
    // const backAction = () => {
    //   Alert.alert("Hold on!", "Are you sure you want to go Exit?", [
    //     {
    //       text: "Cancel",
    //       onPress: () => null,
    //       style: "cancel",
    //     },
    //     { text: "YES", onPress: () => BackHandler.exitApp() },
    //   ]);
    //   return true;
    // };
    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   backAction
    // );
    // return () => backHandler.remove();
  }, []);

  return (
    <Layout>
      <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
        appearance="noIndicator"
        style={styles.butt}
      >
        <BottomNavigationTab icon={Music} title="Music" />
        <BottomNavigationTab icon={MicIcon} title="Shows" />
        <BottomNavigationTab icon={Heart} title="Favorites" />
        <BottomNavigationTab icon={Search} title="Search" />
        <BottomNavigationTab icon={PersonIcon} title="Profile" />
      </BottomNavigation>
    </Layout>
  );
};

export const BottNavigator = () => (
  <Navigator
    backBehavior="initialRoute"
    initialRouteName="Home"
    headerMode="none"
    tabBar={(props) => <BottomNav {...props} />}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    {/* <Screen name="Track" component={Track} /> */}
  </Navigator>
);

const themedStyles = StyleService.create({
  butt: {
    backgroundColor: "background-basic-color-3",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
});
