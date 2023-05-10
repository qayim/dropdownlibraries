import { Text, StyleSheet, View } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useRoute } from "@react-navigation/native";

//Problem
//- Cannot scroll if there is too much data in the dropdown list

function DropdownPicker({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const route = useRoute();
  const data = route.params.items;
  const [items, setItems] = useState(data);

  return (
    // <View>
    <View style={{ margin: "10%" }}>
      
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setItems={setItems}
        setValue={setValue}
        placeholder="Hello"
        searchable={true}
        searchPlaceholder="Search"
        listMode="SCROLLVIEW"
        scrollViewProps={{
          nestedScrollEnabled: true,
        }}
        zIndex={100}
        style={{
          borderRadius: 30,
          elevation: 10,
          borderWidth: 0,
          alignContent: "center",
          padding: "5%",
        }}
        labelStyle={{
          fontSize: 17,
          textAlign: "center",
        }}
        searchContainerStyle={{
          borderBottomColor: "transparent",
        }}
        searchTextInputStyle={{
          borderRadius: 30,
          textAlign: "center",
          borderColor: "#EEEEF6",
        }}
        placeholderStyle={{
          textAlign: "center",
        }}
        dropDownContainerStyle={{
          borderRadius: 30,
          elevation: 10,
          padding: "2%",
          textAlign: "left",
          //borderTopWidth: 0,
          borderWidth: 0,
          //borderTopColor: "transparent",
        }}
      />
    </View>
    // </View>
  );
}

export default DropdownPicker;

const styles = StyleSheet.create({});
