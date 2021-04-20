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
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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

export const ToggleTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <Button
      status="info"
      style={{ marginVertical: 14 }}
      onPress={themeContext.toggleTheme}
    >
      TOGGLE THEME
    </Button>
  );
};

export function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const Playlist_1 = React.memo(
  ({ data, gpuRender }) => {
    const styles = useStyleSheet(themedStyles);
    // console.log("name:" + data.name);

    return (
      <View
        // renderToHardwareTextureAndroid={true}
        style={{ width: wp(42.3), height: wp(58), marginLeft: wp(3.6) }}
      >
        <View style={styles.imgCase}>
          <Image
            source={{ uri: data.Image }}
            style={styles.plainImg}
            // defaultSource={require("../../assets/justin-1.jpg")}
            // resizeMethod="resize"
          />
          <View
            style={{
              bottom: wp(42.3),
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              height: wp(42.3),
              width: wp(42.3),
              borderRadius: wp(1.9),
            }}
          ></View>
        </View>
        <View style={styles.playcircle}>
          <Icon
            style={{
              height: wp(2.4), //10 ios
              width: wp(2.4),
              marginHorizontal: wp(2.4),
              marginVertical: wp(1.9),
              color: "black",
            }}
            name="play"
            pack="fontawesome"
          />
        </View>

        <Text style={styles.plainSub} numberOfLines={2}>
          {data.name}
        </Text>

        {data.tracks ? (
          <Text appearance="hint" category="c2" numberOfLines={1}>
            {data.tracks.length} tracks
          </Text>
        ) : (
          <Text appearance="hint" category="c2" numberOfLines={1}>
            By {data.artist}
          </Text>
        )}
      </View>
    );
  },
  (prev, next) => {
    // console.log(prev)
    return prev !== next;
  }
);

export const Playlist_2 = ({ data }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View
      // renderToHardwareTextureAndroid={true}
      style={{ width: wp(42.3), height: wp(42.3), marginLeft: wp(3.6) }}
    >
      <View style={styles.imgCase2}>
        <Image
          source={{ uri: data.Image }}
          style={styles.plainImg2}
          // resizeMethod="resize"
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

export const Playlist_3 = React.memo(
  ({ data }) => {
    const styles = useStyleSheet(themedStyles);
    return (
      <View style={styles.case3} >
        <View style={styles.imgCase3}>
          <Image
            source={{ uri: data.Image }}
            style={styles.plainImg3}
            // resizeMethod="resize"
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
          <Text appearance="hint" style={{ fontSize: wp(4) }} numberOfLines={5}>
            {data.description}
          </Text>
        </View>
      </View>
    );
  },
  (prev, next) => {
    return prev !== next;
  }
);

export const Playlist_4 = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View
      // renderToHardwareTextureAndroid={true}
      style={{ width: wp(48.3), marginLeft: wp(3.6) }}
    >
      <View style={styles.imgCase4}>
        <Image
          source={{
            uri: "https://images5.alphacoders.com/908/thumb-1920-908648.jpg",
          }}
          style={styles.plainImg4}
          // resizeMethod="resize"
        />
        <Image
          source={{
            uri:
              "https://freshpairofiisdotcom.files.wordpress.com/2018/06/039c50434080d03e2c99941a72ba7783-1000x1000x1.jpg",
          }}
          style={styles.plainImg4}
          // resizeMethod="resize"
        />
        <Image
          source={{
            uri:
              "https://fullhdpictures.com/wp-content/uploads/2017/09/Wonderful-Selena-Gomez-Wallpaper-4K.jpg",
          }}
          style={styles.plainImg4}
          // resizeMethod="resize"
        />
        <Image
          source={{
            uri: "https://www.hdwallpapers.in/download/dua_lipa_4k_2-HD.jpg",
          }}
          style={styles.plainImg4}
          // resizeMethod="resize"
        />
      </View>
      <View
        style={{
          marginBottom: -wp(48.3),
          bottom: wp(48.3),
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          height: wp(48.3),
          width: wp(48.3),
          borderRadius: wp(1.9),
        }}
      ></View>
      <View style={styles.playcircle4}>
        <Icon
          style={{
            height: wp(5), //10 ios
            width: wp(5),
            marginHorizontal: wp(3.8),
            color: "black",
          }}
          name="play"
          pack="fontawesome"
        />
      </View>

      <Text style={styles.plainSub4} numberOfLines={3}>
        featuring Nicki Minaj, Justin Bieber, Justin Bieber, Justin Bieber
      </Text>
      <Text appearance="hint" category="c2" numberOfLines={1}>
        15 tracks
      </Text>
    </View>
  );
};

// TRACKS
export const TrackSlider = ({ data, level }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout level={level}>
      <ScrollView
        style={{
          marginBottom: wp(2.8),
        }}
        horizontal={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled={true}
        decelerationRate={0.9}
        snapToInterval={wp(100) - wp(7)}
        // snapToAlignment={"center"}
      >
        <View style={{ flexWrap: "wrap", height: wp(80) }}>
          {data.map((res, index) => {
            return (
              <View key={index}>
                <View style={styles.trackCase}>
                  <View style={styles.tracklistCase}>
                    <Image
                      style={{
                        height: wp(12.1), // ios 75
                        width: wp(12.1),
                        borderRadius: wp(1),
                      }}
                      source={{ uri: res.Image }}
                      // resizeMethod="resize"
                    />
                  </View>

                  <View style={styles.trackName}>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: wp(4), fontFamily: "Sofia" }}
                    >
                      {res.name}
                    </Text>
                    <Text
                      appearance="hint"
                      style={{ fontSize: wp(4) }}
                      numberOfLines={1}
                    >
                      {res.artist} - {res.name}
                    </Text>
                  </View>
                </View>

                <Divider style={styles.trackDivider} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Layout>
  );
};

export const Track_1 = ({ data, index, Ext, Top }) => {
  const styles = useStyleSheet(themedStyles);
  const [heart, setHeart] = React.useState("heart-outline");
  const toggleHeart = () => {
    const nextDot = heart === "heart-outline" ? "heart" : "heart-outline";
    setHeart(nextDot);
  };
  return (
    <View key={index} >
      <View style={Top ? styles.musicCase : styles.musicCaseExt}>
        {Top || Ext ? (
          <View style={styles.listCase}>
            <Text
              appearance="hint"
              style={{ fontSize: 14, fontFamily: "Sanfrancisco" }}
            >
              {index <= 8 ? 0 : null}
              {index + 1}
            </Text>
          </View>
        ) : (
          <View style={styles.listCase}>
            <Image
              source={{ uri: data.Image }}
              style={styles.QueueImg}
              // resizeMethod="resize"
            />
          </View>
        )}

        <View style={styles.musicName}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 16.5, fontFamily: "Sofia" }}
          >
            {data.name}
          </Text>
          <Text
            appearance="hint"
            numberOfLines={1}
            style={{ fontSize: 14, marginTop: wp(1.2) }}
          >
            {data.artist} - {data.name}
          </Text>
        </View>

        <View style={styles.musicIcon}>
          <Icon
            name={heart}
            pack="ionic"
            style={{
              height: wp(5.5),
              width: wp(5.5),
              color: "#8F9BB3",
            }} //ios 25
            onPress={toggleHeart}
          />
          <Icon
            name="more-horizontal"
            style={{ height: wp(6), width: wp(6) }} //ios 25
            fill="#8F9BB3"
          />
        </View>
      </View>
      {!Ext && !Top ? null : index === 2 && !Ext ? null : (
        <Divider style={styles.topDivider} />
      )}
    </View>
  );
};

export const Track_2 = React.memo(
  ({ data, index, active, setActive }) => {
    const styles = useStyleSheet(themedStyles);
    const [play, setPlay] = React.useState("equalizer");

    const togglePlay = () => {
      const nextIcon = play === "equalizer" ? "dots-horizontal" : "equalizer";
      index === active ? setPlay(nextIcon) : null;
      setActive(index);
    };

    return (
      <TouchableOpacity
        key={index}
        style={styles.musicCase2}
        onPress={togglePlay}
        activeOpacity={0.6}
      >
        <View >
          <View style={styles.listCase2}>
            <Image
              source={{ uri: data.Image }}
              style={styles.QueueImg}
              // resizeMethod="resize"
            />
          </View>

          <View style={styles.musicName2}>
            <Text
              numberOfLines={1}
              style={{ fontSize: 16.5, fontFamily: "Sofia" }}
            >
              {data.name}
            </Text>
            <Text
              appearance="hint"
              numberOfLines={1}
              style={{ fontSize: 13.5, marginTop: wp(0.2) }}
            >
              {data.artist} - {data.name}
            </Text>
          </View>

          <View style={{ justifyContent: "center" }}>
            {index === active ? (
              <Icon name={play} pack="material" style={{ height: wp(3) }} />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.active === nextProps.index
      ? false
      : true && nextProps.active === nextProps.index
      ? false
      : true;
  }
);

// ARTIST SLIDER
export const Artist_1 = ({ data, fans, Ext }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout
      style={{ marginHorizontal: Ext ? wp(3.6) : wp(2) }}
      // renderToHardwareTextureAndroid={true}
    >
      <View style={styles.simCase}>
        <Image
          source={{ uri: data.Image }}
          style={styles.simImg}
          // resizeMethod="resize"
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
          {data.name}
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
};
//  CATEGORIES

export const Category_1 = ({ data }) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View
      // renderToHardwareTextureAndroid={true}
      style={{
        width: wp(42.3),
        marginLeft: wp(3.6), //ios 15
      }}
    >
      <View style={styles.imgCaseCat}>
        <Image
          source={{ uri: data.Image }}
          style={styles.plainImgCat}
          // resizeMethod="resize"
        />
        <View
          style={{
            bottom: wp(20.3),
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            height: wp(20.3),
            width: wp(42.3),
            borderRadius: wp(1.9),
          }}
        ></View>
      </View>
      <View style={styles.titlecaseCat}>
        <Text
          style={styles.plainSubCat}
          category="h5"
          numberOfLines={1}
        >
          {data.name}
        </Text>
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  butt: {
    backgroundColor: "color-basic-300",
    borderRadius: 20,
  },
  imgCase: {
    height: wp(42.3),
    width: wp(42.3), //175 ios
    borderRadius: wp(1.9),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
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
  },
  plainSub: {
    marginVertical: wp(1.85),
    fontSize: wp(4.2),
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
    fontSize: wp(4.2),
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
    fontSize: wp(4.2),
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
    fontSize: wp(4.5),
    color: "color-basic-100"
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

  // Track 1
  musicCase: {
    marginHorizontal: wp(3.5),
    flexDirection: "row",
    marginVertical: wp(3),
  },
  musicCaseExt: {
    marginHorizontal: wp(3.5),
    flexDirection: "row",
    marginVertical: wp(2.6),
    justifyContent: "space-between",
  },
  musicIcon: {
    width: wp(16),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wp(4),
  },
  musicName: {
    width: wp(56),
    justifyContent: "center",
    marginHorizontal: 6,
  },
  listCase: {
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
  topDivider: {
    backgroundColor: "color-basic-transparent-300",
  },

  // Top Tracks 2
  musicCase2: {
    marginHorizontal: wp(3.5),
    flexDirection: "row",
    marginVertical: wp(0.65),
  },
  musicName2: {
    width: wp(70),
    justifyContent: "center",
    marginHorizontal: wp(3),
  },
  musicIcon2: {
    width: wp(16),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wp(4),
  },
  listCase2: {
    height: wp(12.1), // ios 75
    width: wp(12.1), //ios 75
    borderRadius: wp(1),
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 1,
  },
  QueueImg: {
    height: wp(12.1), // ios 75
    width: wp(12.1), //ios 75
    borderRadius: wp(1),
  },
});
