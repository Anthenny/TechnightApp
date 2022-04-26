import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormPage from './pages/FormPage';
import SuccesPage from './pages/SuccesPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" component={FormPage} />
          <Stack.Screen name="Succes" component={SuccesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
