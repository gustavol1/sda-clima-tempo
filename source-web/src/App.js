import "./app.css";
import React, { useState } from "react";
import axios from "axios";
import "./clock.js";
import Card2 from './components/card2';
import Card3 from './components/card3';


const App = () => {
	const [temperature, setTemperature] = useState("");
	const [city, setCity] = useState("sao paulo");
	const [desc, setDesc] = useState("");
	const [name, setName] = useState("");
	const [humidity, setHumidity] = useState("");
	const [visibility, setVisibility] = useState("");
	const [windspeed, setWineSpeed] = useState("");
	const [wicon, setWicon] = useState("");
	const getWeatherData = () => {
		axios({
			method: "GET",
			url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e203317f0df5474c05874e35b030eda3`,
		})
			.then((response) => {
				setTemperature(Math.round(response.data.main.temp - 273.15));
				setDesc(response.data.weather[0].description);
				setName(response.data.name);
				setHumidity(response.data.main.humidity);
				setVisibility(response.data.visibility / 1000);
				setWineSpeed(response.data.wind.speed);
				setWicon(response.data.weather[0].icon);
				console.log(response);
			})
			.catch((error) => {});
	};

	return (
		<div
			onLoad={() => {
				getWeatherData(city);
			}}
			className="background"
		>
			<div className="header">
				<p>Previsao do Tempo</p>
			</div>
          
			<div className="container">
		
				<div id="card" className="weather">
					<div className="details">
						<div className="temp">
							{temperature}
							<span>&deg;</span>
						</div>
						<div className="right">
							<div id="summary">{desc}</div>
							<div style={{ fontWeight: "bold", marginTop: "4px" }}>{name}</div>
						</div>
					</div>
					<img className="weatherimg" alt="image1" src={`${wicon}.svg`} />
					<div className="infos">
						<img
							alt="humidity1"
							className="humidityimg"
							style={{ width: "5", height: "5" }}
							src="humidity.svg"
						></img>
						<div className="tempmin">Max: 26</div>
						<div className="tempmax">Min: 17</div>
						<div className="uv">Índice UV: 1</div>
						<div className="humidity">Umidade {humidity}%</div>
						<img
							alt="visibility1"
							className="visibilityimg"
							style={{ width: "5", height: "5" }}
							src="visibility.svg"
						></img>
						<div className="visibility">Sensação: 20{}</div>
						<img
							alt="windspeed1"
							className="windimg"
							style={{ width: "5", height: "5" }}
							src="wind.svg"
						></img>
						<div className="windspeed">Sens{windspeed} </div>
					</div>
				</div>
			</div>
            <div className="container">
                <Card2 />
            </div>
            <div className="container">
                <Card3 />
            </div>
			<div className="footer">
				<p>Copyright Clima</p>
			</div>
        </div>
	);
};



export default App;
