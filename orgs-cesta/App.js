import { SafeAreaView, StatusBar, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import Cesta from './assets/cesta/index';
import {cesta} from './assets/mocks/mocks';
import {
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })
  if (!fonteCarregada) {
    return <AppLoading/>;
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <Cesta{...cesta}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


