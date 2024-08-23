import Number from "@/components/Number";
import { Text, View } from "react-native";

export default function OrderDetail() {
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

        <View
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
              <Text style={{ marginRight: 7, fontSize: 20, fontWeight: "600" }}>
                x4
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Ayam Bakar
              </Text>
            </View>
            <Number number="40000" style={{ fontSize: 20 }} />
          </View>
        </View>
        <View
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
              <Text style={{ marginRight: 7, fontSize: 20, fontWeight: "600" }}>
                x4
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Ayam Bakar
              </Text>
            </View>
            <Number number="40000" style={{ fontSize: 20 }} />
          </View>
        </View>
        <View
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
              <Text style={{ marginRight: 7, fontSize: 20, fontWeight: "600" }}>
                x4
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Ayam Bakar
              </Text>
            </View>
            <Number number="40000" style={{ fontSize: 20 }} />
          </View>
        </View>
      </View>
    </View>
  );
}
