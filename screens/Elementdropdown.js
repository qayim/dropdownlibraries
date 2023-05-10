import React, { useState } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

 const data = [
   { label: "Item 1", value: "1" },
   { label: "Item 2", value: "2" },
   { label: "Item 3", value: "3" },
   { label: "Item 4", value: "4" },
   { label: "Item 5", value: "5" },
   { label: "Item 6", value: "6" },
   { label: "Item 7", value: "7" },
   { label: "Item 8", value: "8" },
 ];

function Elementdropdown({navigation}){
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    // const route = useRoute();
    // const data = route.params.items;
    
    return (
      <View style={styles.container}>
        <Dropdown
          style={[
            styles.dropdown,
            isFocus
              ? { borderColor: "blue", height: 200, paddingBottom: 150, }
              : { height: 50 },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemContainerStyle={styles.itemContainerStyle}
          containerStyle={styles.containerStyle}
          iconStyle={styles.iconStyle}
          searchContainerStyle={styles.searchStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Search"
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
}

export default Elementdropdown;

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: '10%',
  },
  dropdown: {
    borderRadius: 24,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    elevation: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  searchStyle: {
    backgroundColor: 'grey',
  },
  inputSearchStyle: {
    height: deviceHeight*0.1,
    width: "85%",
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 10,
    borderRadius: 24,
    borderWidth: 2,
    backgroundColor: 'white',
  },
  itemContainerStyle: {
    borderRadius: 24,
  },
  containerStyle: {
    borderWidth: 0,
    marginTop: -150,
    borderRadius: 24,
    backgroundColor: 'white',
    zIndex: -999,
  },
});
