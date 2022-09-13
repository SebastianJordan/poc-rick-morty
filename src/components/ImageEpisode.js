import React from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import {View, StyleSheet, Image} from 'react-native';
export function ImageEpisode({episode}) {
  const [{data, loading, error}] = useAxios(episode);

  if (loading) {
    return (
      <Image style={styles.img} source={require('./../assets/loading.gif')} />
    );
  }
  if (error) {
    return (
      <Image style={styles.img} source={require('./../assets/error.gif')} />
    );
  }
  return (
    <View style={styles.imgCard}>
      <Image style={styles.img} source={{uri: data.image}} />
    </View>
  );
}

ImageEpisode.propTypes = {
  episode: PropTypes.string,
};

const styles = StyleSheet.create({
  imgCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    margin: 'auto',
  },
});
