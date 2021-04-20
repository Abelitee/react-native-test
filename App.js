import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MaterialCommunityIconsPack } from "./src/theme/MaterialCommunityIcons";
import { FeatherIconsPack } from "./src/theme/feather-icons";
import { IoniconsIconsPack } from "./src/theme/Ionicons";
import { FontAwesomeIconsPack } from "./src/theme/fontawesome";
import { AppNavigator } from "./src/navigation/navigation";
import { ThemeContext } from "./src/theme/theme-context";
import { default as themes } from "./src/theme/custom-theme.json";
import { default as mapping } from "./mapping.json";
import Track from "./track";
import { HomeScreen } from "./src/screens/Home";
// pack='feather' hidden={true} dark, (eva[theme]),

import AsyncStorage from "@react-native-async-storage/async-storage";

// import { enableScreens } from "react-native-screens";
// enableScreens();

const customFonts = {
  Proxima: require("./assets/fonts/proxima-Regular.ttf"),
  ProximaSemi: require("./assets/fonts/proxima-SemiBold.ttf"),
  ProximaBold: require("./assets/fonts/proxima-Bold.otf"),
  Vibur: require("./assets/fonts/Vibur-Regular.ttf"),
  Brassmono: require("./assets/fonts/brass-mono.otf"),
  Sanfrancisco: require("./assets/fonts/SanFrancisco.ttf"),
  Sofia: require("./assets/fonts/SofiaPro-Medium.ttf"),
};

const Loaded = () => {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }
  // from the custom App we return the component we assigned to RootApp.

  return <AppNavigator />; //<HomeScreen />
};

const removeData = async (value) => {
  try {
    await AsyncStorage.removeItem("userInfo"); //removeItem()
  } catch (e) {
    // saving error
    console.error("shit didn't remove");
  }
};

const storeData = async (name, value) => {
  try {
    const jsonValue = value === String ? value : JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    // saving error
    // console.log("shit didn't save");
  }
};

export default function App() {
  const renderCount = React.useRef(0);

  const [theme, setTheme] = React.useState("light");

  const [userInfo, setUserInfo] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    storeData("theme", nextTheme);
  };

  React.useEffect(() => {
    // renderCount.current = renderCount.current + 1;

    // console.log(renderCount.current);

    const getUserinfo = async () => {
      try {
        const value = await AsyncStorage.getItem("userInfo"); //removeItem() getAllKeys()
        if (value !== null && userInfo === null) {
          const json = await JSON.parse(value);

          json === null || userInfo !== null ? null : setUserInfo(json); // setUserInfo(json)
          setSuccess(true);
        }
        if (value === null && userInfo === null) {
          setSuccess(false);
        }
      } catch (e) {
        // error reading value
        console.error("shit could not be read");
      }
    };

    const getThemeinfo = async () => {
      try {
        const value = await AsyncStorage.getItem("theme"); //removeItem() getAllKeys()
        if (value !== null) {
          const jsonValue = value.replace(/['"]+/g, "");
          value === null && value !== theme ? null : setTheme(jsonValue); // setUserInfo(json)
        }
        if (value === null && userInfo === null) {
          // setTheme("light");
        }
      } catch (e) {
        // error reading value
        console.error("shit could not be read");
      }
    };

    getThemeinfo();
    getUserinfo();
  }, [success, theme]);

  return (
    <>
      <IconRegistry
        icons={[
          EvaIconsPack,
          FeatherIconsPack,
          FontAwesomeIconsPack,
          IoniconsIconsPack,
          MaterialCommunityIconsPack,
        ]}
      />
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
          userInfo,
          setUserInfo,
          storeData,
          removeData,
          success,
          setSuccess,
        }}
      >
        <ApplicationProvider
          {...eva}
          theme={{ ...eva[theme], ...themes }}
          customMapping={mapping}
        >
          {/* <StatusBar style="auto" /> */}
          <Loaded
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            success={success}
            setSuccess={setSuccess}
          />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}
