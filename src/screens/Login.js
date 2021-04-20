import React from "react";
import { SafeAreaView, View, ImageBackground } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  Input,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  LoginInput,
  SignupInput,
  AltLogin,
  Loader,
  ResetPassword,
  BackIcon,
} from "../components/Login";
import Constants from "expo-constants";

export const LoginScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const [reset, setReset] = React.useState(false);

  const [login, setLogin] = React.useState(true);
  const [signup, setSignup] = React.useState(false);

  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
      <Layout>
        <View style={styles.shadow}>
          <ImageBackground
            source={require("../../assets/login.png")}
            style={styles.container}
          >
            {login ? (
              <>
                <LoginInput
                  setLoading={setLoading}
                  setReset={setReset}
                  setLogin={setLogin}
                  navigation={navigation}
                  setSuccess={setSuccess}
                />
                <AltLogin setLogin={setLogin} setSignup={setSignup} />
              </>
            ) : null}

            {signup || reset ? (
              <BackIcon setReset={setReset} setLogin={setLogin} />
            ) : null}

            {signup ? (
              <SignupInput
                navigation={navigation}
                setLoading={setLoading}
                setSuccess={setSuccess}
                setLogin={setLogin}
              />
            ) : null}

            {reset === true ? <ResetPassword setLoading={setLoading} /> : null}
          </ImageBackground>
        </View>
        {loading === true ? <Loader success={success} /> : null}
      </Layout>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    height: hp(100),
    width: wp(100),
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    backgroundColor: "rgba(0, 0, 0, 0.07)",
  },
});
