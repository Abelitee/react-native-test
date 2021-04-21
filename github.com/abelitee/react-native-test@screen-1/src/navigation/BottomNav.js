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

import { Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Subscriptions from "../screens/subscription";
import Card from "../screens/card";

const { Navigator, Screen } = createBottomTabNavigator();
const PersonIcon = (props) => (
  <Image source={require("../../assets/images/report.png")} />
);
const Music = (props) => (
  <Image source={require("../../assets/images/dashboard.png")} />
);
const Heart = (props) => (
  <Image source={require("../../assets/images/chat.png")} />
);
const Search = (props) => (
  <Image source={require("../../assets/images/hand.png")} />
);
const MicIcon = (props) => (
  <Image color="white" source={require("../../assets/images/users.png")} />
);

const BottomNav = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles);

  React.useEffect(() => {}, []);

  return (
    <Layout>
      <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
        appearance="noIndicator"
        style={styles.butt}
      >
        <BottomNavigationTab
          icon={Music}
          title={() => (
            <Text style={{ color: "white", fontFamily: "Proxima",fontSize: wp(3) }}>
              Overview
            </Text>
          )}
        />
        <BottomNavigationTab
          icon={MicIcon}
          title={() => (
            <Text style={{ color: "white", fontFamily: "Proxima",fontSize: wp(3) }}>
              Customers
            </Text>
          )}
        />
        <BottomNavigationTab
          icon={Heart}
          title={() => (
            <Text style={{ color: "white", fontFamily: "Proxima",fontSize: wp(3) }}>
              Campaign
            </Text>
          )}
        />
        <BottomNavigationTab
          icon={Search}
          title={() => (
            <Text style={{ color: "white", fontFamily: "Proxima", fontSize: wp(3) }}>
              Subscriptions
            </Text>
          )}
        />
        <BottomNavigationTab
          icon={PersonIcon}
          title={() => (
            <Text style={{ color: "white", fontFamily: "Proxima" ,fontSize: wp(3)}}>
              Reports
            </Text>
          )}
        />
      </BottomNavigation>
    </Layout>
  );
};

export const BottNavigator = () => (
  <Navigator
    backBehavior="initialRoute"
    initialRouteName="Subscriptions"
    headerMode="none"
    tabBar={(props) => <BottomNav {...props} />}
  >
    <Screen name="Card" component={Card} />
    <Screen name="Subscriptions" component={Subscriptions} /> 
    <Screen name="Cards" component={Card} /> 
    <Screen name="Subscription" component={Subscriptions} /> 
    <Screen name="Card@" component={Card} />
  </Navigator>
);

const themedStyles = StyleService.create({
  butt: {
    backgroundColor: "color-primary-500",
    paddingVertical: hp(2),
  },
});
