import React from "react";
import { StyleSheet, FlatList, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Set the width
console.log(width);

function App() {
  const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
    { id: 7, name: "G" },
    { id: 8, name: "H" },
    { id: 9, name: "I" },
    { id: 10, name: "J" },
  ];

  return (
    <View style={styles.back}>
      {/* Header */}
      <Text style={styles.head}>React Native FlatList</Text>

      {/* Horizontal Banner List */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.banner}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.horizontalList}
      />

       

      {/* Vertical List */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.item}>{`${item.id} ${item.name}`}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.verticalList}

        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray' }} />}


      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 25,
  },
  head: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginVertical: 10,
  },
  horizontalList: {

    // paddingVertical: 20,
    paddingHorizontal: 10,
  },
  verticalList: {
    paddingBottom: 20,
    // marginTop: 20,
  },
  banner: {
    width: 375, // Reduced width to leave space between items
    height: 150,
    backgroundColor: "pink",
    marginRight: 10,
    borderRadius: 15,
    marginBottom: 120,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "red",
    color: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 20,
    borderRadius: 10,
    textAlign: "center",
  },
});
