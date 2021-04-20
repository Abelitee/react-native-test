import React from "react";
import { SafeAreaView, View, Image, ScrollView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  Button,
  useStyleSheet,
  StyleService,
  useTheme,
  ViewPager,
} from "@ui-kitten/components";
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ThemeContext } from "../theme/theme-context";
import { Playlist_1, Track_1, TrackSlider } from "./General";
import { artist } from "../test/test-artist";
import { song } from "../test/test-song";
import { playlist } from "../test/test-playlist";

const videos = [
  "https://www.youtube.com/watch?v=tcYodQoapMg",
  "https://www.youtube.com/watch?v=B6_iQvaIjXw",
  "https://www.youtube.com/watch?v=QYh6mYIJG2Y",
  "https://www.youtube.com/watch?v=ffxKSjUwKdU",
  "https://www.youtube.com/watch?v=SXiSVQZLje8",
  "https://www.youtube.com/watch?v=gl1aHhXnN1k",
];

export const ArtistSwiper = ({ data }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout>
      <Swiper
        containerStyle={styles.wrapper}
        loop={false}
        paginationStyle={{
          bottom: 0,
        }}
        activeDotColor="#75AEFF"
        dotStyle={styles.dots}
        activeDotStyle={styles.dots}
        bounces={true}
      >
        <View style={styles.imgCase}>
          <Image
            source={require("../../assets/ariana.jpg")}
            style={styles.plainImg}
            resizeMethod="scale"
          />
          <View style={styles.imgShadow}></View>
        </View>

        {/* slide 2 */}
        <View style={styles.slide}>
          <View style={styles.sect}>
            <Text style={styles.title} category="s1" appearance="hint">
              {data.message}Fans
            </Text>
            <Text style={styles.subtitle}>20,521,948</Text>
          </View>

          <Divider style={styles.vertDivider} />

          <View style={styles.sect}>
            <Text style={styles.title} category="s1" appearance="hint">
              Most popular release
            </Text>
            <Text style={styles.subtitle}>Positions</Text>
          </View>
        </View>

        {/* slide 3 */}
        <View style={styles.slide2}>
          <Text numberOfLines={3} style={{ fontFamily: "Sofia" }}>
            Grammy winning, multi-platinium record artist and international
            superstar.
          </Text>
        </View>
      </Swiper>

      <View style={styles.titleCase}>
        <Text category="h5">Ariana Grande</Text>
      </View>
    </Layout>
  );
};

export const IconContainer = () => {
  const styles = useStyleSheet(themedStyles);
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  const [heart, setHeart] = React.useState("heart-outline");

  const toggleHeart = () => {
    const nextDot = heart === "heart-outline" ? "heart" : "heart-outline";
    setHeart(nextDot);
  };
  const playIcon = (props) => (
    <Icon
      {...props}
      name="play"
      pack="fontawesome"
      style={{
        height: wp(3.6), //ios 15
        width: wp(3.6),
        marginRight: wp(4.8), //ios 20
        color: "white",
      }}
    />
  );
  return (
    <Layout>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: wp(3.6), //ios 15
          marginBottom: wp(4.8),
          // bottom: -19,
        }}
      >
        <View style={styles.iconOutline}>
          <Icon
            name="arrow-redo-outline"
            pack="ionic"
            style={{
              height: wp(6),
              width: wp(6),
              color: theme["color-primary-500"],
            }} //ios 25
          />
        </View>

        <Button
          style={{
            borderRadius: wp(12.1), //ios 50
            height: wp(10.9), //ios 45
            width: wp(38.61), //ios 160
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}
          status="primary"
          accessoryLeft={playIcon}
          onPress={themeContext.toggleTheme}
        >
          PLAY
        </Button>
        {/* <Text>{themeContext.userInfo}</Text> */}
        <View style={styles.iconOutline}>
          <Icon
            name={heart}
            pack="ionic"
            style={{
              height: wp(6),
              width: wp(6),
              color: theme["color-primary-500"],
              marginTop: wp(0.6),
            }} //ios 25
            onPress={toggleHeart}
          />
        </View>
      </View>
    </Layout>
  );
};

export const TopTracks = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const sliced = song.slice(0, 3);
  const navigateExtension = () => {
    navigation.navigate("Extension");
  };

  return (
    <Layout level="3">
      <View style={styles.musicList}>
        <View style={{ marginVertical: 10 }}>
          <Text category="h5" style={{ marginHorizontal: wp(5) }}>
            Top Tracks
          </Text>
        </View>

        <View>
          {/*  MUSIC CASE */}
          {sliced.map((res, index) => {
            const Top = "Top";
            return (
              <Track_1
                id={res.id}
                key={res.id}
                data={res}
                index={index}
                Top={Top}
              />
            );
          })}
        </View>
        {/* button */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: wp(2),
          }}
        >
          <Button
            appearance="outline"
            style={{ width: wp(85), borderRadius: 50 }}
            status="basic"
            onPress={navigateExtension}
          >
            View all
          </Button>
        </View>
      </View>
    </Layout>
  );
};

export const MusicVideo = () => {
  const styles = useStyleSheet(themedStyles);

  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  return (
    <Layout level="3">
      <View style={styles.slideTitle}>
        <Text category="h6" style={{ fontFamily: "ProximaBold" }}>
          Music Videos
        </Text>

        <Text>See All</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: wp(2.8),
        }}
        horizontal={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled={true}
        decelerationRate={0.9}
        snapToInterval={wp(100) - wp(16)}
        // snapToAlignment={"center"}
      >
        {videos.map((res, index, arr) => {
          const lastIndex = arr.length - 1;
          const YtId = youtube_parser(res);
          return (
            <Layout
              key={index}
              style={{
                width: lastIndex === 0 ? wp(92) : wp(85),
                marginLeft: index === 0 ? wp(2.5) : wp(1),
                marginRight: index === lastIndex ? wp(3) : 0,
              }}
              level="3"
            >
              <Image
                source={{
                  uri:
                    "http://img.youtube.com/vi/" + YtId + "/maxresdefault.jpg",
                }}
                style={{
                  height: wp(50),
                  width: lastIndex === 0 ? wp(92) : wp(85),
                  borderRadius: wp(2),
                }}
                resizeMethod="resize"
              />

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "Proxima",
                  marginTop: wp(2),
                  fontSize: 12.9,
                }}
              >
                Positions
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "Proxima",
                  fontSize: 14,
                }}
                appearance="hint"
              >
                2020
              </Text>
            </Layout>
          );
        })}
      </ScrollView>
    </Layout>
  );
};

export const ArtistSlider = () => {
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

export const ArtistAlbums = () => {
  const styles = useStyleSheet(themedStyles);
  const sliced = song.slice(0, 8);
  return (
    <Layout level="3">
      <View style={styles.slideTitle}>
        <Text category="h6" style={{ fontFamily: "ProximaBold" }}>
          Artist Albums
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {sliced.map((res) => {
          return <Playlist_1 id={res.id} key={res.id} data={res} />;
        })}
      </ScrollView>
    </Layout>
  );
};

export const ArtistPlaylists = () => {
  const styles = useStyleSheet(themedStyles);
  const sliced = playlist.slice(0, 8);
  return (
    <Layout level="3">
      <View style={styles.slideTitle}>
        <Text category="h6" style={{ fontFamily: "ProximaBold" }}>
          Playlist
        </Text>
        <Icon
          style={{ height: 20, width: 20 }}
          fill="#8F9BB3"
          name="arrow-ios-forward-outline"
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {sliced.map((res, index) => {
          return <Playlist_1 id={index} key={index} data={res} />;
        })}
      </ScrollView>
    </Layout>
  );
};

export const HotTracks = () => {
  const styles = useStyleSheet(themedStyles);
  const sliced = song.slice(0, 8);
  const level = "3";
  return (
    <Layout level={level}>
      <View style={styles.slideTitle}>
        <Text category="h6" style={{ fontFamily: "ProximaBold" }}>
          Hot Tracks
        </Text>

        <Text>See All</Text>
      </View>
      <TrackSlider data={sliced} level={level} />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  //   Artist Swiper
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
    borderRadius: wp(50.9),
  },
  imgShadow: {
    bottom: wp(48.3),
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: wp(48.3),
    width: wp(48.3),
    borderRadius: wp(50.9),
  },
  dots: {
    height: 5,
    width: 5,
    borderRadius: wp(12.1),
  },
  wrapper: {
    height: wp(53.6),
    justifyContent: "center",
    alignItems: "center",
  },
  titleCase: {
    marginTop: wp(3.6),
    marginBottom: wp(8.7),
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slide2: {
    alignItems: "center",
    justifyContent: "center",
    height: wp(48.3),
    marginHorizontal: wp(5),
  },
  vertDivider: {
    height: wp(12.1),
    width: 2,
  },
  title: {
    fontSize: wp(3.6),
  },
  subtitle: {
    fontSize: wp(4.8), //ios 20
  },
  sect: {
    marginHorizontal: wp(6),
    maxWidth: wp(36.2),
  },
  // ICON CONTAINER
  iconOutline: {
    height: wp(10.9), //ios 45
    width: wp(10.9),
    borderRadius: wp(12.1), //ios 50
    borderWidth: 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#8F9BB3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  //MUSIC LIST
  musicList: {
    backgroundColor: "background-basic-color-3",
    minHeight: 310,
    borderTopColor: "color-basic-transparent-400",
    borderTopWidth: 0.3,
  },

  // Music Video
  slideTitle: {
    marginVertical: wp(2.8),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: wp(2.5),
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
