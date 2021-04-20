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
import {
  ToggleTheme,
  Module_1,
  Module_2,
  Module_3,
  Module_4,
  ModuleMini_1,
  RecPlaylist,
  PopPlaylist,
  HotTracks,
  PopRelease,
  MostAlbums,
} from "../components/Home";
import { useFocusEffect } from "@react-navigation/native";
import { AfterInteractions } from "react-native-interactions";

import { Playlist_1 } from "../components/General";
import Constants from "expo-constants";
import { playlist } from "../test/test-playlist";
import { artist } from "../test/test-artist";
import { song } from "../test/test-song";

const Arrow = (props) => <Icon name="arrow-ios-forward-outline" {...props} />;

export const HomeScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  // REFRESH THE SCREEN
  const [refreshing, setRefreshing] = React.useState(false);
  const [gpuRender, setGpuRender] = React.useState(false);

  !gpuRender ? setGpuRender(true) : null;

  // React.useEffect(() => {
  //   return () => {
  //     setGpuRender(false);
  //     console.log(gpuRender);
  //   };
  // }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () => {
  //       setGpuRender(false);
  //       console.log(gpuRender);
  //     };
  //   }, [])
  // );

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  // const navigateDetails = () => {
  //   navigation.navigate("Settings");
  // };

  function callback(id, phase, actualTime, baseTime, startTime, commitTime) {
    console.log(
      "id: " + id,
      "phase:" + phase,
      "actualTime:" + actualTime,
      "baseTime: " + baseTime,
      "diff:" + (commitTime - startTime)
    );
  }

  const songs = song.slice(0, 12);
  const playlists = playlist.slice(0, 12);
  const artists = artist.slice(0, 12);

  return (
    <AfterInteractions placeholder={<Text>loading...</Text>}>
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Layout>
            {/* PLAYLIST 4 */}
            <Module_4 gpuRender={gpuRender} />

            {/* PLAYLIST 1 */}
            <Module_1
              navigation={navigation}
              gpuRender={gpuRender}
              data={songs}
            />

            {/* HOT TRACKS */}
            <HotTracks data={songs} />

            {/* CATEGORY 1 */}
            <ModuleMini_1 data={artists} />

            {/* FOUR IN ONE */}
            <RecPlaylist data={playlists} />

            {/* PLAYLIST 1 AGAIN */}
            <PopRelease data={playlists} />

            {/* PLAYLIST 3 */}
            <PopPlaylist data={playlists} />

            {/* PLAYLIST 1 FINAL */}
            <MostAlbums data={playlists} />
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </AfterInteractions>
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
