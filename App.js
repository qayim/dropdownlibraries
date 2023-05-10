import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from "./screens/Main";
import DropdownPicker from "./screens/DropdownPicker";
import Selectlist from "./screens/Selectlist";
import { Picker } from '@react-native-picker/picker';
import Modaldropdown from './screens/Modaldropdown';
import Selectdropdown from './screens/Selectdropdown';
import Elementdropdown from './screens/Elementdropdown';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="DropdownPicker" component={DropdownPicker} />
          <Stack.Screen name="SelectList" component={Selectlist} />
          <Stack.Screen name="Picker" component={Picker} />
          <Stack.Screen name="Modal" component={Modaldropdown} />
          <Stack.Screen name="SelectDropdown" component={Selectdropdown} />
          <Stack.Screen name="ElementDropdown" component={Elementdropdown} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

