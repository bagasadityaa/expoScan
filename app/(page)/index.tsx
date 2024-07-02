import { StyleSheet, Text, View } from "react-native";

export default function app() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHai}>
        <Text>Haii ini app</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  containerHai: {
    marginTop: "9%",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
});
