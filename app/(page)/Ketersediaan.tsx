import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardFood from "@/components/CardFood";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_HOST } from "@/config/Api";

export default function Ketersediaan({ navigation }) {
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    const getCategoryId = async () => {
      try {
        const id = await AsyncStorage.getItem("categoryId");
        if (id !== null) {
          setCategoryId(id); // Set categoryId from AsyncStorage
          console.log("Retrieved categoryId:", id);
        }
      } catch (e) {
        console.error("Failed to load categoryId:", e);
      }
    };
    getCategoryId();
  }, []);

  useEffect(() => {
    if (!categoryId) return; // Pastikan categoryId ada sebelum memanggil fetchData

    const fetchData = async () => {
      try {
        const url = `${API_HOST.url}categoryfood/${categoryId}`;
        console.log("Requesting URL:", url); // Log URL yang diminta

        const response = await axios.get(url);
        const foodsData = response.data.meta.message.foods;

        setData(foodsData);
        console.log("Data fetched:", foodsData); // Log data yang diterima
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        ); // Log lebih jelas
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((item, index) => (
            <CardFood key={index} nama={item.nama_food} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
