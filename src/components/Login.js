import React from "react";
import {
  View,
  Image,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  Icon,
  Layout,
  Text,
  Button,
  useStyleSheet,
  StyleService,
  Input,
  CheckBox,
} from "@ui-kitten/components";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { ThemeContext } from "../theme/theme-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFetch } from "../hooks/fetch";

export const LoginInput = ({
  setLoading,
  setReset,
  setLogin,
  navigation,
  setSuccess,
}) => {
  const styles = useStyleSheet(themedStyles);
  const themeContext = React.useContext(ThemeContext);
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const handleReset = () => {
    setReset(true);
    setLogin(false);
  };

  const HandleLogin = () => {
    Keyboard.dismiss();
    setLoading(true);

    fetch("https://gmp-app.herokuapp.com/account/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          setErrorMsg("res");
          setError(true);
          setLoading(false);
        }
        if (response.ok) {
          setSuccess("log");
          setError(false);
          const data = await response.json();
          themeContext.setUserInfo(data);
          themeContext.storeData("userInfo", data);
          themeContext.setSuccess(true);
          navigation.replace("Butt");
          setSuccess(null);
          setLoading(false);
        }
      })
      .then((responseJson) => {
        // setSuccess(null);'
      })
      .catch((error) => {
        setError(true);
        error.message === "Network request failed"
          ? setErrorMsg("net")
          : setErrorMsg("wrong");
        setLoading(false);
      });
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const personIcon = (props) => (
    <Icon style={styles.inputIcon} pack="ionic" name="person-outline" />
  );

  const eyeIcon = (props) => (
    <Icon
      style={styles.inputIcon}
      pack="ionic"
      onPress={toggleSecureEntry}
      name={secureTextEntry ? "eye-off" : "eye"}
    />
  );
  return (
    <Layout level="2" style={styles.inputCase}>
      <View style={styles.inputTitle}>
        <Text category="h5" style={{ color: "#4B276B" }}>
          Welcome back
        </Text>
      </View>

      {error === true ? (
        <View style={styles.errorCase}>
          <Icon
            style={{ color: "#FF5B42", height: hp(3) }}
            pack="ionic"
            name={errorMsg === "net" ? "wifi-outline" : "information-circle"}
          />
          <Text style={{ fontSize: wp(3.5) }} status="danger" numberOfLines={1}>
            {errorMsg === "net"
              ? "No internet connection found"
              : errorMsg === "res"
              ? "Please provide a valid username and password."
              : "Something went wrong please try again"}
          </Text>
        </View>
      ) : null}

      <View style={styles.inputSubCase}>
        <Text style={styles.inputSub}>Username</Text>
        <Input
          value={username}
          size="small"
          keyboardType="email-address"
          autoCompleteType="username"
          autoCapitalize="none"
          accessoryLeft={personIcon}
          onChangeText={(nextValue) => setUsername(nextValue)}
        />
      </View>

      <View style={styles.inputSubCase}>
        <Text style={styles.inputSub}>Password</Text>
        <Input
          value={password}
          size="small"
          // caption="Should contain at least 8 symbols"
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          accessoryRight={eyeIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
      </View>

      <Pressable style={styles.forgotCase} onPress={handleReset}>
        <Text style={styles.forgot}>Forgot password ?</Text>
      </Pressable>

      <View style={styles.loginButtonCase}>
        <Button onPress={HandleLogin} style={styles.loginButton}>
          Login
        </Button>
      </View>
    </Layout>
  );
};

export const AltLogin = ({ setLogin, setSignup }) => {
  const styles = useStyleSheet(themedStyles);
  const handleSign = () => {
    setLogin(false);
    setSignup(true);
  };
  return (
    <Layout style={styles.altLoginContainer}>
      <View style={styles.signin}>
        <Text>or sign in with</Text>
      </View>

      <View style={styles.altLoginCase}>
        <Button style={styles.twitterCase}>
          <Icon style={styles.altIcons} pack="ionic" name="logo-twitter" />
        </Button>

        <Button style={styles.appleCase}>
          <Icon style={styles.altIcons} pack="ionic" name="logo-apple" />
        </Button>

        <Button style={styles.googleCase}>
          <Icon style={styles.googleIcon} pack="ionic" name="logo-google" />
        </Button>
      </View>

      <View style={styles.altTitles}>
        <Text>Don't have an account?</Text>

        <Pressable onPress={handleSign}>
          <Text style={{ color: "#4B276B" }}> Sign up</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

export const Loader = ({ success }) => {
  const pulseRef = React.useRef();

  React.useEffect(() => {
    success != null ? pulseRef.current.startAnimation() : null;
  }, [success]);

  return (
    <View
      style={{
        width: wp(100),
        height: hp(100),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "rgba(0,0,0, 0.9)",
        backgroundColor: "white",
        position: "absolute",
      }}
    >
      <Image
        source={require("../../assets/boxload.gif")}
        style={{ height: wp(60), width: wp(60) }}
      />

      {/* {success ? console.log(pulseRef.current.startAnimation()) : null} */}
      {success != null ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            {success === "reg"
              ? "Registration Successful!"
              : success === "log"
              ? "Login Successful!"
              : null}
          </Text>

          <Icon
            style={{
              height: hp(4),
              width: hp(4),
              color: "#81C11B",
              // color: "#4B276B",
              marginHorizontal: wp(2),
            }}
            ref={pulseRef}
            animation="pulse"
            pack="ionic"
            name="checkmark-circle-outline" //alert-circle-outline
          />
        </View>
      ) : null}
    </View>
  );
};

export const ResetPassword = ({ setLoading }) => {
  const [mail, setMail] = React.useState("");

  const styles = useStyleSheet(themedStyles);

  const emailIcon = (props) => (
    <Icon style={styles.inputIcon} pack="ionic" name="at-outline" />
  );
  return (
    <Layout level="2" style={styles.resCase}>
      <View style={styles.inputTitle}>
        <Text category="h5" style={{ color: "#4B276B" }}>
          Reset Password
        </Text>
      </View>

      <View
        style={{
          marginVertical: hp(2),
          alignItems: "center",
          width: wp(75),
        }}
      >
        <Text
          appearance="hint"
          style={{ textAlign: "center" }}
          numberOfLines={2}
        >
          Confirm your email and we'll send instructions to reset your password.
        </Text>
      </View>

      <View style={styles.resInput}>
        <Input
          value={mail}
          size="small"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
          accessoryLeft={emailIcon}
          onChangeText={(nextValue) => setMail(nextValue)}
        />
      </View>
      <Button style={styles.resButton}>Reset Password</Button>
    </Layout>
  );
};

export const BackIcon = ({ setReset, setLogin }) => {
  const styles = useStyleSheet(themedStyles);

  const handleBack = () => {
    setLogin(true);
    setReset(false);
  };
  return (
    <Pressable
      onPress={handleBack}
      style={{
        width: wp(13),
        height: wp(13),
        bottom: hp(12),
        right: wp(35),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "#4B276B",
        // backgroundColor: "transparent",
      }}
    >
      <Icon
        style={{
          height: hp(4),
          color: "white",
          // color: "#4B276B",
        }}
        pack="ionic"
        name="arrow-back-outline"
      />
    </Pressable>
  );
};

export const SignupInput = ({ setLoading, setSuccess, navigation }) => {
  const styles = useStyleSheet(themedStyles);
  const themeContext = React.useContext(ThemeContext); //<-- THE MAGIC

  // TEXT INPUT VALUES FOR ALL FIELDS
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");

  // ERROR MESSAGE STATES
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);

  // SHOW HIDE FORE PASSWORD AND CHECKBOX
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [activeChecked, setActiveChecked] = React.useState(false);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const HandleSignup = () => {
    Keyboard.dismiss();
    setLoading(true);

    fetch("https://gmp-app.herokuapp.com/account/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        phone: phone,
        password: password,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          setErrorMsg("res");
          setError(true);
          setLoading(false);
        }
        if (response.ok) {
          setSuccess("reg");
          setError(false);
          const data = await response.json();
          themeContext.setUserInfo(data);
          navigation.replace("Butt");
          setLoading(false);
        }
      })
      .then((responseJson) => {
        setSuccess(null);
      })
      .catch((error) => {
        setError(true);
        error.message === "Network request failed"
          ? setErrorMsg("net")
          : setErrorMsg("wrong");
        setLoading(false);
      });
  };

  const personIcon = (props) => (
    <Icon style={styles.signIcon} pack="ionic" name="person-outline" />
  );

  const hashIcon = (props) => (
    <Icon style={styles.signIcon} pack="ionic" name="person-add-outline" />
  );

  const emailIcon = (props) => (
    <Icon style={styles.signIcon} pack="ionic" name="at-outline" />
  );

  const phoneIcon = (props) => (
    <Icon style={styles.signIcon} pack="ionic" name="phone-portrait-outline" />
  );

  const eyeIcon = (props) => (
    <Icon
      style={styles.signIcon}
      pack="ionic"
      onPress={toggleSecureEntry}
      name={secureTextEntry ? "eye-off" : "eye"}
    />
  );

  const lockIcon = (props) => (
    <Icon style={styles.signIcon} pack="ionic" name="lock-closed-outline" />
  );

  return (
    <Layout style={styles.signCase}>
      <View style={styles.inputTitle}>
        <Text category="h6" style={{ color: "#4B276B" }}>
          Create Your Account
        </Text>
      </View>

      {error === true ? (
        <View style={styles.errorCase}>
          <Icon
            style={{
              color: "#FF5B42",
              height: hp(3),
              marginHorizontal: wp(2),
            }}
            pack="ionic"
            name={errorMsg === "net" ? "wifi-outline" : "information-circle"}
          />
          <Text style={{ fontSize: 13 }} status="danger" numberOfLines={1}>
            {errorMsg === "net"
              ? "No internet connection found"
              : errorMsg === "res"
              ? "Hang on, are those fields properly filled?"
              : "Something went wrong please try again"}
          </Text>
        </View>
      ) : null}

      <View style={styles.signSubCase}>
        {/* <Text style={styles.signSub}>Full Name</Text> */}
        <Input
          value={name}
          textStyle={styles.signText}
          size="small"
          autoCapitalize="none"
          placeholder="Last Name"
          textContentType="name"
          autoCorrect={false}
          accessoryLeft={personIcon}
          onChangeText={(nextValue) => setName(nextValue)}
        />
      </View>

      <View style={styles.signSubCase}>
        {/* <Text style={styles.signSub}>Username</Text> */}
        <Input
          value={username}
          textStyle={styles.signText}
          size="small"
          keyboardType="default"
          autoCompleteType="username"
          placeholder="Username"
          textContentType="username"
          autoCorrect={false}
          autoCapitalize="none"
          accessoryLeft={hashIcon}
          onChangeText={(nextValue) => setUsername(nextValue)}
        />
      </View>

      <View style={styles.signSubCase}>
        {/* <Text style={styles.signSub}>Email</Text> */}
        <Input
          value={email}
          textStyle={styles.signText}
          size="small"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail Address"
          textContentType="emailAddress"
          accessoryLeft={emailIcon}
          onChangeText={(nextValue) => setEmail(nextValue)}
        />
      </View>

      <View style={styles.signSubCase}>
        {/* <Text style={styles.signSub}>Phone Number</Text> */}
        <Input
          value={phone}
          textStyle={styles.signText}
          size="small"
          keyboardType="phone-pad"
          autoCompleteType="tel"
          autoCapitalize="none"
          placeholder="Mobile Number"
          autoCorrect={false}
          accessoryLeft={phoneIcon}
          onChangeText={(nextValue) => setPhone(nextValue)}
        />
      </View>

      <View style={styles.signSubCase}>
        {/* <Text style={styles.signSub}>Password</Text> */}
        <Input
          value={password}
          textStyle={styles.signText}
          size="small"
          autoCompleteType="password"
          placeholder="Enter your password"
          autoCapitalize="none"
          autoCorrect={false}
          accessoryRight={eyeIcon}
          accessoryLeft={lockIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
      </View>

      <View style={{ marginVertical: hp(4.5), marginHorizontal: wp(5.5) }}>
        <CheckBox
          // style={{ backgroundColor: "red" }}
          checked={activeChecked}
          onChange={(nextChecked) => setActiveChecked(nextChecked)}
        >
          <Text style={{ color: "#4B276B" }}>
            I accept all terms and conditions.
          </Text>
        </CheckBox>
      </View>

      <Button onPress={HandleSignup} style={styles.signButton}>
        Sign up
      </Button>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  inputCase: {
    height: hp(58),
    width: wp(80),
    borderRadius: wp(5),
  },
  inputTitle: {
    marginVertical: hp(4),
    alignItems: "center",
  },
  inputSubCase: {
    marginHorizontal: wp(3.5),
  },
  errorCase: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: hp(1),
    width: wp(80),
  },
  inputSub: {
    marginVertical: hp(2),
    color: "#4B276B",
  },
  inputIcon: {
    height: hp(3),
    color: "color-basic-600",
  },
  forgotCase: {
    marginHorizontal: wp(3.5),
    width: wp(30),
  },
  forgot: {
    marginVertical: hp(3),
    fontSize: 13,
    color: "#4B276B",
  },
  loginButtonCase: {
    flexDirection: "row-reverse",
    marginHorizontal: wp(5),
  },
  loginButton: {
    borderRadius: 50,
    height: wp(3),
    borderWidth: 0,
    backgroundColor: "#4B276B",
  },

  //  ALTERNATIVE FOR LOGIN
  altLoginContainer: {
    width: wp(70),
    backgroundColor: "transparent",
  },
  altLoginCase: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signin: {
    marginVertical: hp(3.8),
    alignItems: "center",
  },
  altTitles: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(3.8),
  },
  twitterCase: {
    borderRadius: 50,
    height: wp(12),
    width: wp(12),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
  appleCase: {
    borderRadius: 50,
    height: wp(12),
    width: wp(12),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 0,
  },
  googleCase: {
    borderRadius: 50,
    height: wp(12),
    width: wp(12),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0,
  },
  altIcons: {
    height: hp(3),
    marginLeft: -wp(2),
    color: "white",
  },
  googleIcon: {
    height: hp(3),
    marginLeft: -wp(2),
    color: "#ea4235",
  },

  // RESET PASSWORD
  resCase: {
    height: hp(50),
    width: wp(80),
    alignItems: "center",
    borderRadius: wp(5),
  },
  resInput: {
    marginVertical: hp(5),
    width: wp(70),
  },
  resButton: {
    width: wp(58),
    height: hp(7),
    marginHorizontal: wp(9),
    borderRadius: wp(18),
    borderWidth: 0,
    backgroundColor: "#4B276B",
  },
  // SIGN UP
  signCase: {
    height: hp(78),
    width: wp(88),
    borderRadius: wp(5),
  },
  signSubCase: {
    marginHorizontal: wp(3.5),
    marginVertical: hp(1),
  },
  signSub: {
    marginVertical: hp(2),
  },
  signText: {
    fontFamily: "Sofia",
    fontSize: 15,
  },
  signIcon: {
    height: hp(3),
    color: "color-basic-600",
  },
  signButton: {
    width: wp(58),
    height: hp(7),
    borderRadius: wp(18),
    borderWidth: 0,
    backgroundColor: "#4B276B",
    marginVertical: hp(2),
    alignSelf: "center",
  },
});
