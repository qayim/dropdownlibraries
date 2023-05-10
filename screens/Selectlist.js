import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

//PROMISING
//- MISSING LABEL FOR INPUT
//Problem
//- Cannot touch the search bar when configure it inside the dropdown
//- Search bar is under the dropdown???
//can

const deviceWidth = Dimensions.get("screen").width;

function Selectlist({ navigation }) {
  const [selected, setSelected] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={{ margin: "10%", alignItems: "center" }}>
      <SelectList
        setSelected={setSelected}
        data={data}
        onSelect={() => alert("Selected: " + selected)}
        placeholder="Location"
        searchPlaceholder="Location2"
        inputStyles={{
          zIndex: -100,
        }}
        boxStyles={{
          borderRadius: 24,
          width: isSelected ? deviceWidth * 0.9 : deviceWidth * 0.8,
          marginHorizontal: deviceWidth * 0.05,
          borderWidth: 0,
          backgroundColor: "white",
          elevation: 10,
          zIndex: 10,
        }}
        dropdownStyles={{
          borderRadius: 30,
          width: deviceWidth * 0.9,

          marginTop: -deviceWidth * 0.15,
          paddingTop: deviceWidth * 0.15,
          borderWidth: 0,
          backgroundColor: "white",
          elevation: 10,
        }}
      />
    </View>
  );
}

export default Selectlist;

const styles = StyleSheet.create({});
