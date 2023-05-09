import { useState, useEffect } from "react";
import api from '../../services/api.js';
import {View, Image, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native";


export default function Card(props) {
    const [icon, setIcon] = useState();
	const [temp, setTemp] = useState();
	const [tempmin, setTempmin] = useState();
	const [tempmax, setTempmax] = useState();
	const [senset, setSenset] = useState();
	const [umidade, setUmidade] = useState();
	const [uv, setUv] = useState();

    useEffect(()=> {
         async function loadCidade() {
						const response = await api.get(`forecast.json?key=870e327d30f5486e914120742220509&q=${props.nome}&days=1&aqi=no&alerts=no`);

                        const data = response.data;
                        setIcon(data.current.condition.icon);
                        setTemp(data.current.temp_c);
                        setTempmax(data.forecast.forecastday[0].day.maxtemp_c);
                        setTempmin(data.forecast.forecastday[0].day.mintemp_c);
                        setSenset(data.current.feelslike_c);
                        setUmidade(data.current.humidity);
                        setUv(data.current.uv);

					}
            loadCidade();
    }, [])

    return (
			<View style={styles.card}>
			
				<View style={styles.teste}>
				<Image style={styles.img} source={{ uri: `http:${icon}` }}/>
				<Text style={styles.temp}>{temp}º</Text>
				<Text style={styles.cidade}>{props.nome}</Text>
				</View>
				<Text style={styles.max}><Text style={styles.maxemin}>Máxima: </Text>{tempmax}</Text>
				
				<Text style={styles.max}><Text style={styles.maxemin}>Mínima: </Text> {tempmin}</Text>
				<Text style={styles.max}><Text style={styles.maxemin}>Umidade: </Text>{umidade}%</Text>
				<Text style={styles.max}><Text style={styles.maxemin}>Sensação: </Text>{senset}</Text>
				<Text style={styles.max}><Text style={styles.maxemin}>UV: </Text>{uv}</Text>
			</View>
		);
}

const styles = StyleSheet.create({
	
	maxemin:{
		fontWeight: 'bold',
		color: '#fff',
	},
	
	max:{
		bottom: 15,
		fontSize: 17,
		display: "flex",
		color: 'gray',
		letterSpacing: 2,
	},
	card:{
		width: 300,
		height: 280,
		padding: 20,
		marginBottom: 50,
		backgroundColor: '#001f3f',
		borderRadius: 20,
		marginTop: 20,
		// display: 'inline-flex',
		// margin: 150,		
		
	},
	teste:{
		flex: 1,
		flexWrap: 'wrap',
		alignItems: 'flex-end',
		flexDirection: "row",
		justifyContent: 'flex-end',
	},
	img:{
		width: 80,
		height: 75,
		marginRight: 110,
	},
	temp:{
		fontSize: 40,
		color: '#fff',
	},
	cidade:{
		fontSize: 25,
		marginLeft: 80,
		color: '#fff',
	}

})
