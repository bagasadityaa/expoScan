import { API_HOST } from "@/config/Api";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";
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
  id,
  onPress,
  status,
}) {
  const navigation = useNavigation();
  const Habis = "Habis";
  const Tersedia = "Tersedia";
  const [useNilai, setUseNilai] = useState(status === Tersedia);
  const handleToggle = () => {
    const newStatus = useNilai ? Habis : Tersedia;
    setUseNilai(!useNilai);
    const data = { status_food: newStatus };
    axios
      .post(`${API_HOST.url}dashboard/food/${id}`, data, {})
      .then((res) => {
        console.log("berhasil update ketersedian", res);
      })
      .catch((err) => {
        console.log("Gagal ", err);
      });
  };
  return (
    <View style={{ paddingHorizontal: 5, width: "100%" }}>
      {switchValue === "kategori" ? (
        <TouchableOpacity onPress={onPress}>
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

            <FontAwesome size={28} name="angle-right" />
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

          <Switch
            trackColor={{ false: "#767577", true: "green" }}
            onValueChange={handleToggle}
            value={useNilai}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
