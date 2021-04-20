import React from "react";
import { SafeAreaView, View, Image, ScrollView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  TopSwipwer,
  IconContainer,
  MusicList,
  SameArtist,
} from "../components/Playlist";

const BackIcon = (props) => <Icon {...props} name="arrow-ios-back-outline" />;
const EllipsisIcon = (props) => <Icon {...props} name="more-horizontal" />;

export const PlaylistScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateButt = () => {
    navigation.navigate("Butt");
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateButt} />
  );

  const EllipsisAction = () => (
    <TopNavigationAction icon={EllipsisIcon} onPress={navigateButt} />
  );

  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView>
      <Layout>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          <TopNavigation
            appearance="control"
            accessoryLeft={BackAction}
            accessoryRight={EllipsisAction}
          />
          <TopSwipwer />
          <IconContainer navigation={navigation} />
          <MusicList />
          <SameArtist />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  // playlist swiper
  iconCase: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgCase: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    height: hp(30),
    alignItems: "center",
  },
  plainImg: {
    height: wp(48.3), // alos 200 ios
    width: wp(48.3), //200 ios
    borderRadius: wp(1.9),
  },
  //end
  wrapper: {
    height: hp(30),
    justifyContent: "center",
    alignItems: "center",
  },
  titleCase: {
    marginTop: 15,
    marginBottom: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    fontSize: 20,
  },
  sect: {
    marginHorizontal: 25,
    maxWidth: 150,
  },
  text: {
    height: wp(48.3),
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    backgroundColor: "color-primary-500",
  },
});
