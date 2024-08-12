import { useState } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";

export default function CardFood({ kode, nama, harga, quantity }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.containerCardHeader}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Ayam Bakar</Text>
      <Text style={styles.text}>Switch is {isEnabled ? "ON" : "OFF"}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View>{/* <Button>Haiii</Button> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    opacity: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  containerMargin: { marginHorizontal: 5, marginTop: 2 },
  containerCardHeader: { backgroundColor: "green", padding: 10, width: "100%" },
  textCardHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerTextDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerQuantityTitle: {
    display: "flex",
    flexDirection: "row",
  },
  textQuantity: {
    fontSize: 18,
  },
  textTitle: {
    fontSize: 18,
    marginLeft: 10,
  },
});
