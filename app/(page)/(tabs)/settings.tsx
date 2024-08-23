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
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings({}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("dataaa", data);
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

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
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
