import Card from "@/components/Card";
import CardFood from "@/components/CardFood";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Settings({ navigation }) {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
        <CardFood switchValue="kategori" nama="Ayam" />
        <CardFood switchValue="kategori" nama="Bebek" />
        <CardFood switchValue="kategori" nama="Ikan" />
        <CardFood switchValue="kategori" nama="Kuah" />
        <CardFood switchValue="kategori" nama="Tambahan" />
        <CardFood switchValue="kategori" nama="Tambahan Sambal" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
