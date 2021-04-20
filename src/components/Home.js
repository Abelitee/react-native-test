import React from "react";
import {
  Layout,
  Text,
  Icon,
  Button,
  useStyleSheet,
  StyleService,
  Divider,
} from "@ui-kitten/components";

import {
  Playlist_1,
  Playlist_2,
  Playlist_3,
  Playlist_4,
  Category_1,
  TrackSlider,
} from "../components/General";

import { Image, View, StyleSheet, ScrollView, FlatList } from "react-native";
import CachedImage from "react-native-expo-cached-image";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../theme/theme-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { playlist } from "../test/test-playlist";
import { artist } from "../test/test-artist";
import { song } from "../test/test-song";

export const Module_1 = ({ data, navigation, gpuRender }) => {
  // console.log("rendering: Module_1");
  const styles = useStyleSheet(themedStyles);
  const themeContext = React.useContext(ThemeContext);

  const HandleNav = () => {
    navigation.navigate("Playlist");
  };

  const sliced = data.slice(0, 12);
  const keyExtractor = (item, index) => index.toString();

  const Response = React.memo(
    ({ item }) => {
      return <Playlist_1 data={item} gpuRender={gpuRender} />;
    },
    (prev, next) => {
      return prev !== next;
    }
  );

  return (
    <Layout style={{ marginBottom: 10 }}>
      <View style={styles.plainTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Recommended Release {""}
          {themeContext.userInfo.name}
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
          onPress={HandleNav}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((res, index) => {
          return (
            <Playlist_1
              id={index}
              key={index}
              data={res}
              gpuRender={gpuRender}
            />
          );
        })}
      </ScrollView>

      {/* <FlatList
        data={sliced}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Response item={item} />}
        initialNumToRender={12}
        keyExtractor={keyExtractor}
      /> */}
    </Layout>
  );
};

export const Module_2 = ({ data }) => {
  // console.log("rendering: Module_2");
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={{ width: wp(42.3), height: wp(42.3), marginLeft: wp(3.6) }}>
      <View style={styles.imgCase2}>
        <Image
          source={{ uri: data.Image }}
          style={styles.plainImg2}
          resizeMethod="resize"
        />
        <View
          style={{
            bottom: wp(42.3),
            backgroundColor: "rgba(0, 0, 0, 0.02)",
            height: wp(42.3),
            width: wp(42.3), //175 ios
            borderRadius: wp(3.6), //ios 15
          }}
        ></View>
      </View>

      {/* below the image */}
      <BlurView
        intensity={70}
        style={[StyleSheet.absoluteFill, styles.blurslate]}
      >
        <View style={{ marginLeft: wp(2.4) }}>
          <Text style={styles.plainSub2} category="p1" numberOfLines={1}>
            {data.name}
          </Text>
          <Text category="c1" numberOfLines={1}>
            {data.tracks.length}
          </Text>
        </View>
        <View style={styles.playcircle2}>
          <Icon
            style={{
              height: wp(2.4), //ios 10
              width: wp(2.4),
              marginHorizontal: wp(2.4),
              marginVertical: 8,
              color: "black",
            }}
            name="play"
            pack="fontawesome"
          />
        </View>
      </BlurView>
    </View>
  );
};

export const Module_3 = ({ data }) => {
  // console.log("rendering: Module_3");
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.case3}>
      <View style={styles.imgCase3}>
        <Image
          source={{ uri: data.Image }}
          style={styles.plainImg3}
          resizeMethod="resize"
        />
        <View
          style={{
            bottom: wp(42.3), //175 ios
            backgroundColor: "rgba(0, 0, 0, 0.02)",
            height: wp(42.3),
            width: wp(42.3),
            borderRadius: 5,
          }}
        ></View>
      </View>
      <View style={styles.playcircle3}>
        <Icon
          style={{
            height: wp(2.4), //ios 10
            width: wp(2.4), //ios 10
            marginHorizontal: wp(2.4), //ios 10
            marginVertical: 8,
            color: "black",
          }}
          name="play"
          pack="fontawesome"
        />
      </View>
      {/* below image */}
      <View style={{ marginHorizontal: wp(2.4) }}>
        <Text style={styles.plainSub3} category="h6" numberOfLines={2}>
          {data.name}
        </Text>
        <Text appearance="hint" category="p1" numberOfLines={5}>
          {data.description}
        </Text>
      </View>
    </View>
  );
};

export const Module_4 = () => {
  // console.log("rendering: Module_4");
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={{ marginBottom: 10 }}>
      <View style={styles.plainTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Made for you
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Playlist_4 />
      </ScrollView>
    </Layout>
  );
};

export const RecPlaylist = ({ data }) => {
  // console.log("rendering: RecPlaylist");
  const styles = useStyleSheet(themedStyles);
  const themeContext = React.useContext(ThemeContext);

  const sliced = data.slice(0, 4);
  return (
    <Layout style={{ marginBottom: 10 }}>
      <View style={styles.plainTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Recommended playlist
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
        {sliced.map((res, index) => {
          return <Playlist_1 id={index} key={index} data={res} />;
        })}
      </View>
      <Layout
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Button
          appearance="outline"
          style={{ width: 250, borderRadius: 50 }}
          onPress={themeContext.toggleTheme}
          // accessoryRight={Arrow}
        >
          View all
        </Button>
      </Layout>
    </Layout>
  );
};

export const PopRelease = ({ data }) => {
  // console.log("rendering: PopRelease");

  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={{ marginBottom: 10 }}>
      <View style={styles.plainTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Popular release
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((res, index) => {
          return <Playlist_1 id={index} key={index} data={res} />;
        })}
      </ScrollView>
    </Layout>
  );
};

export const PopPlaylist = ({ data }) => {
  // console.log("rendering: PopPlaylist");

  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={{ marginBottom: 10 }}>
      <View style={styles.plainTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Popular playlist
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {playlist.map((res, index) => {
          return <Playlist_3 id={index} key={index} data={res} />;
        })}
      </ScrollView>
    </Layout>
  );
};
// TRACKS
export const HotTracks = ({ data }) => {
  // console.log("rendering: HotTracks");

  const styles = useStyleSheet(themedStyles);

  return (
    <Layout>
      <View style={styles.slideTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Hot Tracks
        </Text>

        <Text>See All</Text>
      </View>

      <TrackSlider data={data} />
    </Layout>
  );
};

export const MostAlbums = ({ data }) => {
  // console.log("rendering: MostAlbums");
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={{ marginBottom: 10 }}>
      <View style={styles.plainTitle}>
        <Text category="h6" style={styles.mainTitle}>
          Most streamed albums
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((res, index) => {
          return <Playlist_1 id={index} key={index} data={res} />;
        })}
      </ScrollView>
    </Layout>
  );
};
// ARTIST SLIDER
export const ArtistSlider = () => {
  // console.log("rendering: ArtistSlider");
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout level="3">
      <View style={styles.slideTitle}>
        <Text category="h6" style={{ fontFamily: "ProximaBold" }}>
          Similar Artist
        </Text>

        <Text>See All</Text>
      </View>

      <ScrollView
        horizontal={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}
      >
        {artist.map((res, index) => {
          function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          const fans = numberWithCommas(res.fans);
          return (
            <Layout key={index} level="3" style={{ marginHorizontal: wp(2) }}>
              <View style={styles.simCase}>
                <Image
                  source={{ uri: res.Image }}
                  style={styles.simImg}
                  resizeMethod="resize"
                />
                <View style={styles.simShadow}></View>
              </View>

              <View
                style={{
                  width: wp(40),
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: wp(2.5),
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Proxima",
                    textTransform: "capitalize",
                  }}
                  numberOfLines={1}
                >
                  {res.name}
                </Text>
                <Text
                  appearance="hint"
                  style={{
                    fontSize: 11,
                    fontFamily: "Proxima",
                    marginTop: wp(0.7),
                  }}
                >
                  {fans} fans
                </Text>
              </View>
            </Layout>
          );
        })}
      </ScrollView>
    </Layout>
  );
};
//  CATEGORIES

export const ModuleMini_1 = ({ data }) => {
  // console.log("rendering: ModuleMini_1");

  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={{ marginBottom: 10 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((res, index) => {
          return <Category_1 id={index} key={index} data={res} />;
        })}
      </ScrollView>
    </Layout>
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
  butt: {
    backgroundColor: "color-basic-300",
    borderRadius: 20,
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
    height: wp(42.3),
    width: wp(42.3), //175 ios
    borderRadius: wp(1.9),
  },
  plainImg: {
    height: wp(42.3), // alos 175 ios
    width: wp(42.3), //175 ios
    borderRadius: wp(1.9),
  },
  icon: {
    height: 20,
    width: 20,
  },
  playcircle: {
    backgroundColor: "white",
    height: wp(6.5), //27 ios
    width: wp(6.5),
    left: wp(2.4), //ios 10
    bottom: wp(8.45),
    marginBottom: -wp(6),
    borderRadius: wp(12.1), //50 ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: wp(1.9),
  },
  plainSub: {
    marginVertical: wp(1.85),
    fontSize: 17,
    fontFamily: "Proxima",
  },

  // playlist 2
  imgCase2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    height: 175,
    width: 175,
    borderRadius: wp(3.6), // ios 15
  },
  plainImg2: {
    height: 175,
    width: 175,
    borderRadius: wp(3.6), //ios 15
  },
  blurslate: {
    borderRadius: wp(3.6), //ios 15
    top: 140,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  playcircle2: {
    backgroundColor: "white",
    height: wp(6.5), //27 ios
    width: wp(6.5),
    marginHorizontal: wp(2.4), //ios 10
    borderRadius: wp(12.1), //ios 50
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: 1,
  },
  plainSub2: {
    marginVertical: 2,
    textTransform: "capitalize",
  },
  // playlist 3
  case3: {
    width: wp(42.3),
    height: wp(85.75), //ios 355
    marginLeft: wp(3.6), //ios 15
    borderRadius: 5,
    backgroundColor: "background-basic-color-2",
    marginBottom: wp(2.4), //ios 10
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 1.7,
  },
  imgCase3: {
    height: wp(42.3),
    width: wp(42.3), //ios 175
    borderRadius: 5,
  },
  plainImg3: {
    height: wp(42.3),
    width: wp(42.3), //ios 175
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  playcircle3: {
    backgroundColor: "white",
    height: wp(6.5), //27 ios
    width: wp(6.5),
    left: wp(2.4),
    bottom: wp(3.6),
    borderRadius: wp(12.1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.0,
    elevation: 1.7,
  },
  plainSub3: {
    fontWeight: "800",
    marginBottom: wp(3),
    fontFamily: "ProximaBold",
  },

  // playlist 4
  imgCase4: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    height: wp(48.3),
    width: wp(48.3), //200 ios
    borderRadius: wp(1.9),
  },
  plainImg4: {
    height: wp(24.14), //100 ios
    width: wp(24.14), //100 ios
    // borderRadius: wp(1.9),
  },
  playcircle4: {
    justifyContent: "center",
    backgroundColor: "white",
    height: wp(11), //27 ios
    width: wp(11),
    left: wp(18.1), //100 ios
    bottom: wp(29.1),
    marginBottom: -wp(10),
    borderRadius: wp(12.1), //50 ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: wp(1.9),
  },
  plainSub4: {
    marginVertical: wp(1.85),
    textTransform: "capitalize",
    fontFamily: "Sanfrancisco",
  },

  // Category 1
  imgCaseCat: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    height: wp(20.3),
    width: wp(42.3), //175 ios
    borderRadius: wp(1.9),
  },
  plainImgCat: {
    height: wp(20.3),
    width: wp(42.3), //175 ios
    borderRadius: wp(1.9),
  },
  plainSubCat: {
    fontFamily: "ProximaBold",
  },
  titlecaseCat: {
    borderRadius: wp(1.9),
    bottom: wp(20.3),
    marginBottom: -wp(18.3),
    height: wp(20.3),
    width: wp(42.3),
    justifyContent: "center",
    alignItems: "center",
  },

  //  SIMILAR ARTIST
  simCase: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    alignItems: "center",
  },
  simImg: {
    height: wp(40), // alos 200 ios
    width: wp(40), //200 ios
    borderRadius: wp(50.9),
  },
  simShadow: {
    bottom: wp(40),
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: wp(40),
    width: wp(40),
    borderRadius: wp(50.9),
    marginBottom: -wp(40),
  },

  // Track Slider
  slideTitle: {
    marginVertical: wp(2.8),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: wp(2.5),
  },
  trackCase: {
    marginHorizontal: wp(3.5),
    flexDirection: "row",
    marginVertical: wp(2.3),
    width: wp(86),
  },
  trackName: {
    width: wp(56),
    justifyContent: "center",
    marginHorizontal: wp(3.4),
  },
  tracklistCase: {
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 1,
    height: wp(12.1), // ios 75
    width: wp(12.1), //ios 75
    borderRadius: wp(1.7),
    justifyContent: "center",
    alignItems: "center",
  },
  trackDivider: {
    backgroundColor: "color-basic-transparent-300",
    marginHorizontal: wp(3.5),
  },
});
