import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const CurrentWeather = ({ weather }) => {
  return (
    <View style={styles.container}>
      {/* Title at the top */}
      <Text style={styles.title}>Météo actuelle</Text>

      <Card style={styles.card}>
        <Card.Content>
        <Text variant="headlineSmall" style={styles.weatherText}>Ville: {weather.name}</Text>
          <Text variant="bodyLarge" style={styles.weatherText}>Température: {weather.main.temp}°C</Text>
          <Text variant="bodyMedium" style={styles.weatherText}>Description: {weather.weather[0].description}</Text>
        </Card.Content>
        <Card.Cover
          source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20, 
    marginTop: 100,
  },
  card: {
    width: 300,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#0C1D29',
  },
  weatherIcon: {
    marginTop: 10,
    width: 70,
    height: 70,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  weatherText: {
    color: 'white'
  }
});

export default CurrentWeather;
