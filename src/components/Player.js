import React, { useEffect } from "react";
import { SafeAreaView, View, Image, ScrollView, Platform } from "react-native";
import {
  Layout,
  Text,
  Icon,
  Button,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
  StyleService,
  useTheme,
} from "@ui-kitten/components";

import Slider from "react-native-slider";
import Swiper from "react-native-swiper";

import { song } from "../test/test-song";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CachedImage from "react-native-expo-cached-image";
import { ThemeContext } from "../theme/theme-context";
import { cond } from "react-native-reanimated";

const DownIcon = (props) => (
  <Icon {...props} name="arrow-ios-downward-outline" />
);

export const TopNav = React.memo(({ navigation }) => {
  const Butt = () => {
    navigation.navigate("Butt");
  };

  const DownAction = () => (
    <TopNavigationAction icon={DownIcon} onPress={Butt} />
  );
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout>
      <TopNavigation
        alignment="center"
        title="Hits of the Moment"
        subtitle="Playlist"
        accessoryLeft={DownAction}
      />
    </Layout>
  );
});

export const MusicArt = React.memo(
  (data) => {
    const styles = useStyleSheet(themedStyles);
    const swiper = React.useRef(null);

    useEffect(() => {
      data.setReff(swiper);
    }, []);

    const updateIndex = (offset) => {
      const step = wp(100);
      const oldOffset = step * data.index;
      const newOffset = offset.nativeEvent.contentOffset.x;
      const diff = newOffset - oldOffset;
      const index = parseInt(data.index + Math.round(diff / step));
      data.index === index && index != 0 ? null : data.setIndex(index);
    };

    return (
      <Layout
        style={{
          height: Platform.OS === "ios" ? wp(90) : wp(75),
        }}
      >
        <ScrollView
          horizontal={true}
          bounces={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          ref={swiper}
          onMomentumScrollEnd={updateIndex}
          decelerationRate="fast"
        >
          {song.map((res) => {
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: wp(100),
                }}
              >
                <View style={styles.artCase}>
                  <Image
                    source={{
                      uri: res.Image,
                    }}
                    style={styles.artImg}
                  />
                  <View
                    style={{
                      bottom: Platform.OS === "ios" ? wp(90) : wp(75),
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                      height: Platform.OS === "ios" ? wp(90) : wp(75),
                      width: Platform.OS === "ios" ? wp(90) : wp(75),
                      borderRadius: wp(1.9),
                    }}
                  ></View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </Layout>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.index === nextProps.index ? false : true;
  }
);

export const IconCase = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [heart, setHeart] = React.useState("heart-outline");

  const toggleHeart = () => {
    const nextDot = heart === "heart-outline" ? "heart" : "heart-outline";
    setHeart(nextDot);
  };

  return (
    <Layout style={{ alignItems: "center", marginVertical: wp(4) }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: wp(50),
        }}
      >
        <Icon
          name="arrow-redo-outline"
          pack="ionic"
          style={{
            height: wp(7),
            width: wp(7),
            color: theme["background-alternative-color-1"],
          }} //ios 25
        />

        <View style={styles.iconOutline}>
          <Icon
            name="ellipsis-h"
            pack="fontawesome"
            style={{
              color: theme["background-alternative-color-1"],
              fontSize: wp(7),
            }}
          />
        </View>

        <Icon
          name={heart}
          pack="ionic"
          style={{
            height: wp(7),
            width: wp(7),
            fontWeight: "900",
            color: theme["background-alternative-color-1"],
          }} //ios 25
          onPress={toggleHeart}
        />
      </View>
    </Layout>
  );
});

export const SliderControl = React.memo(() => {
  const [value, setValue] = React.useState(0.5);
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  return (
    <Layout style={styles.sliderContainer}>
      <View style={styles.sliderTextCase}>
        <Text style={styles.sliderText}>01:44</Text>
        <Text style={styles.sliderText}>-01:44</Text>
      </View>
      <Slider
        style={{
          width: wp(90.2),
          height: wp(4.2),
        }}
        value={value}
        // onValueChange={(value) => setValue(value)}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={theme["background-alternative-color-1"]}
        maximumTrackTintColor={theme["color-basic-600"]}
        thumbStyle={{
          width: wp(2.4),
          height: wp(2.4),
          backgroundColor: theme["background-alternative-color-2"],
        }} //round thumb size
        trackStyle={{ height: 2.3, borderRadius: 50 }} // slider details
        thumbTouchSize={{ width: 50, height: 50 }} // range of touch input before drag
      />
    </Layout>
  );
});

export const MusicName = React.memo((data) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.nameCase}>
      <Text style={styles.nameTitle}>{song[data.index].name}</Text>
      <Text style={styles.nameSub}>
        {song[data.index].artist} - {song[data.index].name}
      </Text>
    </Layout>
  );
});

export const PlaybackControls = React.memo((data) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [play, setPlay] = React.useState("play");
  const [shuffle, setShuffle] = React.useState(false);
  const [repeat, setRepeat] = React.useState(false);

  const toggleplay = () => {
    const nextPlay = play === "play" ? "pause" : "play";
    setPlay(nextPlay);
  };

  const toggleShuffle = () => {
    setShuffle(!shuffle);
  };

  const toggleRepeat = () => {
    setRepeat(!repeat);
  };

  const scrollBy = (num) => {
    const diff = num + data.index;
    let x = diff * wp(100);

    data.reff.current.scrollTo({
      x: x,
      animated: true,
    });

    data.setIndex(diff);
  };

  const long = song.length - 1;

  const Next = () => {
    data.index === long && repeat === true
      ? scrollBy(-long)
      : data.index === long && repeat === false
      ? scrollBy(0)
      : scrollBy(1);
  };

  const Prev = () => {
    data.index === 0 && repeat === true
      ? scrollBy(long)
      : data.index === 0 && repeat === false
      ? scrollBy(0)
      : scrollBy(-1);
  };
  return (
    <Layout style={styles.playbackCase}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Icon
          name="repeat-outline"
          onPress={toggleRepeat}
          pack="ionic"
          style={styles.outsideIcons}
        />
        <Icon
          name="ellipse"
          pack="ionic"
          style={{
            height: 5,
            opacity: repeat === true ? 1 : 0,
            color: theme["background-alternative-color-1"],
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: wp(36.1), //android 130
          alignItems: "center",
        }}
      >
        <Icon
          name="play-skip-back"
          onPress={Prev}
          pack="ionic"
          style={styles.insideIcons}
        />
        <Icon
          name={play}
          onPress={toggleplay}
          pack="ionic"
          style={styles.playIcon}
        />
        <Icon
          name="play-skip-forward"
          pack="ionic"
          style={styles.insideIcons}
          onPress={Next}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Icon
          name="shuffle-outline"
          onPress={toggleShuffle}
          pack="ionic"
          style={styles.outsideIcons}
        />
        <Icon
          name="ellipse"
          pack="ionic"
          style={{
            height: 5,
            opacity: shuffle === true ? 1 : 0,
            color: theme["background-alternative-color-1"],
          }}
        />
      </View>
    </Layout>
  );
});

export const BaseIcons = React.memo(({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const navigateQueue = () => {
    navigation.navigate("Extension");
  };
  return (
    <Layout style={styles.baseCase}>
      <Icon name="speaker" pack="material" style={styles.baseIcon} />
      <Icon
        onPress={navigateQueue}
        name="menu-outline"
        pack="ionic"
        style={styles.baseIcon}
      />
    </Layout>
  );
});

const themedStyles = StyleService.create({
  // MUSIC ART
  artCase: {
    height: Platform.OS === "ios" ? wp(90) : wp(75), //(90) is 175 ios/(87) is * android
    alignItems: "center",
    borderRadius: wp(1.9),
  },
  artImg: {
    height: Platform.OS === "ios" ? wp(90) : wp(75), //(90) is 175 ios/(87) is * android
    width: Platform.OS === "ios" ? wp(90) : wp(75),
    borderRadius: wp(1.9),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },

  //   ICON CASE
  iconOutline: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(12.1), //ios 50
    borderWidth: 1,
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
  // SLIDER CONTROLER
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  sliderTextCase: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: wp(90.2),
  },
  sliderText: {
    fontFamily: "Sanfrancisco",
    fontSize: 13,
  },
  // MUSIC NAME
  nameCase: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Platform.OS === "ios" ? wp(4.8) : wp(3.6), //ios 20
  },
  nameTitle: {
    fontSize: Platform.OS === "ios" ? 19 : 18,
    fontFamily: "Sofia",
    marginBottom: wp(0.7), //ios 3
  },
  nameSub: {
    fontSize: Platform.OS === "ios" ? 18 : 16,
    fontFamily: "Proxima",
  },
  // PLAYBACK CONTROLS
  playbackCase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(8),
    marginVertical: wp(2.1),
  },
  playIcon: {
    height: 40,
    width: 40,
    color: "background-alternative-color-2",
  },
  insideIcons: {
    height: wp(6.9), // androis 25
    width: wp(6.9),
    color: "background-alternative-color-1",
  },
  outsideIcons: {
    height: wp(6), //android 21.5
    width: wp(6),
    color: "background-alternative-color-1",
  },
  // BASE ICONS
  baseCase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(2.8), //android 10
  },
  baseIcon: {
    height: 20,
    width: 20,
    color: "background-alternative-color-1",
  },
});
