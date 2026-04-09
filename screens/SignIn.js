import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        placeholder="Enter your email here!"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password here!"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
  style={styles.signInBtn}
  onPress={() => navigation.replace("Main")}
>
  <Text style={styles.signInText}>Sign In</Text>
</TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.googleBtn}>
          <Text>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookBtn}>
          <Text style={{ color: "#fff" }}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signup}>
        Not yet a member? <Text style={{ color: "#f39c12" }}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
  },

  forgot: {
    textAlign: "right",
    color: "#f39c12",
    marginTop: 5,
  },

  signInBtn: {
    backgroundColor: "#f39c12",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },

  signInText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  or: {
    textAlign: "center",
    marginVertical: 15,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  googleBtn: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },

  facebookBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginLeft: 5,
    backgroundColor: "#3b5998",
    alignItems: "center",
  },

  signup: {
    textAlign: "center",
    marginTop: 20,
  },
});