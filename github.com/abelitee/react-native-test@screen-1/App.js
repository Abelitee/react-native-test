import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { useFonts } from "expo-font";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MaterialCommunityIconsPack } from "./src/theme/MaterialCommunityIcons";
import { FeatherIconsPack } from "./src/theme/feather-icons";
import { IoniconsIconsPack } from "./src/theme/Ionicons";
import { FontAwesomeIconsPack } from "./src/theme/fontawesome";
import { ThemeContext } from "./src/theme/theme-context";
import { default as themes } from "./src/theme/custom-theme.json";
import { default as mapping } from "./mapping.json";
import Gestures from "./src/Gestures";
import Subscription from "./src/screens/subscription";
import Card from "./src/screens/card";
import { AppNavigator } from "./src/navigation/navigation";

import AsyncStorage from "@react-native-async-storage/async-storage";

const customFonts = {
  Proxima: require("./assets/fonts/proxima-Regular.ttf"),
  ProximaSemi: require("./assets/fonts/proxima-SemiBold.ttf"),
  ProximaBold: require("./assets/fonts/proxima-Bold.otf"),
  Vibur: require("./assets/fonts/Vibur-Regular.ttf"),
  Brassmono: require("./assets/fonts/brass-mono.otf"),
  Sanfrancisco: require("./assets/fonts/SanFrancisco.ttf"),
  Sofia: require("./assets/fonts/SofiaPro-Medium.ttf"),
};

export default function App() {
  const [theme, setTheme] = React.useState("light");

  const [success, setSuccess] = React.useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const [loaded] = useFonts({
    Proxima: require("./assets/fonts/proxima-Regular.ttf"),
    ProximaSemi: require("./assets/fonts/proxima-SemiBold.ttf"),
    ProximaBold: require("./assets/fonts/proxima-Bold.otf"),
    Vibur: require("./assets/fonts/Vibur-Regular.ttf"),
    Brassmono: require("./assets/fonts/brass-mono.otf"),
    Sanfrancisco: require("./assets/fonts/SanFrancisco.ttf"),
    Sofia: require("./assets/fonts/SofiaPro-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <IconRegistry
      icons={[
        EvaIconsPack,
        FeatherIconsPack,
        FontAwesomeIconsPack,
        IoniconsIconsPack,
        MaterialCommunityIconsPack,
      ]}
    /> */}
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
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
          {/* <Loaded
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          success={success}
          setSuccess={setSuccess}
        /> */}
          {/* <Gestures /> */}
          {/* <Card /> */}
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}
