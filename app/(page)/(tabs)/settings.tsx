import Card from "@/components/Card";
import CardFood from "@/components/CardFood";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <CardFood kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});
