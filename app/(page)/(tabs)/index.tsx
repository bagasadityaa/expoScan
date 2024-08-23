import Card from "@/components/Card";
import * as React from "react";
import { API_HOST } from "@/config/Api";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useSession } from "@/app/auth/ctx";
import axios from "axios";
const FirstRoute = () => {
  const { signOut } = useSession();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [daiti, setDaiti] = React.useState(["apple", "jeruk"]);
  const diti = "ini data";

  console.log(diti);
  console.log(daiti);
  console.log("dataaa", data);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_HOST.url}dashboard/order`);
        setData(response.data.data.data);
        console.log("success food", response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text onPress={signOut}>Sign Out</Text> */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data.map((item, index) => (
          <>
            <Card
              key={index}
              harga={item.total_harga}
              kode={item.code}
              nama={item.name}
            />
          </>
        ))
      )}
    </ScrollView>
  );
};
const SecondRoute = () => {
  const { signOut } = useSession();
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text onPress={signOut}>Sign Out</Text> */}
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
      <Card kode="#400" nama="Ayam Bakar" quantity="x2" harga="Rp 15000" />
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
