import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Chip } from 'react-native-paper'; 

const Forecast = ({ forecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.previousWeather}>Weather Forecast</Text>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
        {forecast.list.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Text style={styles.date}>
                  {new Date(item.dt * 1000).toLocaleString()}
                </Text>
                <Text style={styles.temp}>Temperature: {item.main.temp}°C</Text>
                <Text style={styles.description}>Description: {item.weather[0].description}</Text>

                <Chip style={styles.chip}>{item.weather[0].main}</Chip>
              </Card.Content>
              <Card.Cover
                source={{
                  uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                }}
                style={styles.weatherIcon}
              />
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#1A202C',
  },
  previousWeather: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFD700',
    paddingLeft: 15,
  },
  scrollView: {
    paddingVertical: 10,
  },
  card: {
    marginHorizontal: 12,
    padding: 20,
    height: 310,
    borderRadius: 18,
    backgroundColor: '#2C3E50',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  cardContent: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  weatherIcon: {
    marginTop: 10,
    width: 90,
    height: 90,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  date: {
    fontWeight: 'bold',
    color: '#FFD700',
    fontSize: 16,
  },
  temp: {
    fontSize: 18,
    marginTop: 5,
    color: '#FFFFFF',
  },
  description: {
    color: '#D3D3D3',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  chip: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    color: '#1E2A38',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
  },
});

export default Forecast;
