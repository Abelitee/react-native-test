import React, { useRef } from "react";
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

import Constants from "expo-constants";

import {
  ArtistSwiper,
  IconContainer,
  TopTracks,
  MusicVideo,
  ArtistSlider,
  ArtistAlbums,
  ArtistPlaylists,
  HotTracks,
} from "../components/Artist";

import { useFetch } from "../hooks/fetch";

export const ArtistScreen = ({ navigation }) => {
  const BackIcon = (props) => <Icon {...props} name="arrow-ios-back-outline" />;
  const EllipsisIcon = (props) => <Icon {...props} name="more-horizontal" />;
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

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("z", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2JhMzVlMTRlMWFiMTllNDk2N2Y0NCIsIm5hbWUiOiJzdHJpbmciLCJpYXQiOjE2MDg2MjUwNTgsImV4cCI6MTY1MTgyNTA1OH0.rcRSV5K0_BABNanmV_iiRtX-xcrjNMwh_QhfMAxS0sc",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const renderCount = useRef(0);
  // renderCount.current = renderCount.current + 1;

  // console.log(renderCount.current);

  // const [loading, fetchedData] = useFetch(
  //   "https://gmp-app.herokuapp.com/welcome",
  //   "GET",
  //   "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2JhMzVlMTRlMWFiMTllNDk2N2Y0NCIsIm5hbWUiOiJzdHJpbmciLCJpYXQiOjE2MDg3NTE4NDksImV4cCI6MTY1MTk1MTg0OX0.qHRn7Dnawbu0lgSv5dBY9HEg5wm97GCNuaSpRZDSy3M",
  //   []
  // );

  // const data = fetchedData ? fetchedData : [];

  // console.log(data);
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
      <Layout>
        <ScrollView
          showsVerticalScrollIndicator={false}
          //   stickyHeaderIndices={[0]}
        >
          <TopNavigation
            appearance="control"
            accessoryLeft={BackAction}
            accessoryRight={EllipsisAction}
          />
          <ArtistSwiper id={data} key={data} data={data} />
          <IconContainer />
          <TopTracks navigation={navigation} />
          <ArtistAlbums />
          <HotTracks />
          <MusicVideo />
          <ArtistSlider />
          <ArtistPlaylists />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
