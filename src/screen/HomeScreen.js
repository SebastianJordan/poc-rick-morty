import React from 'react';
import {Text, View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import useAxios from 'axios-hooks';

import {Episode} from '../components/Episode';
import {HeaderProfile} from '../components/HeaderProfile';
export function HomeScreen() {
  const [{data, loading, error}] = useAxios(
    'https://rickandmortyapi.com/api/episode',
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error!</Text>;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderProfile />
        <View style={styles.container}>
          {data.results.map((episode, index) => (
            <Episode episode={episode} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
