import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
export default function ResponsiveLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>{Platform.OS === "web" ? "Web Box 1" : "Mobile Box 1"}</Text>
      </View>
      <View style={styles.box}>
        <Text>{Platform.OS === "web" ? "Web Box 2" : "Mobile Box 2"}</Text>
      </View>
      <View style={styles.box}>
        <Text>
          {Platform.OS === "web" ? (
            <View>
              <Text>INi Web 3</Text>
            </View>
          ) : (
            <View>
              <Text>INi Mobile Box 3</Text>
            </View>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    marginTop: Platform.OS === "web" ? 0 : 35,
  },
  box: {
    width: Platform.OS === "web" ? "30%" : "45%",
    height: Platform.OS === "web" ? 100 : 50,
    backgroundColor: Platform.OS === "web" ? "lightgray" : "green",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
