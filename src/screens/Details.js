import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
} from "@ui-kitten/components";

import { ThemeContext } from "../theme/theme-context";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const handleLogout = () => {
    themeContext.removeData();
    navigation.replace("Login");
    // navigation.navigate("Player");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">DETAILS</Text>
        <Button onPress={handleLogout}>Log out</Button>
      </Layout>
    </SafeAreaView>
  );
};
