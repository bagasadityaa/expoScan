import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { useSession } from "./auth/ctx";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [sign, setSign] = useState();
  const { signIn } = useSession();
  const handleLogin = () => {
    // Tambahkan logika login di sini
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: isEmailFocused ? "green" : "blue" }, // Warna border dinamis
        ]}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: isPasswordFocused ? "green" : "blue" }, // Warna border dinamis
        ]}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
