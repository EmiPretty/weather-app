import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

const API_KEY = '52bf317c5d31f0d582d32ad15eaad27e';

export default function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
  
        const { latitude, longitude } = location.coords;
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        setWeather(weatherResponse.data);
  
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        setForecast(forecastResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données météo:", error); // Ajoute cette ligne pour plus de détails
        setErrorMsg('Error fetching weather data');
      }
    })();
  }, []);
  
  

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (!weather || !forecast) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CurrentWeather weather={weather}/>
      <Forecast forecast={forecast} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});