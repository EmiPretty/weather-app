import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, ProgressBar } from 'react-native-paper';
import { Animated } from 'react-native';

const CurrentWeather = ({ weather }) => {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const temperature = weather.main.temp;
  const tempPercent = Math.min((temperature + 10) / 50, 1);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}> 
      <Text variant="headlineMedium" style={styles.title}>Current Weather 🌞</Text>

      <Card mode="elevated" style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.weatherText}>🌍 {weather.name}</Text>
          <Text variant="bodyLarge" style={styles.weatherText}>🌡️ {temperature}°C</Text>
          <Text variant="bodyMedium" style={styles.weatherText}>☁️ {weather.weather[0].description}</Text>
          <ProgressBar progress={tempPercent} color="#FFD700" style={styles.progressBar} />
        </Card.Content>
        <Card.Cover
          source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    color: '#1E2A38', 
  },
  card: {
    width: 320,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#2C3E50', 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginBottom:30,
  },
  weatherIcon: {
    marginTop: 15,
    width: 80,
    height: 80,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  weatherText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  progressBar: {
    marginTop: 10,
    height: 8,
    borderRadius: 5,
    width: '100%',
  }
});

export default CurrentWeather;
