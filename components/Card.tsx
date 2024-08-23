import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Number from "./Number";
import { useNavigation } from "expo-router";

export default function Card({ kode, nama, harga, quantity }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerCardHeader}
      onPress={() => navigation.navigate("OrderDetail")}
    >
      <View>
        <Text style={styles.textCardHeader}>{kode}</Text>
      </View>
      <View style={styles.containerTextDescription}>
        <View style={styles.containerQuantityTitle}>
          <Text style={styles.textQuantity}>{quantity}</Text>
          <Text style={styles.textTitle}>{nama}</Text>
        </View>
        <Number number={harga} />
      </View>

      <View>{/* <Button>Haiii</Button> */}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    opacity: 50,
  },
  containerMargin: { marginHorizontal: 5, marginTop: 2 },
  containerCardHeader: { padding: 10, width: "100%" },
  textCardHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerTextDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerQuantityTitle: {
    display: "flex",
    flexDirection: "row",
  },
  textQuantity: {
    fontSize: 18,
  },
  textTitle: {
    fontSize: 18,
    marginLeft: 10,
  },
});
