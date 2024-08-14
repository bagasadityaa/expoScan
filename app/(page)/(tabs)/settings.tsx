import Card from "@/components/Card";
import CardFood from "@/components/CardFood";
import { API_HOST } from "@/config/Api";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

export default function Settings({ navigation, route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("dataaa", data);

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
              id={item.id}
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
