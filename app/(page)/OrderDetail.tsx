import Number from "@/components/Number";
import { API_HOST } from "@/config/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OrderDetail() {
  const [orderId, setOrderId] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getOrderId = async () => {
      try {
        const id = await AsyncStorage.getItem("orderId");
        if (id !== null) {
          setOrderId(id);
          console.log("orderId disimpan", id);
        }
      } catch (e) {
        console.error("failed", e);
      }
    };
    getOrderId();
  }, []);
  console.log("orderId", orderId);
  console.log(data);
  useEffect(() => {
    if (!orderId) return;

    const fetchData = async () => {
      try {
        const url = `${API_HOST.url}dashboard/order/${orderId}`;
        console.log("response url:", url);
        const response = await axios.get(url);
        const orderData = response.data.data.order_item;
        setData(orderData);
        console.log(orderData);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [orderId]);
  return (
    <View style={{ height: "100%", width: "100%", marginTop: 5 }}>
      {/* header       */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          #400
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: "3%",
          borderWidth: 1,
          padding: 3,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20 }}>Ringkasan Pesanan</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          data.map((item, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ marginRight: 7, fontSize: 20, fontWeight: "600" }}
                  >
                    x{item.quantity}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.nama_food}
                  </Text>
                </View>
                <Number number={item.harga_food} style={{ fontSize: 20 }} />
              </View>
            </View>
          ))
        )}
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: "3%",
          marginTop: "2%",
          borderRadius: 50,
          backgroundColor: "brown",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            color: "white",
            padding: 10,
            textAlign: "center",
          }}
        >
          Pesanan sudah siap
        </Text>
      </TouchableOpacity>
    </View>
  );
}
