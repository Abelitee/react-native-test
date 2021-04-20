import React, { Profiler } from "react";
import {
  Layout,
  Text,
  Icon,
  Button,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import {
  Image,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";

const Arrow = (props) => <Icon name="arrow-ios-forward-outline" {...props} />;

export const SubScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  // REFRESH THE SCREEN
  const [refreshing, setRefreshing] = React.useState(false);
  const [gpuRender, setGpuRender] = React.useState(false);

  !gpuRender ? setGpuRender(true) : null;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <Layout>
        {/* PLAYLIST 4 */}
        <Text>we ARE HERE NOW</Text>
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    fontFamily: "ProximaBold",
  },
  nonBlurredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  plainTitle: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
