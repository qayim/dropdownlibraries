import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useRoute } from "@react-navigation/native";
import {Entypo} from '@expo/vector-icons';

//so far most promising one
//Problem
//- potential phantom when changing from previous input to new one
//- keyboard changes the height of the dropdown => only when using percentage as the height value

function Selectdropdown({ navigation }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Search");
  const route = useRoute();
  const data = route.params.data;
  const label = [];
  const labelShort = [];
  const labelSingle = [];

  data.map((labeling) => {
    label.push(labeling.label);
  });

  data.map((labeling) => {
    if (labeling.key <= 5) {
      labelShort.push(labeling.label);
    }
  });
  data.map((labeling) => {
    if (labeling.key === 1) {
      labelSingle.push(labeling.label);
    }
  });

  const componentOnTopOfSearch = () => {
    return (
      <View style={{justifyContent: 'center', padding: 20,}}>
        <Text style={{textAlign: 'center'}}>{selected}</Text>
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center", marginVertical: "2%" }}>
      <View>
        <Text>Dropdown with a lot of items</Text>
        <SelectDropdown
          data={label}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            setSelected(selectedItem);
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          renderDropdownIcon={() => {
            return <Entypo name="triangle-down" size={24} color="black" />;
          }}
          dropdownIconPosition="right"
          search={true}
          searchPlaceHolder="Search"
          searchInputTxtStyle={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            elevation: 10,
            marginVertical: "2%",
            backgroundColor: "white",
          }}
          dropdownOverlayColor="transparent"
          buttonStyle={[
            {
              borderRadius: 30,
              elevation: open ? 0 : 20,
              width: "90%",
              backgroundColor: "white",
            },
          ]}
          dropdownStyle={{
            borderRadius: 30,
            borderWidth: 0,
            elevation: 10,
            width: "90%",
            height: "40%",
            marginTop: "-20%",
            backgroundColor: "white",
            position: 'absolute',
            zIndex: 0,
          }}
          //custom prop to send and render the label
          label={componentOnTopOfSearch}
          rowStyle={{
            marginVertical: "2%",
            backgroundColor: "#fff",
            borderBottomColor: "transparent",
            borderWidth: 0,
          }}
          rowTextStyle={{ borderColor: "transparent", borderWidth: 0 }}
        />
      </View>
      <View>
        <Text>Dropdown with a few(5) of items</Text>
        <SelectDropdown
          data={labelShort}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          search={true}
          searchPlaceHolder="Search"
          searchInputTxtStyle={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            elevation: 10,
            marginVertical: "2%",
            backgroundColor: "white",
          }}
          dropdownOverlayColor="transparent"
          buttonStyle={{
            borderRadius: 30,
            elevation: open ? 0 : 10,
            width: "90%",
            backgroundColor: "white",
          }}
          dropdownStyle={{
            borderRadius: 30,
            borderWidth: 0,
            elevation: 10,
            width: "90%",
            height: "40%",
            marginTop: "-20%",
            backgroundColor: "white",
          }}
          rowStyle={{
            marginVertical: "2%",
            backgroundColor: "white",
            borderBottomColor: "transparent",
            borderWidth: 0,
          }}
          rowTextStyle={{ borderColor: "transparent", borderWidth: 0 }}
        />
      </View>
      <View>
        <Text>Dropdown with an item</Text>
        <SelectDropdown
          data={labelSingle}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          search={true}
          searchPlaceHolder="Search"
          searchInputTxtStyle={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            elevation: 10,
            marginVertical: "2%",
            backgroundColor: "white",
          }}
          dropdownOverlayColor="transparent"
          buttonStyle={{
            borderRadius: 30,
            elevation: open ? 0 : 10,
            width: "90%",
            backgroundColor: "white",
          }}
          dropdownStyle={{
            borderRadius: 30,
            borderWidth: 0,
            elevation: 10,
            width: "90%",
            height: 300,
            marginTop: "-20%",
            backgroundColor: "white",
          }}
          rowStyle={{
            marginVertical: "2%",
            backgroundColor: "white",
            borderBottomColor: "transparent",
            borderWidth: 0,
          }}
          rowTextStyle={{ borderColor: "transparent", borderWidth: 0 }}
        />
      </View>
    </View>
  );
}

export default Selectdropdown;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 24,
    width: 370,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 20,
    zIndex: 1,
  },
  boxText: {
    textAlign: 'center',
  },
});
