import React, { Profiler } from "react";
import {
  Layout,
  Text,
  Icon,
  Button,
  useStyleSheet,
  StyleService,
  Divider,
  Input,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
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

const Arrow = (props) => <Icon name="arrow-ios-forward-outline" {...props} />;

export default function Subscription({ navigation }) {
  const styles = useStyleSheet(themedStyles);
  // REFRESH THE SCREEN

  const [value, setValue] = React.useState();
  const [card, setCard] = React.useState();
  const [date, setDate] = React.useState();
  const [cvv, setCvv] = React.useState();

  const renderIcon = (props) => (
    <Image source={require("../../assets/images/search.png")} />
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
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
      <Layout>
        <ScrollView>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: hp(20),
                marginHorizontal: wp(2),
                justifyContent: "space-around",
              }}
            >
              <Image source={require("../../assets/images/logo.png")} />
              <View>
                <Input
                  value={value}
                  accessoryLeft={renderIcon}
                  width={wp(38)}
                  height={hp(6)}
                  style={{
                    borderColor: "transparent",
                    borderRadius: wp(1.9),
                    backgroundColor: "rgba(196, 196, 196, 0.35);",
                  }}
                  // secureTextEntry={secureTextEntry}
                  onChangeText={(nextValue) => setValue(nextValue)}
                />
              </View>

              <View>
                <Button
                  size="small"
                  accessoryLeft={dataIcon}
                  style={{
                    backgroundColor: "#2E3A59",
                    borderColor: "#2E3A59",
                    borderRadius: wp(1.6),
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      fontFamily: "ProximaSemi",
                    }}
                  >
                    Top Up
                  </Text>
                </Button>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#F7F7F7",
                height: hp(6),
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: wp(4),
              }}
            >
              <Image
                source={require("../../assets/images/back.png")}
                style={{ marginRight: wp(3.5) }}
              />
              <Text>Use Debit Card</Text>
            </View>

            <View>
              <Text
                style={{
                  marginVertical: hp(2.4),
                  color: "#252733",
                  fontWeight: "500",
                  marginHorizontal: wp(5),
                }}
              >
                Top up overview
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: wp(5),
                  marginVertical: hp(1),
                }}
              >
                <Text>Amount to credit</Text>
                <Text status="primary">N50.00</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: wp(5),
                  marginVertical: hp(1),
                }}
              >
                <Text>VAT</Text>
                <Text>N0.00</Text>
              </View>

              <View
                style={{ backgroundColor: "#F7F7F7", marginVertical: hp(3) }}
              >
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
                  <Text status="primary">Total Charged</Text>
                  <Text status="primary">N5,000</Text>
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

            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: hp(6),
              }}
            >
              <LinearGradient
                colors={["#2214DA", "#0D093CDE", "#1104B2"]}
                style={{
                  width: wp(90),
                  height: hp(60),
                }}
              >
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: hp(3),
                  }}
                >
                  <Text category="h5" appearance="alternative">
                    Credit Card
                  </Text>
                </View>

                <View style={{ marginHorizontal: wp(4) }}>
                  <Input
                    value={card}
                    label="Credit card"
                    placeholder="XXXX XXXX XXXX XXX"
                    keyboardType="phone-pad"
                    caption={renderCaption}
                    // secureTextEntry={secureTextEntry}
                    onChangeText={(nextValue) => setCard(nextValue)}
                  />
                </View>

                <View
                  appearance="alternative"
                  style={{
                    marginHorizontal: wp(4),
                    marginVertical: hp(5),
                    flexDirection: "row",
                  }}
                >
                  <Input
                    value={date}
                    label="Expiry Date"
                    placeholder="XX/XX"
                    keyboardType="phone-pad"
                    caption={dateCaption}
                    style={{ flex: 1, margin: 2 }}
                    // secureTextEntry={secureTextEntry}
                    onChangeText={(nextValue) => setDate(nextValue)}
                  />

                  <Input
                    value={cvv}
                    label="CVV"
                    placeholder="XXX"
                    keyboardType="phone-pad"
                    style={{ flex: 1, margin: 2 }}
                    caption={cvvCaption}
                    // secureTextEntry={secureTextEntry}
                    onChangeText={(nextValue) => setCvv(nextValue)}
                  />
                </View>
              </LinearGradient>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: wp(10),
                marginVertical: hp(4),
              }}
            >
              <Button size="medium" style={styles.button} appearance="outline">
                SAVE
              </Button>

              <Button size="medium" style={styles.button} appearance="filled">
                FINISH
              </Button>
            </View>
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
