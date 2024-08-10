import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import { Card, Icon, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { ScrollView } from "react-native-gesture-handler";

const FruitCounting = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);
  const [result, setResult] = useState(null);

  const openGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });

       if (!result.canceled) {
         setImage(result.assets[0].uri);
         setHasCounted(false);
         setResult(null);
       }
    } catch (error) {
      console.log("Error opening gallery:", error);
    }
  };

  const openCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
        base64: true,
      });
       if (!result.canceled) {
         setImage(result.assets[0].uri);
         setHasCounted(false);
         setResult(null);
       }
    } catch (error) {
      console.log("Error opening gallery:", error);
    }
  };

  const countFruit = async () => {
    setLoading(true);
    try {
      const base64Image = await FileSystem.readAsStringAsync(image, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: "Analyze this image and provide an exact count of each type of fruit visible. Be as precise as possible, even if some fruits are partially obscured or in the background.",
              },
              {
                inline_data: {
                  mime_type: "image/jpeg",
                  data: base64Image,
                },
              },
            ],
          },
        ],
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC7wutVlGWr46lNH4mssMNQDDKJMpMoBis`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const result = data.candidates[0].content.parts[0].text;

      setResult({ description: result });
      setHasCounted(true);
    } catch (error) {
      console.error("Error detecting disease:", error);
      setResult({
        description: "An error occurred while detecting the disease.",
      });
    } finally {
      setLoading(false);
      setHasCounted(true);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: "#e5e3d9",
          height: 780,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginTop: -20,
            marginBottom: 20,
          }}
        >
          Fruit Counter
        </Text>
        <View>
          <Card
            style={{
              width: "100%",
              height: 55,
              backgroundColor: "#116736",
              marginLeft: 10,
            }}
            onPress={openGallery}
          >
            <Card.Content
              style={{ display: "flex", flexDirection: "row", gap: 10 }}
            >
              <Text style={{ color: "white", fontSize: 16, marginLeft: 65 }}>
                Open Gallery
              </Text>
              <Icon source="panorama-outline" color="white" size={25} />
            </Card.Content>
          </Card>
        </View>

        <View>
          <Card
            style={{
              width: "100%",
              height: 55,
              backgroundColor: "#116736",
              marginLeft: -10,
              marginTop: 20,
            }}
            onPress={openCamera}
          >
            <Card.Content
              style={{ display: "flex", flexDirection: "row", gap: 10 }}
            >
              <Text style={{ color: "white", fontSize: 16, marginLeft: 65 }}>
                Open Camera
              </Text>
              <Icon source="camera" color="white" size={25} />
            </Card.Content>
          </Card>
        </View>

        <View style={{ marginTop: 50 }}>
          {image && (
            <>
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: 250, borderRadius: 20 }}
              />
              {!hasCounted && (
                <Button
                  mode="contained"
                  style={{
                    marginLeft: 60,
                    marginRight: 60,
                    backgroundColor: "#116736",
                    marginTop: -30,
                  }}
                  labelStyle={{ fontSize: 16 }}
                  onPress={countFruit}
                  disabled={loading}
                >
                  {loading ? "Counting..." : "Count"}
                </Button>
              )}
            </>
          )}

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#116736" />
              <Text style={styles.loadingText}>Counting fruits...</Text>
            </View>
          )}
        </View>

        {result && (
          <Text style={{ marginTop: 20, textAlign: "center", fontSize: 18 }}>
            {result.description || "No fruit counted try again."}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  loadingText: {
    color: "white",
    marginTop: 10,
  },
});

export default FruitCounting;
