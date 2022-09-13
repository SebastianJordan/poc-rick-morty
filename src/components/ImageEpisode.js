import useAxios from "axios-hooks";
import { View, StyleSheet, Image } from "react-native";
export function ImageEpisode({ episode }) {
  const [{ data, loading, error }, refetch] = useAxios(episode);

  if (loading)
    return (
      <Image
        style={styles.img}
        source={require("./../assets/loading.gif")}
      ></Image>
    );
  if (error)
    return (
      <Image
        style={styles.img}
        source={require("./../assets/error.gif")}
      ></Image>
    );
  return (
    <View style={styles.imgCard}>
      <Image style={styles.img} source={{ uri: data.image }}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  imgCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    margin: "auto",
  },
});
