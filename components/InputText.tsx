import { Text, TextInput, View } from "react-native";

export default function InputText({ name, placeholdder }) {
  return (
    <View style={{ width: "90%" }}>
      <Text style={{ fontWeight: "500", fontSize: 15 }}>{name}</Text>
      <TextInput
        style={{
          fontSize: 15,
          paddingHorizontal: 5,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 5,
        }}
        placeholder={placeholdder}
      />
    </View>
  );
}
