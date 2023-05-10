import React, { Component, useRef } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useRoute } from "@react-navigation/native";

//Problem
//- Cannot style and it's more of a pop up rather than a dropdown

function Picker({navigation}) {
    const [selected, setSelected] = useState();
    const pickerRef = useRef();

    function open(){
        pickerRef.current.focus();
    }

    function close(){
        pickerRef.current.blur();
    }

    return (
        <Picker
            ref={pickerRef}
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => 
            setSelected(itemValue)
            }
        >
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="Javascript" value="js"/>
        </Picker>
    )
  
}

export default Picker;

const styles = StyleSheet.create({})
