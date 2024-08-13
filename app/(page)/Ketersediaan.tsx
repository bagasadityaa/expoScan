import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardFood from "@/components/CardFood";

export default function Ketersediaan({ navigate }) {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
        <CardFood switchValue="" nama="Ayam Bakar" />
        <CardFood switchValue="" nama="Ayam Kremes" />
        <CardFood switchValue="" nama="Ayam Cabe Ijo" />
        <CardFood switchValue="" nama="Ayam Gepuk" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
