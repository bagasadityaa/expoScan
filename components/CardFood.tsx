import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function CardFood({
  kode,
  nama,
  harga,
  quantity,
  switchValue,
  navigate,
}) {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ paddingHorizontal: 5, width: "100%" }}>
      {switchValue === "kategori" ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Ketersediaan");
          }}
        >
          <View
            style={{
              padding: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{nama}</Text>
            {switchValue === "kategori" ? (
              <TouchableOpacity>
                <FontAwesome size={28} name="angle-right" />
              </TouchableOpacity>
            ) : (
              <Switch
                trackColor={{ false: "#767577", true: "green" }}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            padding: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{nama}</Text>
          {switchValue === "kategori" ? (
            <TouchableOpacity>
              <FontAwesome size={28} name="angle-right" />
            </TouchableOpacity>
          ) : (
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          )}
        </View>
      )}
      <View>{/* <Button>Haiii</Button> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
