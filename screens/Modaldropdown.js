import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

//Problem
//- Issues with position of the dropdown items 
//- When dropdown item picked the positioning of the dropdown becomes crooked
//- Search cannot be customized

function Modaldropdown() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',}}>
      <ModalDropdown
        options={["Hello", "Hi", "Hey"]}
        showSearch={true}
        style={{
          width: "90%",
          borderRadius: 24,
          borderWidth: 2,
          height: "30%",
          alignItems: 'center',
          justifyContent: 'center',
        }}
        textStyle={{textAlign: 'center', fontSize: 16}}
        dropdownStyle={{
          width: "100%",
          marginLeft: "-31%",
          marginTop: "-18.5%",
          borderRadius: 24,
          borderWidth: 2,
          alignItems: "center",
          backgroundColor: 'white',
          elevation: 10,
        }}
      />
    </View>
  );
}
export default Modaldropdown;

const styles = StyleSheet.create({});
