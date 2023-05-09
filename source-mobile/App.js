import {View, StyleSheet, FlatList, ActivityIndicator, Text, ScrollView, SafeAreaView} from "react-native";
import Header from "./src/components/Header";
import Card from "./src/components/Card";
import Footer from "./src/components/Footer";

function App(){
  return (
	  
	<View>
		<SafeAreaView>
      	<ScrollView>
			<Header/>
	  		<View style={styles.container}>
				<Card nome={"Sao Paulo"} />
				<Card nome={"Rio de janeiro"} />
				<Card nome={"Paris"} />
			</View>
			<Footer/>
      	</ScrollView>
		</SafeAreaView>
	</View>
	);
}
export default App;

const styles = StyleSheet.create({
	
	container:{
		flex: 1,
		backgroundColor: '#e3e0cf',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollView:{
		flex: 1,
		backgroundColor: '#fff',
	}
})