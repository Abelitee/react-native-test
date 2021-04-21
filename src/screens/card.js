import React, { Profiler } from "react";
import {
  Layout,
  Text,
  Icon,
  Button,
  useStyleSheet,
  Radio,
  StyleService,
  Divider,
  Input,
} from "@ui-kitten/components";
import Constants from "expo-constants";

import {
  Image,
  StyleSheet,
  View,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CardStack from "../Gestures";

const Arrow = (props) => <Icon name="arrow-ios-forward-outline" {...props} />;

export default function Card({ navigation }) {
  const styles = useStyleSheet(themedStyles);
  // REFRESH THE SCREEN

  const [value, setValue] = React.useState(false);
  const [card, setCard] = React.useState(false);
  const [date, setDate] = React.useState(false);
  const [cvv, setCvv] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const calenderIcon = (props) => (
    <Image source={require("../../assets/images/calender.png")} />
  );

  const dataIcon = (props) => (
    <Image source={require("../../assets/images/data.png")} />
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        <Text appearance="alternative" style={styles.captionText}>
          Error: incorect card number! kindly check your card and enter the
          correct number
        </Text>
      </View>
    );
  };

  const dateCaption = () => {
    return (
      <View style={styles.captionContainer}>
        <Text appearance="alternative" style={styles.captionText}>
          Error: incorect Expiry date! kindly check your card and enter the
          correct date
        </Text>
      </View>
    );
  };

  const cvvCaption = () => {
    return (
      <View style={styles.captionContainer}>
        <Text appearance="alternative" style={styles.captionText}>
          Error: incorect CVV! kindly check your card and enter the correct CVV
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <Layout>
        <ScrollView>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: wp(4),
                marginVertical: hp(4),
              }}
            >
              <Image
                source={require("../../assets/images/back.png")}
                style={{ marginRight: wp(3.5) }}
              />
              <Text>Card Usage</Text>
            </View>

            <Divider />
            <View
              style={{
                height: hp(6),
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: wp(5),
                marginVertical: hp(2),
              }}
            >
              <Text appearance="hint">
                Your debit card usage summary appear here
              </Text>
            </View>
            <Divider />

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginVertical: hp(2.4),
                  color: "#252733",
                  fontWeight: "500",
                  marginHorizontal: wp(5),
                }}
              >
                <Text style={{ marginHorizontal: wp(1) }}>Filter</Text>

                <Image source={require("../../assets/images/chevronD.png")} />
              </View>

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginLeft: wp(5),
                    marginRight: wp(2),
                    marginVertical: hp(1),
                  }}
                >
                  <Text>From:</Text>

                  <Button
                    size="medium"
                    accessoryRight={calenderIcon}
                    style={{
                      backgroundColor: "#E8F0FE",
                      borderColor: "#E8F0FE",
                      borderRadius: wp(1.6),
                      marginHorizontal: wp(1),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "Proxima",
                      }}
                    >
                      28 Nov 2020
                    </Text>
                  </Button>
                </View>

                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    marginVertical: hp(1),
                  }}
                >
                  <Text>To:</Text>

                  <Button
                    size="medium"
                    accessoryRight={calenderIcon}
                    style={{
                      backgroundColor: "rgba(196, 196, 196, 0.35)",
                      borderColor: "rgba(196, 196, 196, 0.35)",
                      borderRadius: wp(1.6),
                      marginHorizontal: wp(1),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: "Proxima",
                      }}
                    >
                      31 Nov 2020
                    </Text>
                  </Button>
                </View>
              </View>
              <View style={{ marginVertical: hp(3) }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: hp(8),
                    // marginVertical: hp(1),
                    marginHorizontal: wp(5),
                  }}
                >
                  <Radio
                    checked={checked}
                    onChange={(nextChecked) => setChecked(nextChecked)}
                  >
                    All Times
                  </Radio>

                  <Button
                    size="small"
                    style={{
                      backgroundColor: "#BEE1FF",
                      borderColor: "#BEE1FF",
                      borderRadius: wp(1.6),
                    }}
                  >
                    <Text
                      style={{
                        color: "#2214DA",
                        fontSize: 13,
                        fontFamily: "ProximaSemi",
                      }}
                    >
                      Apply
                    </Text>
                  </Button>
                </View>
              </View>
            </View>

            <Divider
              style={{
                marginVertical: hp(1),
                borderColor: "rgba(196, 196, 196, 0.35)",
                borderWidth: hp(0.07),
              }}
            />

            <ScrollView
              contentContainerStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: hp(6),
                height: hp(200),
              }}
            >
              <CardStack />
            </ScrollView>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: wp(28),
  },
});
