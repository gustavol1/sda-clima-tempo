import "./app.css";
import React, { useState } from "react";
import axios from "axios";
import "./clock.js";

const App = () => {
	const [temperature, setTemperature] = useState("");
	const [city, setCity] = useState("São Paulo");
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
			<div className="container">

				<br></br>
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
						<div className="humidity">Umidade {humidity}%</div>
						<img
							alt="visibility1"
							className="visibilityimg"
							style={{ width: "5", height: "5" }}
							src="visibility.svg"
						></img>
						<div className="visibility">Visibilidade {visibility} km</div>
						<img
							alt="windspeed1"
							className="windimg"
							style={{ width: "5", height: "5" }}
							src="wind.svg"
						></img>
						<div className="windspeed">VM {windspeed} km</div>
					</div>
				</div>

				{/* Fim do card 1 */}

				<div id="card" className="weather">
					<div className="details">
						<div className="temp">
							{temperature}
							<span>&deg;</span>
						</div>
            <h3></h3>
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
						<div className="humidity">Umidade {humidity}%</div>
						<img
							alt="visibility1"
							className="visibilityimg"
							style={{ width: "5", height: "5" }}
							src="visibility.svg"
						></img>
						<div className="visibility">Visibilidade {visibility} km</div>
						<img
							alt="windspeed1"
							className="windimg"
							style={{ width: "5", height: "5" }}
							src="wind.svg"
						></img>
						<div className="windspeed">VM {windspeed} km</div>
					</div>
				</div>

				{/* Fim do Card 2 */}

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
						<div className="humidity">Umidade {humidity}%</div>
						<img
							alt="visibility1"
							className="visibilityimg"
							style={{ width: "5", height: "5" }}
							src="visibility.svg"
						></img>
						<div className="visibility">Visibilidade {visibility} km</div>
						<img
							alt="windspeed1"
							className="windimg"
							style={{ width: "5", height: "5" }}
							src="wind.svg"
						></img>
						<div className="windspeed">VM {windspeed} km</div>
					</div>
				</div>

				{/* Fim do card 3 */}
			</div>
		</div>
	);
};

export default App;
