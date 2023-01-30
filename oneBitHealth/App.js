import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 
'react-native';
import Title from './src/componentes/title';
import Form from './src/componentes/form';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar barStyle = "auto"
        backgroundColor = "#fcf"
        translucent = {false}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fcf',
  },
});
