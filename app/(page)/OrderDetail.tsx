import Number from "@/components/Number";
import { API_HOST } from "@/config/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "expo-router";
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
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getOrderId = async () => {
      try {
        const id = await AsyncStorage.getItem("orderId");
        if (id !== null) {
          setOrderId(id);
          // console.log("orderId disimpan", id);
        }
      } catch (e) {
        console.error("failed", e);
      }
    };
    getOrderId();
  }, []);
  // console.log("orderId", orderId);
  // console.log(data);
  useEffect(() => {
    if (!orderId) return;

    const fetchData = async () => {
      try {
        const url = `${API_HOST.url}dashboard/order/${orderId}`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer a5sd5qw85A5a5wA55W`,
          },
        });

        const orderData = response.data.data.order_item;
        const idOrder = response.data.data;

        setData(orderData);
        setId(idOrder);
      } catch (error) {
        console.error("Error fetching order data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  const buttonSelesai = async () => {
    setLoading(true);

    try {
      const data = { status_pesanan: "selesai" };

      console.log("Data yang dikirim:", data); // Log data yang dikirim
      const url = `${API_HOST.url}dashboard/orderAllOne/${orderId}`;

      const response = await axios.post(
        url,
        data, // Data dikirim sebagai body request
        {
          headers: {
            Authorization: `Bearer a5sd5qw85A5a5wA55W`,
            "Content-Type": "application/json", // Pastikan tipe konten sesuai
          },
        }
      );

      console.log("Berhasil update data:", response.data);
      navigation.navigate("index", { refresh: true });
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat mengupdate data:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();
  console.log("ini id", id);
  console.log("orderId", orderId);
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
          #{id.id}
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
                paddingHorizontal: 10,
              }}
            >
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
                      style={{
                        marginRight: 7,
                        fontSize: 20,
                        fontWeight: "600",
                      }}
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
              {item.note === null ? (
                <></>
              ) : (
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  {item.note}
                </Text>
              )}
            </View>
          ))
        )}
      </View>
      <View
        style={{
          marginHorizontal: "3%",
          borderWidth: 1,
          marginTop: 10,
          padding: 3,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20 }}>Status Pesanan</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Metode Pembayaran:
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {id.metode_pembayaran}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Status Transaksi
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {id.status_pesanan}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: "3%",
          marginTop: "2%",
          borderRadius: 50,
          backgroundColor: "brown",
        }}
        onPress={buttonSelesai}
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
