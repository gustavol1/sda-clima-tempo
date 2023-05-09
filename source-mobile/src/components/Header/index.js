import {View, StyleSheet, FlatList, ActivityIndicator, Text, ScrollView, SafeAreaView} from "react-native";

function Header(){
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.texto}>Previsão do tempo</Text>
                <Text style={styles.informacao}></Text>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    informacao:{
    fontSize: 17,
    color: '#fff'
    
    },
    header:{
        height: 100,
        // backgroundColor: '#006EB6',
         backgroundColor: '#c5d5cb',
        alignItems: "center",
        justifyContent: 'center',
    },
    texto:{
        paddingTop: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
})