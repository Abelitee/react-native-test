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
  HeaderNav,
  PlaylistExt_1,
  ArtistExt_1,
  TrackExt_1,
  QueueList,
} from "../components/Extension";

import { useFetch } from "../hooks/fetch";
import { song } from "../test/test-song";

export const Extension = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight - wp(6) }}>
      <Layout>
        <ScrollView
          showsVerticalScrollIndicator={false}
          //   stickyHeaderIndices={[0]}
        >
          <HeaderNav navigation={navigation} />
          {/* <PlaylistExt_1 /> */}
          {/* <ArtistExt_1 /> */}
          {/* <TrackExt_1 /> */}
          {/* <QueueList /> */}
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
