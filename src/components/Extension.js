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

import { Artist_1, Track_1, Track_2, Playlist_1 } from "../components/General";
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { song } from "../test/test-song";
import { artist } from "../test/test-artist";

export const HeaderNav = ({ navigation }) => {
  const BackIcon = (props) => <Icon {...props} name="arrow-ios-back-outline" />;
  const EllipsisIcon = (props) => <Icon {...props} name="more-horizontal" />;
  const navigateButt = () => {
    navigation.navigate("Butt");
  };
  const navigatePlayer = () => {
    navigation.navigate("Player");
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigatePlayer} />
  );

  const EllipsisAction = () => (
    <TopNavigationAction icon={EllipsisIcon} onPress={navigateButt} />
  );
  return (
    <Layout>
      <TopNavigation
        appearance="control"
        title="Top Tracks"
        alignment="center"
        accessoryLeft={BackAction}
        accessoryRight={EllipsisAction}
      />
    </Layout>
  );
};

export const TrackExt_1 = () => {
  return (
    <Layout>
      <View>
        {song.map((res, index) => {
          const Ext = "Ext";
          return (
            <Track_1
              id={index + 1}
              key={index + 1}
              data={res}
              index={index}
              Ext={Ext}
            />
          );
        })}
      </View>
    </Layout>
  );
};

export const QueueList = () => {
  const [active, setActive] = React.useState(null);
  return (
    <Layout>
      <View>
        {song.map((res, index) => {
          return (
            <Track_2
              key={index}
              data={res}
              index={index}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </View>
    </Layout>
  );
};

export const PlaylistExt_1 = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout>
      <View style={styles.playExt1}>
        {song.map((res, index) => {
          return <Playlist_1 id={index + 1} key={index + 1} data={res} />;
        })}
      </View>
    </Layout>
  );
};

export const ArtistExt_1 = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout>
      <View style={styles.artExt1}>
        {artist.map((res, index) => {
          function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          const fans = numberWithCommas(res.fans);
          const Ext = "Ext";
          return <Artist_1 data={res} fans={fans} Ext={Ext} key={index + 1} />;
        })}
      </View>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  slideTitle: {
    marginVertical: wp(2.8),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: wp(2.5),
  },

  //   play extension 1
  playExt1: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  //   artist extension 1
  artExt1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
