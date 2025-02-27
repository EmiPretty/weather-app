import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper'; 

const Forecast = ({ forecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.previousWeather}>Previous Weather</Text>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        {forecast.list.map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Text style={styles.date}>
                {new Date(item.dt * 1000).toLocaleString()}
              </Text>
              <Text style={styles.temp}>Température: {item.main.temp}°C</Text>
              <Text>Description: {item.weather[0].description}</Text>
            </Card.Content>
            <Card.Cover
              source={{
                uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
              }}
              style={styles.weatherIcon}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  previousWeather: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, 
    marginLeft: 10, 
    marginLeft: 20,  
  },
  scrollView: {
    padding: 10,
  },
  card: {
    marginHorizontal: 10,
    padding: 15,
    height: 180,
    backgroundColor: '#F3F3F3'
  },
  weatherIcon: {
    marginTop: 10,
    width: 70,
    height: 70,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  date: {
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Forecast;
