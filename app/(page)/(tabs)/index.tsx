import Card from "@/components/Card";
import * as React from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useSession } from "@/app/auth/ctx";

const FirstRoute = () => {
  const { signOut } = useSession();
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text onPress={signOut}>Sign Out</Text>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};
const SecondRoute = () => {
  const { signOut } = useSession();
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text onPress={signOut}>Sign Out</Text>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
