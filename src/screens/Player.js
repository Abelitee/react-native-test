import React from "react";
import { SafeAreaView, View, Image, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Icon,
  Button,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import Constants from "expo-constants";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  TopNav,
  MusicArt,
  IconCase,
  SliderControl,
  MusicName,
  PlaybackControls,
  BaseIcons,
} from "../components/Player";

export const Player = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [reff, setReff] = React.useState(null);
  return (
    <SafeAreaView
      style={{
        marginTop: Constants.statusBarHeight,
        marginBottom: Constants.statusBarHeight,
      }}
    >
      <Layout
        style={{
          height: hp(100) - Constants.statusBarHeight,
          justifyContent: "space-between",
        }}
      >
        <TopNav navigation={navigation} />
        <MusicArt
          reff={reff}
          setReff={setReff}
          index={index}
          setIndex={setIndex}
        />
        <IconCase />
        <SliderControl />
        <MusicName index={index} />
        <PlaybackControls reff={reff} index={index} setIndex={setIndex} />
        <BaseIcons navigation={navigation} />
      </Layout>
    </SafeAreaView>
  );
};
