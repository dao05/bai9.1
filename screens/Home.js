import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  { id: 1, name: "Pizza", img: "https://i.imgur.com/0umadnY.jpg" },
  { id: 2, name: "Burger", img: "https://i.imgur.com/UPrs1EW.jpg" },
  { id: 3, name: "Steak", img: "https://i.imgur.com/MABUbpDl.jpg" },
  { id: 4, name: "Drink", img: "https://i.imgur.com/2nCt3Sbl.jpg" },
];

const popular = [
  {
    id: 1,
    name: "Pizza",
    price: "$10",
    origin: "Italy",
    img: "https://i.imgur.com/0umadnY.jpg",
  },
  {
    id: 2,
    name: "Burger",
    price: "$8",
    origin: "USA",
    img: "https://i.imgur.com/UPrs1EW.jpg",
  },
  {
    id: 3,
    name: "Steak",
    price: "$15",
    origin: "France",
    img: "https://i.imgur.com/MABUbpDl.jpg",
  },
];

const popularLarge = [
  { id: 1, img: "https://i.imgur.com/0umadnY.jpg" },
  { id: 2, img: "https://i.imgur.com/UPrs1EW.jpg" },
  { id: 3, img: "https://i.imgur.com/MABUbpDl.jpg" },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* HEADER */}
      <Text style={styles.header}>Explorer</Text>

      {/* SEARCH + LOCATION */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search..."
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.locationBtn}>
          <Ionicons name="location-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* TOP CATEGORIES */}
      <View style={styles.rowTitle}>
        <Text style={styles.title}>Top Categories</Text>
        <Ionicons name="options-outline" size={20} />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Image source={{ uri: item.img }} style={styles.catImg} />
            <Text>{item.name}</Text>
          </View>
        )}
      />

      {/* POPULAR ITEMS */}
      <View style={styles.rowTitle}>
        <Text style={styles.title}>Popular Items</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>


      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popular}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.cardImg} />
            <View style={styles.cardInfo}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text style={styles.origin}>{item.origin}</Text>
            </View>
          </View>
        )}
      />
  <View style={styles.rowTitle}>
        <Text style={styles.title}>Popular Items</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      {/* POPULAR LARGE */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularLarge}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item.img }} style={styles.largeImg} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 30,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#ddd",
  },

  input: {
    marginLeft: 5,
    flex: 1,
  },

  locationBtn: {
    marginLeft: 10,
    backgroundColor: "#f39c12",
    padding: 10,
    borderRadius: 10,
  },

  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
  },

  viewAll: {
    color: "#f39c12",
  },

  category: {
    alignItems: "center",
    marginRight: 15,
    marginTop: 10,
  },

  catImg: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  card: {
   flexDirection: "row",
  backgroundColor: "#fff",
  padding: 10,
  borderRadius: 10,
  marginRight: 10,
  marginTop: 10,
  width:230,
  height:130,
  borderWidth: 1,
  borderColor: "#ddd",
  },

  cardImg: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  cardInfo: {
    marginLeft: 10,
    justifyContent: "flex-start",
  },

  foodName: {
    fontWeight: "bold",
  },

  origin: {
    color: "#888",
  },

  largeImg: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 15,
  },
});
