import { useSession } from "@/app/auth/ctx";
import Card from "@/components/Card";
import { API_HOST } from "@/config/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "expo-router";
import * as React from "react";
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
const FirstRoute = () => {
  const { signOut } = useSession();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // console.log("dataaa", data);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_HOST.url}dashboard/order?status_pesanan=sedang_diproses`
        );
        setData(response.data.data.data);
        // console.log("success food", response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const navigation = useNavigation();
  const saveOrderId = async (id) => {
    try {
      await AsyncStorage.setItem("orderId", id.toString());
      console.log("order tersimpan:", id);
    } catch (e) {
      console.error("Failed to save order:", e);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text onPress={signOut}>Sign Out</Text> */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data.map((item, index) => (
          <Card
            key={item.id}
            harga={item.total_harga}
            onPress={async () => {
              console.log("Id order sudah disimpan:", item.id);
              await saveOrderId(item.id);
              navigation.navigate("OrderDetail");
            }}
            status_pesanan={item.status_pesanan}
            kode={item.id}
            nama={item.name}
          />
        ))
      )}
    </ScrollView>
  );
};
const SecondRoute = () => {
  const { signOut } = useSession();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // console.log("dataaa", data);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_HOST.url}dashboard/order?status_pesanan=selesai`
        );
        setData(response.data.data.data);
        // console.log("success food", response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const navigation = useNavigation();
  const saveOrderId = async (id) => {
    try {
      await AsyncStorage.setItem("orderId", id.toString());
      console.log("order tersimpan:", id);
    } catch (e) {
      console.error("Failed to save order:", e);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text onPress={signOut}>Sign Out</Text> */}

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data.map((item, index) => (
          <Card
            key={item.id}
            harga={item.total_harga}
            onPress={async () => {
              console.log("Id order sudah disimpan:", item.id);
              await saveOrderId(item.id);
              navigation.navigate("OrderDetail");
            }}
            kode={item.id}
            nama={item.name}
          />
        ))
      )}
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Dalam Proses" },
    { key: "second", title: "Selesai" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ marginTop: "10%" }}
    />
  );
}
