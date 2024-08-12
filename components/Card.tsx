import { Button, StyleSheet, Text, View } from "react-native";

export default function Card({ kode, nama, harga, quantity }) {
  return (
    <View style={styles.containerCardHeader}>
      <View>
        <Text style={styles.textCardHeader}>{kode}</Text>
      </View>
      <View style={styles.containerTextDescription}>
        <View style={styles.containerQuantityTitle}>
          <Text style={styles.textQuantity}>{quantity}</Text>
          <Text style={styles.textTitle}>{nama}</Text>
        </View>
        <Text>{harga}</Text>
      </View>

      <View>{/* <Button>Haiii</Button> */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    opacity: 50,
  },
  containerMargin: { marginHorizontal: 5, marginTop: 2 },
  containerCardHeader: { backgroundColor: "green", padding: 10, width: "100%" },
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
