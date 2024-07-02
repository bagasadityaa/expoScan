import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/Card";

export default function order() {
  return (
    <View style={styles.container}>
      <View style={styles.containerIniOrder}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  containerIniOrder: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
