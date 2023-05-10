import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

function Main({ navigation }) {
  const [items, setItems] = useState([
    { key: 1, label: "Apple ", value: "apple" },
    { key: 2, label: "Banana", value: "banana" },
    { key: 3, label: "Pine", value: "pine" },
    { key: 4, label: "A", value: "a" },
    { key: 5, label: "B", value: "b" },
    { key: 6, label: "C", value: "c" },
    { key: 7, label: "D", value: "d" },
    { key: 8, label: "E", value: "e" },
    { key: 9, label: "F", value: "f" },
    { key: 10, label: "G", value: "g" },
    { key: 11, label: "H", value: "h" },
    { key: 12, label: "I", value: "i" },
    { key: 13, label: "J", value: "j" },
    { key: 14, label: "K", value: "k" },
    { key: 15, label: "L", value: "l" },
    { key: 16, label: "M", value: "m" },
    { key: 17, label: "N", value: "n" },
    { key: 18, label: "O", value: "o" },
    { key: 19, label: "P", value: "p" },
    { key: 20, label: "Q", value: "q" },
    { key: 21, label: "R", value: "r" },
    { key: 22, label: "S", value: "s" },
    { key: 23, label: "S", value: "s" },
    { key: 24, label: "T", value: "T" },
    { key: 25, label: "U", value: "U" },
    { key: 26, label: "V", value: "V" },
    { key: 27, label: "W", value: "W" },
    { key: 28, label: "X", value: "X" },
    { key: 29, label: "Y", value: "Y" },
  ]);

  function dropdownPickerHandler() {
    navigation.navigate("DropdownPicker", {
      items: items,
    });
  }

  function selectListHandler() {
    navigation.navigate("SelectList", {
      data: items,
    });
  }

  function pickerHandler() {
    navigation.navigate("Picker", {
      data: items,
    });
  }

  function modalDropdownHandler() {
    navigation.navigate("Modal", {
      data: items,
    });
  }

  function selectDropdownHandler() {
    navigation.navigate("SelectDropdown", {
      data: items,
    });
  }

  function elementDropdownHandler() {
    navigation.navigate("ElementDropdown", {
      data: items,
    });
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={dropdownPickerHandler}>
          <View style={styles.button}>
            <Text>DropdownPicker library</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={selectListHandler}>
          <View style={styles.button}>
            <Text>SelectList library</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={pickerHandler}>
          <View style={styles.button}>
            <Text>Picker library</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={modalDropdownHandler}>
          <View style={styles.button}>
            <Text>ModalDropdown library</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={selectDropdownHandler}>
          <View style={styles.button}>
            <Text>SelectDropdown library</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={elementDropdownHandler}>
          <View style={styles.button}>
            <Text>ElementDropdown library</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  buttonContainer:{
    margin: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    padding: '5%',
    alignItems: "center",
    justifyContent: "center",
  },
});
