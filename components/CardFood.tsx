import { useState } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";

export default function CardFood({ kode, nama, harga, quantity }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={{ padding: 10, width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ayam Bakar</Text>
        <Switch
          trackColor={{ false: "#767577", true: "green" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>{/* <Button>Haiii</Button> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
