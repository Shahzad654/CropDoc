import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar, Image, Touchable, TouchableHighlight } from "react-native";
import { Card, Icon } from "react-native-paper";
import Swiper from "react-native-swiper";
import F1 from '../assets/farming.jpg'
import F2 from "../assets/farming2.jpg";
import F3 from "../assets/farming3.jpg";
import F4 from "../assets/farming4.jpg";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#e5e3d9",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 22, marginLeft: -8, marginTop: -30 }}>
        Category
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          marginLeft: -12,
          marginTop: 18,
        }}
      >
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Disease Detection");
          }}
        >
          <Card style={{ width: 100, height: 100, backgroundColor: "#116736" }}>
            <Card.Content>
              <Icon source="tree" color="white" size={60} />
            </Card.Content>
          </Card>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Soil Detection");
          }}
        >
          <Card style={{ width: 100, height: 100, backgroundColor: "#116736" }}>
            <Card.Content>
              <Icon source="terrain" color="white" size={60} />
            </Card.Content>
          </Card>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Fruit Counting");
          }}
        >
          <Card style={{ width: 100, height: 100, backgroundColor: "#116736" }}>
            <Card.Content>
              <Icon source="apple" color="white" size={60} />
            </Card.Content>
          </Card>
        </TouchableHighlight>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 40,
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 18 }}>Diease{"\n"}Detector</Text>
        <Text style={{ fontSize: 18 }}>Soil{"\n"}Detector</Text>
        <Text style={{ fontSize: 18 }}>Fruit{"\n"}Counting</Text>
      </View>

      <View style={{ flex: 1, marginTop: 20 }}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          height={200}
        >
          <View style={[styles.slide]}>
            <Image source={F1} style={styles.image} resizeMode="stretch" />
          </View>
          <View style={[styles.slide]}>
            <Image source={F2} style={styles.image} resizeMode="stretch" />
          </View>
          <View style={[styles.slide]}>
            <Image source={F3} style={styles.image} resizeMode="stretch" />
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Image source={F4} style={styles.image} resizeMode="stretch" />
          </View>
        </Swiper>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 22 }}>Tips for Farming</Text>
        <View style={{ width: "100%", height: 180 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: -15,
              marginTop: 15,
            }}
          >
            <Icon source="corn" color="#116736" size={40} />
            <Text style={{ marginTop: 8 }}>
              Rotate crops annually to maintain soil fertility.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: -15,
              marginTop: 10,
            }}
          >
            <Icon source="corn" color="#116736" size={40} />
            <Text style={{ marginTop: 8 }}>
              Implement drip irrigation to conserve water.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: -15,
              marginTop: 10,
            }}
          >
            <Icon source="corn" color="#116736" size={40} />
            <Text style={{ marginTop: 8 }}>
              Invest in quality seeds for higher yields.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: -15,
              marginTop: 10,
            }}
          >
            <Icon source="corn" color="#116736" size={40} />
            <Text style={{ marginTop: 8 }}>
              Use cover crops to prevent soil erosion.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden", 
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20, 
  },
});

export default Home;
