import {View, StyleSheet, FlatList, ActivityIndicator, Text, ScrollView, SafeAreaView} from "react-native";

export default function Footer(){
    return(
        <View>
            <View style={styles.Footer}>
                <Text style={styles.footer}>&copy; Copyright 2022</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Footer:{
        height: 70,
        backgroundColor: '#c5d5cb',
        alignItems: "center",
        justifyContent: 'center',
    },
    footer:{
        paddingTop: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
