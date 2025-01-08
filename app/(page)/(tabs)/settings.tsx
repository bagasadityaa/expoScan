import Card from "@/components/Card";
import CardFood from "@/components/CardFood";
import { API_HOST } from "@/config/Api";
import axios from "axios";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings({}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("dataaa", data);
  const navigation = useNavigation();
  const saveCategoryId = async (id) => {
    try {
      await AsyncStorage.setItem("categoryId", id.toString());
      console.log("Saved categoryId:", id);
    } catch (e) {
      console.error("Failed to save categoryId:", e);
    }
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_HOST.url}categoryfood`);
        setData(response.data.meta.message);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const [useNilai, setUseNilai] = useState(status === Tersedia);
  // const handleToggle = () => {
  //   const newStatus = useNilai ? Habis : Tersedia;
  //   setUseNilai(!useNilai);
  //   const data = { status_food: newStatus };
  //   axios
  //     .post(`${API_HOST.url}dashboard/food/${id}`, data, {})
  //     .then((res) => {
  //       console.log("berhasil update ketersedian", res);
  //     })
  //     .catch((err) => {
  //       console.log("Gagal ", err);
  //     });
  // };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            // backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 8,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              // backgroundColor: "green",
              display: "flex",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Status Toko</Text>
          </View>
          <Switch
            // style={{ backgroundColor: "yellow" }}
            value={isEnabled}
            onValueChange={toggleSwitch}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((item, index) => (
            <CardFood
              key={index}
              onPress={async () => {
                console.log("Navigating to Ketersediaan with ID:", item.id); // Debug log
                await saveCategoryId(item.id);
                navigation.navigate("Ketersediaan");
              }}
              switchValue="kategori"
              nama={item.nama_kategori}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
