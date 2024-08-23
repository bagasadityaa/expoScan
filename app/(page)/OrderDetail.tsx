import { Text, View } from "react-native";

export default function OrderDetail() {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}>
      {/* header */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          backgroundColor: "yellow",
        }}
      >
        <View style={{ padding: 10, backgroundColor: "brown" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            #400
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            width: "85%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Menunggu Konfirmasi
          </Text>
        </View>
      </View>
    </View>
  );
}
