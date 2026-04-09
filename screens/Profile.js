import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* AVATAR */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
      </View>

      {/* INFO */}
      <View style={styles.infoCard}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.job}>Mobile Developer</Text>

        <Text style={styles.desc}>
          I have above 5 years of experience in mobile apps development
        </Text>

        {/* SIGN OUT */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.replace("SignIn")}
        >
          <Text style={styles.btnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    height: 180,
    backgroundColor: "#00a8cc",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  avatarContainer: {
    alignItems: "center",
    marginTop: -50,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },

  infoCard: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  job: {
    color: "#00a8cc",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  },

  btn: {
    backgroundColor: "#f39c12",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 15,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});