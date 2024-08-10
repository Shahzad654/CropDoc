import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Image } from "react-native";
import Img from '../assets/welcome.png'

const Welcome = ({navigation}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.replace("Drawer");
        }, 3000)
        return()=> clearTimeout(timer)
    }, [navigation])

    return (
      <View
        style={{
          padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          backgroundColor: "#60E66E",
          height: 780,
        }}
      >
        <Image source={Img} style={{ marginTop: 270, marginLeft: 60 }} />

        <View style={{ marginTop: -115, marginLeft: 70 }}>
          <Text style={{ fontSize: 24, color: "white" }}>CROPDOC</Text>
          <Text style={{ fontSize: 14, color: "white", marginLeft:25, }}>
            -Your crop doctor...!!!
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({})

export default Welcome;
